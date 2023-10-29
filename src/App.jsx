import styled from "styled-components"
import image from '../src/assets/image.png'
import Input from "./Component/input"
import Button from "./Component/Button"
import Label from "./Component/Label"
import Checkbox from "./Component/Checkbox"

function App() {

  return (
    <MainContainer>
      <OnePart>
        <img style={{ width: "100%", height: "100%", maxWidth: 'auto' }} src={image} alt="" />
      </OnePart>
      <AnotherPart>
        <LoginText>Login</LoginText>
        <InputContainer>
          <Label text="Login ID"></Label>
          <Input type='text' placeholder="Enter Login ID"></Input>
          <Label text="Password"></Label>
          <Input type='password' placeholder="Enter Password"></Input>
        </InputContainer>
        <ForgetText>
          <Remember style={{ fontSize: "18px" }}><Checkbox type="checkbox"></Checkbox> Remember Me</Remember>
          <Change style={{ color: "#F78719", fontSize: "18px" }}>Change Password</Change>
        </ForgetText>
        <Agree style={{ fontSize: "18px" }}><Checkbox type="checkbox"></Checkbox>Agree To <a href="" style={{ color: "#F78719" }}>Tram And Condition</a></Agree>
        <ButtonContainer>
          <Button content="Login"></Button>
        </ButtonContainer>
        <Account style={{ fontSize: "18px" }}>
          Do not have an account? <a href="" style={{ color: "#F78719" }}> Register Here</a>
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
@media (max-width: 800px) {
  flex-direction: column;
}
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
