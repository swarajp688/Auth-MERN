import React from 'react'
import styled from 'styled-components'
import NotFoundWrapper from "../styles/NotFoundWrapper";
const NotFound = () => {
  return (
    <NotFoundWrapper>
        <div class="container">
        <div class="row">
        <div class="xs-12 md-6 mx-auto">
            <div id="countUp">
                <div class="number" data-count="404">0</div>
                <div class="text">Page not found</div>
                <div class="text">This may not mean anything.</div>
                <div class="text">I'm probably working on something that has blown up.</div>
            </div>
        </div>
    </div>
</div>            
            
    </NotFoundWrapper>
  )
}

export default NotFound