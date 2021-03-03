import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import youth_zest from "./youth_zest.jpg";
import lol_logo from "./lol_logo.jpg";

export default function Youth_zest2018() {
  return (
    <Card className="root">
      <CardHeader
        avatar={<Avatar alt="Remy Sharp" src={lol_logo} />}
        title="Youthzest Bangladesh "
        subheader="October 2018"
        className="testclass"
      />
      <CardMedia className="media" image={youth_zest} />
      <CardMedia>
        {/* <video loop autoPlay muted id="game_video">
          <source src={video} type="video/mp4" />
        </video> */}
      </CardMedia>
      <CardContent>
        <p className="cardtext">Runners-up of League of legends </p>
      </CardContent>
    </Card>
  );
}
