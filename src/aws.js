import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import youth_zest from "./awsc.png";
import lol_logo from "./AWS-Academy-Accredited-Educator-Badge.png";
import "./backup_css.css";

export default function Aws() {
  return (
    <Card className="root">
      <CardHeader
        avatar={<Avatar alt="Remy Sharp" src={lol_logo} />}
        title="AWS Academy Graduate  "
        subheader="January 2021"
        className="testclass"
      />
      <CardMedia className="media" image={youth_zest} />
      <CardMedia></CardMedia>
      <CardContent>
        <p className="cardtext">AWS Academy Cloud Foundations </p>
      </CardContent>
    </Card>
  );
}
