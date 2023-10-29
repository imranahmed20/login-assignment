import styled from "styled-components"
import image from '../src/assets/image.png'
import Input from "./Component/input"
import Button from "./Component/Button"
import Label from "./Component/Label"

function App() {

  return (
    <MainContainer>
      <OnePart>
        <img src={image} alt="" />
      </OnePart>
      <AnotherPart>
        <LoginText>Login</LoginText>
        <InputContainer>
          <Label></Label>
          <Input type='text' placeholder="Enter Login ID"></Input>
          <Input type='password' placeholder="Enter Password"></Input>
        </InputContainer>
        <ForgetText>
          <Remember>Remember Me</Remember>
          <Change>Change Password</Change>
        </ForgetText>
        <Agree>Agree To <a href="">Tram And Condition</a></Agree>
        <ButtonContainer>
          <Button content="Login"></Button>
        </ButtonContainer>
        <Account>
          Do not have an account?<a href="">Register Here</a>
        </Account>
      </AnotherPart>
    </MainContainer>
  )
}

const MainContainer = styled.div`
display: flex;
justify-content: space-evenly;
width: 100%;
height: 100%;
`
const LoginText = styled.h2`
margin: 3rem 0 2rem 0;
text-align: center;
font-weight: 700;
font-size: 48px;
`

const InputContainer = styled.div`
width: 100%;

`
const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Account = styled.p`
text-align: center;
`

const OnePart = styled.div`


`
const AnotherPart = styled.div`

`
const ForgetText = styled.div`
display: flex;
justify-content: space-between;
`
const Remember = styled.p`
`
const Change = styled.p`
`
const Agree = styled.p`
`
export default App
