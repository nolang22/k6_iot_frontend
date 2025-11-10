import ToggleSection from '@/components/ToggleSection'
import React from 'react'
import B_Axios from './B_Axios'
import C_ArticlePage from './C_ArticlePage'

function Index() {
  return (
    <div>
      <h1 style={{ backgroundColor: "black", color: "white" }}>
        == 리액트 Hooks ==={" "}
      </h1>

      <ToggleSection title="1. Axios">
        <B_Axios /> <hr />
      </ToggleSection>

      <ToggleSection title="2. Article(REST API + REACT)">
        <C_ArticlePage /> <hr />
      </ToggleSection>
    </div>
  )
}

export default Index