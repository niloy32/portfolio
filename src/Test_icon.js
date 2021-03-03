import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import gamefest_2015 from "./gamefest_2015.jpg";
import lol_logo from "./lol_logo.jpg";
export default function Gamefest() {
  return (
    <Card className="root">
      <CardHeader
        avatar={<Avatar alt="Remy Sharp" src={lol_logo} />}
        className="testclass"
        title="Gamefest"
        subheader="January 2015"
      ></CardHeader>
      <CardMedia className="media" image={gamefest_2015} />
      <CardMedia></CardMedia>
      <CardContent>
        <p className="cardtext">Runners-up of League of legends</p>
      </CardContent>
    </Card>
  );
}
