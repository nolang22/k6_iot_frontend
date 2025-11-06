import React from 'react'
import Example01 from './a_basic/Example01'
import ToggleSection from '@/components/ToggleSection'
import Example02 from './a_basic/Example02'
import Example03 from './a_basic/Example03'
import Example04 from './a_basic/Example04'
import Example05 from './a_basic/Example05'

function Index() {
  return (
    <div>
      <h1 style={{ backgroundColor: "black", color: "white" }}>
        == example ==={" "}
      </h1>

      <ToggleSection title="Example 01">
        <Example01 /> <hr />
      </ToggleSection>

      <ToggleSection title="Example 02">
        <Example02 /> <hr />
      </ToggleSection>

      <ToggleSection title="Example 03">
        <Example03 /> <hr />
      </ToggleSection>

      <ToggleSection title="Example 04">
        <Example04 /> <hr />
      </ToggleSection>

      <ToggleSection title="Example 05">
        <Example05 /> <hr />
      </ToggleSection>
    </div>
  )
}

export default Index