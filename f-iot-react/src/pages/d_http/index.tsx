import ToggleSection from '@/components/ToggleSection'
import React from 'react'
import B_Axios from './B_Axios'

function Index() {
  return (
    <div>
      <h1 style={{ backgroundColor: "black", color: "white" }}>
        == 리액트 Hooks ==={" "}
      </h1>

      <ToggleSection title="1. Axios">
        <B_Axios /> <hr />
      </ToggleSection>
    </div>
  )
}

export default Index