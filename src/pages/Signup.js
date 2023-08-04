import React, { useContext, useState } from "react";
import {
    Container,
    Form,
    Button,
    FormGroup,
    Label,
    Col,
    Input,
    Row,
    Card,
    CardBody,
    CardFooter,
    CardHeader
  } from "reactstrap";
  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
  import { UserContext } from "../context/Ucontex";
  import { redirect,Route,Navigate } from "react-router-dom";
 import { toast } from "react-toastify";
  
const Signup =()=>{
    const contxt=useContext(UserContext)
    const [email,Setemail]=useState('')
    const [password,Setpss]=useState('')
    const Handlsubmit=()=>{
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
  .then((res) => {
    console.log(res)
    contxt.SetUser({email:res.user.email,uuis:res.user.uid})
  })
  .catch((error) => {
    console.log(error)
    toast(error.message,{
        type:"error"
    })
   
  });
  

  }
  const Hsndlesubmit=(e)=>{
    e.preventDefault();
    Handlsubmit();
        
    }
   if(contxt.user?.email) {
    return <Navigate replace to="/Signin"/>
    
    
     
   }
   return (
    <Container className='text-center'>
        <Row>
            <Col lg={6} className='offset-lg-3 mt-5'>
                <Card>
                    <Form onSubmit={Hsndlesubmit}>
                        <CardHeader className=''>Signup here</CardHeader>
                        <CardBody>
                            <FormGroup row>
                                <Label for='email' sm={3}>
                                    Email
                                </Label>
                                <Col sm={9}>
                                    <Input
                                        type='email'
                                        name='email'
                                        id='email'
                                        placeholder='provide your email'
                                        value={email}
                                        onChange={e => Setemail(e.target.value)}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for='password' sm={3}>
                                    Password
                                </Label>
                                <Col sm={9}>
                                    <Input
                                        type='password'
                                        name='password'
                                        id='password'
                                        placeholder='your password here'
                                        value={password}
                                        onChange={e => Setpss(e.target.value)}
                                    />
                                </Col>
                            </FormGroup>
                        </CardBody>
                        <CardFooter>
                            <Button type='submit' block color='primary'>
                                Sign In
                            </Button>
                        </CardFooter>
                    </Form>
                </Card>
            </Col>
        </Row>
    </Container>
);
}

export default Signup;