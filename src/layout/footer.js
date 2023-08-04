import React from "react";
import { Container } from "reactstrap";

import { UserContext } from "../context/Ucontex";
import { useContext } from "react";


const Footer =()=>{
    const kk=useContext(UserContext)
return (
    <Container fluid tag='footer' className="text-center bg-info text-white text-uppercase fixed-bottom ">
        <h1>hey </h1>
    {kk.user?.email}
    </Container>
)

}

export default Footer;