import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'
import { login } from '../redux/apiCalls'
import { mobile } from '../responsive'
const Container = styled.div`
    width: 100vw;
    height: 100vh; 
    background:linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
      display: flex;
      align-items: center;
      justify-content: center; 
      background-size: cover;
`
const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: #fff;
${mobile({width:'80%'})};
`
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`
const Input = styled.input`
    flex:1;
    min-width: 40%; 
    margin: 10px 0px;
    padding:10px;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Button=styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color:white;
    cursor: pointer;
    margin-bottom: 10px;

    &:disabled{
      cursor: not-allowed;
      color: green;
    }
`
const Error=styled.div`
   color:red;
   font-size: 14px;
   margin: 5px;
`
const Link=styled.a`
    margin: 5px 0px; 
    font-size: 12px;
    font-weight: 100;
    cursor: pointer;
    text-decoration: underline;
`
const Login = () => {
  const [username,setUserName]=useState('');
  const [password,setPassword]=useState('');
  const dispatch=useDispatch();
  const {isFethcing, isError,currentUser}=useSelector(state=>state.user);
  const handleLogin=(e)=>{
    e.preventDefault( )
    if(!username || !password)alert('username or password is missing');
    login(dispatch, {username, password}); 
  }
  return (
    <Container>
    <Wrapper>
      {currentUser && <Redirect to='/' />}
        <Title>SIGN IN</Title>
        <Form> 
            <Input placeholder="username" onChange={(e)=>setUserName(e.target.value)}/>
            <Input placeholder="password" type="password" onChange={(e)=>setPassword(e.target.value)}/>
            <Button type="button" onClick={handleLogin} disabled={isFethcing}>LOGIN</Button>
             {isError && <Error>Something went wrong please try again...</Error>}
            <Link>FORGOT PASSWORD?</Link>
            <Link>CREATE A NEW ACC OUNT</Link>
        </Form>
    </Wrapper>
</Container>
  )
}

export default Login
