import React from 'react'
import './App.css'
import BossName from './Components/BossName'
import styled from 'styled-components'
import bg from './assets/bg.jpg'
import Title from './Components/Title'
import Footer from './Components/Footer'

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-image: url(${bg});
`;

class App extends React.Component {
  state = {
    generatedName: ""
  }

  updateName = (name) => {
    this.setState({ generatedName: name })
  }

  render() {
    return (
      <Container>
        <Title>
          {`Soulsborne Boss Name Generator`}
        </Title>
        <BossName
          updateName={this.updateName}
        />
        <Footer
          generatedName={this.state.generatedName}
        />
      </Container>
    );
  }

}

export default App;
