// authApi.ts

import { privateAPi, publicApi } from "./axiosInstance";

export interface SignInRequest {
  loginId: string;
  password: string;
}

export interface SignInResponse {
  username: string;
  accessToken: string;
}

//* 로그인
export const signIn = async (data: SignInRequest): Promise<SignInResponse> => {
  const res = await publicApi.post('/auth/sign-in', data);

  if (!res.data.success) throw new Error('Login failed');
  return res.data.data;
}

//* 로그아웃
export const signOut = async (): Promise<void> => {
  await privateAPi.post("/auth/sign-out");
}

//* 액세스 토큰 리프레스
export const refreshAccessToken = async (): Promise<string> => {
  const res = await publicApi.post("/auth/refresh_token", {}, {withCredentials: true});
  if (!res.data.success) throw new Error('Refresh failed');
  return res.data.data.accessToken;
}