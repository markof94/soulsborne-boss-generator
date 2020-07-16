import React from 'react'
import './App.css'
import BossName from './Components/BossName'
import styled from 'styled-components'
import bg from './assets/bg.jpg'
import Title from './Components/Title'
import Credits from './Components/Credits'

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

function App() {
  return (
    <Container>
      <Title>
        {`Soulsborne Boss Name Generator`}
      </Title>
      <BossName />
      <Credits />
    </Container>
  );
}

export default App;
