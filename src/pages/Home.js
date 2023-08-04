import React, { useState, useContext } from "react";
import Axios from "axios";

import {
  Row,
  Container,
  Col,
  Input,
  Button,
  InputGroup,
 
} from "reactstrap";
 
import Usercart from "../ccomponents/usercaert";
import { UserContext } from "../context/Ucontex";
import Repos from "../ccomponents/Repo";
import { redirect,Route,Navigate } from "react-router-dom";

import { toast } from "react-toastify";


const Home=()=>{
const con=useContext(UserContext);
const [query,Setquery]=useState('');
const [User,Setuser]=useState('');
const fet=async ()=>{
    try {
        const { data } = await Axios.get(`https://api.github.com/users/${query}`);
        Setuser(data);
        console.log({data})
        
    } catch (error) {
        toast("no there",{type:"error"})
        
    }
}

if(!con.user?.email) {
    return <Navigate replace to="/Signin" />
}
    


return (
    <Container>
      <Row className=" mt-3">
        <Col md="5">
          <InputGroup>
            <Input
              type="text"
              value={query}
              onChange={e=>Setquery(e.target.value)}
              placeholder="Please provide the username"
            />
            
              <Button color="primary" onClick={fet}>Fetch User</Button>
            
          </InputGroup>
          {User ? <Usercart user={User}/>:null}
        </Col>
        <Col md="7">{User ? <Repos repos_url={User.repos_url} />:null}</Col>
      </Row>
    </Container>
  );
}



export default Home;