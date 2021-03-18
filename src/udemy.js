import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import youth_zest from "./udemy-logo-2.jpg";
import lol_logo from "./udemy-logo-1.jpg";

export default function Udemy() {
  return (
    <Card className="root assd">
      <CardHeader
        avatar={<Avatar alt="Remy Sharp" src={lol_logo} />}
        title="Udemy courses completed "
        subheader="March 2021"
        className="testclass"
      />
      <CardMedia className="media" image={youth_zest} />
      <CardMedia></CardMedia>
      <CardContent>
        <p className="cardtext">Making your first game in unity </p>
      </CardContent>
    </Card>
  );
}
