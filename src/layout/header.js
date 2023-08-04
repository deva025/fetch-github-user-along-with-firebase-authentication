import React from "react";
import { useContext,useState } from "react";
import { Navbar,Collapse,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,NavbarText } from "reactstrap";
import { Link } from "react-router-dom";

import { UserContext } from "../context/Ucontex";

const Header=()=>{

    const contset=useContext(UserContext)
return (
    <Navbar color="info" light expand='md'>
        <NavbarBrand><Link to='/' className="text-white">lco get app</Link></NavbarBrand>
        <NavbarText className="text-white">{contset.user?.email ? contset.user.email:""}</NavbarText>
        <NavbarToggler/>
        <Collapse navbar>
        <Nav className="ml-auto" navbar>
            {contset.user ? (<NavItem>
                <NavLink onClick={()=>contset.SetUser(null)} className="text-white">
                    logout
                </NavLink>
            </NavItem>):(<><NavItem>
                <NavLink tag={Link} to='/Signup' className="text-white">
                    signup
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={Link} to='/Signin' className="text-white">
                    signin
                </NavLink>
            </NavItem></>)}
            
            
        </Nav>
        </Collapse>
    </Navbar>
    
)
}

export default Header;