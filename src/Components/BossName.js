import React from 'react'
import styled from 'styled-components'
import BossGenerator from '../Helpers/BossGenerator'
import GenerateButton from './GenerateButton'
import Checkbox from './Checkbox'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px;
`;

const Name = styled.div`
    font-size: calc(5vmin + 14px);
    text-align: center;
    color: white;
    font-family: EBGaramond;
    text-shadow: 0 0 2px rgba(0, 0, 0, 1);
    margin:128px 0;
    min-height: 100px;

    ::selection {
        color: rgba(255, 255, 255, 0.35);
        background: #4f1f0b;
      }
`;

class BossName extends React.Component {
    constructor() {
        super();
        this.bossGenerator = new BossGenerator();

        const bossName = this.bossGenerator.generateBoss();
        localStorage.setItem('generatedName', bossName);

        this.state = {
            boss: bossName,
            doAnimation: false,
            isWeirdChecked: false
        }
    }

    handleClick = () => {
        const bossName = this.state.isWeirdChecked ? this.bossGenerator.generateWeirdBoss() : this.bossGenerator.generateBoss();

        this.props.updateName(bossName)

        this.setState({
            boss: bossName,
            doAnimation: true
        })
    }

    resetAnimation = () => {
        this.setState({
            doAnimation: false
        })
    }

    toggleWeirdness = () => {
        this.setState(prevState => ({
            isWeirdChecked: !prevState.isWeirdChecked
        }))
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
                <Checkbox
                    onClick={this.toggleWeirdness}
                    isChecked={this.state.isWeirdChecked}
                />
            </Container>
        )
    }
}

export default BossName;