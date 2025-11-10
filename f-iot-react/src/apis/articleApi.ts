// articleApi.ts

import C_Article from "@/pages/d_http/C_Article";
import { privateAPi, publicApi } from "./axiosInstance";

//& +) DTO 타입 설계
//? 게시글 새성 요청 DTO
interface ArticleCreateRequest {
  title: string;
  content: string;
}

//? 게시글 수정 요청 DTO
interface ArticleUpdateRequest {
  title: string;
  content: string;
}

//? 게시글 응답 DTO (LIST)
export interface ArticleListResponse {
  id: number;
  title: string;
  authorLoginId: string;
  createdAt: string;
}
//? 게시글 목록 응답 전체
export type ArticleListResponseList = ArticleListResponse[];

//? 게시글 응답 DTO (Detail)
export interface ArticleDetailResponse {
  id: number;
  title: string;
  content: string;
  authorLoginId: string;
  createdAt: string;
  updatedAt: string;
}

//% == 인증 객체 필요 X ==
//* 게시글 전체 조회
export const getAllArticles = async () => {
  const res = await publicApi.get("/articles");
  //res.data: 실제 axios 결과값 (응답)
  //? cf) ResponseDto.data 실제 데이터값
  return res.data.data;
};

//* 게시글 단건 조회
export const getArticleById = async (id: number) => {
  const res = await publicApi.get(`/articles/${id}`);
  //? cf) ResponseDto.data 실제 데이터값
  return res.data.data;
};

//% == 인증 객체 필요 O ==
//* 게시글 생성
// export const createArticle = async (data: ArticleCreateRequest) {
//   토큰 가져오기 문법
//   const token = '';
//   const res = await privateAPi.post("/articles", data, {
//     "headers": {
//       "Authorization": `Bearer ${token}`
//     }
//   })
// }
export const createArticle = async (data: ArticleCreateRequest) => {
  const res = await privateAPi.post("/articles", data);
  return res.data.data;
};
//* 게시글 수정
export const updateAricle = async (id: number, data: ArticleUpdateRequest) => {
  const res = await privateAPi.put(`/articles/${id}`);
  return res.data.data;
};
//* 게시글 삭제
export const deleteAricle = async (id: number) => {
  const res = await privateAPi.delete(`/articles/${id}`);
  return res.data.data;
};
