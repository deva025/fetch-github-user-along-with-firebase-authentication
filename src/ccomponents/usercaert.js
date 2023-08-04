import React from "react";
import { Card,CardBody } from "reactstrap";

const Usercart=({user})=>{
return(
    <Card className="text-center mt-2 mb-2">
        <img src={user.avatar_url} className="rounded mx-auto d-block"/>
        <CardBody>
        <div className="text-primary">{user.name}</div>
        <div className="text-primary">{user.location}</div>
        <div className="text-primary">{user.bio}</div>
        <div className="text-info">
          Available for hire: {user.hireable ? "YES" : "NOPE"}
        </div>
        <div className="text-info">Followers :{user.followers}</div>
      </CardBody>
    </Card>
)
}

export default Usercart;