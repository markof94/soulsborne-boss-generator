import React from 'react'
import styled from 'styled-components'
import BossGenerator from '../Helpers/BossGenerator'
import GenerateButton from './GenerateButton'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Name = styled.div`
    font-size: 48px;
    color: white;
    font-family: EBGaramond;
    user-select: none;
    text-shadow: 0 0 2px rgba(0, 0, 0, 1);
    
`;

class BossName extends React.Component {
    constructor() {
        super();
        this.bossGenerator = new BossGenerator();

        this.state = {
            boss: this.bossGenerator.generateBoss(),
            doAnimation: false
        }
    }

    handleClick = () => {
        this.setState({
            boss: this.bossGenerator.generateBoss(),
            doAnimation: true
        })
    }

    resetAnimation = () => {
        this.setState({
            doAnimation: false
        })
    }

    render() {
        return (
            <Container>
                <Name
                    style={
                        this.state.doAnimation ?
                            { animation: 'fade-in 0.4s ease 1 both' }
                            :
                            { animation: 'none' }
                    }
                    onAnimationEnd={() => this.resetAnimation()}
                >
                    {this.state.boss}
                </Name>

                <GenerateButton
                    onClick={() => this.handleClick()}

                />
            </Container>
        )
    }
}

export default BossName;