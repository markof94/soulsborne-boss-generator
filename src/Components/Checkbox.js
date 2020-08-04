import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank'
import CheckBoxIcon from '@material-ui/icons/CheckBox'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    font-size: calc(1.5vmin + 12px);
    color: white;
    font-family: EBGaramond;
    user-select: none;
    text-shadow: 0 0 4px rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 4px 12px;
    
    border-radius: 4px;

    transition: all 0.2s ease;

    -webkit-tap-highlight-color: transparent;

    &:active{
        transform: translate3d(0, 4px, 0);
    }

    ${props => props.isChecked && `
        color: #bd1300;
        font-weight: 600;
        opacity: 0.8;
    `}
`;

const CheckBoxContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 8px;

    svg{
        font-size: inherit;
    }
`;

class Checkbox extends React.Component {
    render() {
        return (
            <Container
                onClick={this.props.onClick}
                isChecked={this.props.isChecked}
            >
                {"Chaos Mode (18+)"}
                <CheckBoxContainer>
                    {
                        this.props.isChecked ?
                            <CheckBoxIcon />
                            :
                            <CheckBoxOutlineBlankIcon />
                    }
                </CheckBoxContainer>
            </Container>
        )
    }
}

export default Checkbox;