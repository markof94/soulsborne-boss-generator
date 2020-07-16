import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    font-size: calc(3vmin + 12px);
    color: white;
    font-family: EBGaramond;
    user-select: none;
    
    
    text-shadow: 0 0 2px rgba(0, 0, 0, 1);

    padding: 4px 64px;
    margin: 24px;

    border-top: 2px solid #251d1b;
    border-bottom: 2px solid #251d1b;

    transition: all 0.1s ease;

    cursor: pointer;

    &:hover{
        background-color: #4f1f0b;
    }

    &:active{
        background-color: transparent;
    }
`;

class GenerateButton extends React.Component {
    render() {
        return (
            <Container
                onClick={this.props.onClick}
            >
                {"GENERATE"}
            </Container>
        )
    }
}

export default GenerateButton;