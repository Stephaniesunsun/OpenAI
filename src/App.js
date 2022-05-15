import { Prompt } from './components/Prompt';
import { Engines } from './components/Engines';
import styled from '@emotion/styled';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <Container>
      <Title>fun with AI</Title>
      <Engines />
      <Prompt />
      <ToastContainer 
        autoClose={2000}
      />
    </Container>
  );
}

export default App;

const Container =styled('div')`
  display: flex; 
  flex-direction: column;
`

export const Title = styled('h1')`
  font-size:74px;
  font-weight: 700;
  margin: 53px 0px 0px 68px;
`
