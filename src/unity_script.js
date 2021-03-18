import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import youth_zest from "./unity2.jpg";
import lol_logo from "./unity.jpg";

export default function Unity_script() {
  return (
    <Card className="root">
      <CardHeader
        avatar={<Avatar alt="Remy Sharp" src={lol_logo} />}
        title="Unity courses completed "
        subheader="February 2021"
        className="testclass"
      />
      <CardMedia className="media" image={youth_zest} />
      <CardMedia></CardMedia>
      <CardContent>
        <p className="cardtext">Completed-Unity C# Survival Guide </p>
      </CardContent>
    </Card>
  );
}
