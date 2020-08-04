
import React from 'react'
import styled from 'styled-components'
import Credits from './Credits'
import ShareToolbar from './ShareToolbar'

const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 100%;
   margin-top: 32px;
   
`;

class Checkbox extends React.Component {
    render() {
        return (
            <Container>
                <ShareToolbar 
                    generatedName={this.props.generatedName}
                />
                <Credits />
            </Container>
        )
    }
}

export default Checkbox;