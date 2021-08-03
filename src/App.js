import logo from "./logo.svg";
import { BrowserRouter as Router } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faCertificate,
  faAmericanSignLanguageInterpreting,
  faIdCard,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Gamefest from "./Test_icon";
import Aciv_nsu2016 from "./2016_aciv";
import Youth_zest2018 from "./youth_zest";
import Aws from "./aws";
import Unity_script from "./unity_script";
import Udemy from "./udemy";
import niloy from "./niloy.jpg";
import idcard from "./id-card-alt-solid.svg";
import money from "./money-check-alt-solid.svg";
import tshirt from "./tshirt-solid.svg";
import github from "./github-square-brands.svg";
import "./App.css";
import "./backup_css.css";
library.add(
  fab,
  faCheckSquare,
  faCoffee,
  faCertificate,
  faAmericanSignLanguageInterpreting
);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="grid">
          <div id="first_box">
            <h1 id="name_text">
              <p className="name">Tanzimul Haque Niloy</p>
            </h1>
          </div>
        </div>

        {/*PROFILE PICTURE*/}

        <div className="grid ">
          <div id="">
            <h1 id="des_text">
              <img src={niloy} id="profile_pic" className="profile_pic" />
            </h1>
            <div id="icons_div">
              {" "}
              <Router>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  className="facebook"
                >
                  <FontAwesomeIcon icon={["fab", "facebook-square"]} />
                </a>
                <a
                  href="https://www.linkedin.com/in/tanzimulhaque/"
                  target="_blank"
                  className="linkedin"
                >
                  <FontAwesomeIcon icon={["fab", "linkedin"]} />
                </a>
                <a
                  href="https://github.com/niloy32"
                  target="_blank"
                  className="twitter"
                >
                  <FontAwesomeIcon icon={["fab", "github-square"]} />
                </a>
              </Router>
            </div>
          </div>
        </div>
        {/*PROFILE DETAILS*/}
        <div className="grid personnal_gric">
          <p id="Person_Details">Person Details</p>
          <div id="Person_Details3">
            <p id="Person_Details2">
             I am a computer science and engineering graduate. I have finished my undergraduate degree from the University of liberal arts Bangladesh in  
               June 2021. Currently, I’m working as an intern DevSecOps Cloud Engineer at Brotecs Technologies Limited. I mainly work with cloud-based VOIP 
               apps built with JS, PHP, and python. I have profound knowledge of anything computer-related. I have strong analytic and creative skills. 
               I always keep up to date with any new technology and news about the tech industry. I have done a few projects in university and 
               I have a lot of experience working with many teams. I have also worked as a freelancer. In my free time, I try learning new 
               skills from Coursera or udemy and play video games. I’ve worked on both the frontend and backend. I have also used Firebase, MySQL, 
                 and PHP for small projects of my own. For my last final project in university I made a Block-chain based Supply-Chain-Management App 
                 (link in github).  I am eager to learn new things and I can adapt to any situation. I have participated in a lot of gaming tournaments 
                 so I am a really good team player and also, I can work under stress.  
            </p>
          </div>
        </div>

        {/*EDUCATIONAL DETAILS*/}

        <div className="grid EDUCATION_gird">
          <p id="Person_Details">EDUCATION</p>
          <div id="EDUCATION_div">
            <p className="" id="institute">
              Bir Shreshtha Noor Mohammad Rifles Public School & College
            </p>

            <p className="" id="years">
              S.S.C (2013)- H.S.C (2015)
            </p>
            <p></p>
            <p className="" id="institute">
              University of Liberal Arts Bangladesh
            </p>
            <p className="" id="years">
              Under Graduation in Computer Science And Engineering (2016-2020)
            </p>
          </div>
          {/* <video loop autoPlay muted id="edu_video">
            <source src="video2.mp4" type="video/mp4" />
          </video>*/}
        </div>

        {/*LANGUEAGE DETAILS*/}

        <div className="grid" id="languages_grid">
          <p id="" className="What_Computer">
            What Computer languages I Know
          </p>
          <div id="languages_Details">
            <li>Java Script/React</li>
            <li>Nodejs, Express API</li>
            <li>FireBase</li>
            <li>Git/ GitHub</li>
            <li>C# / Unity Game Engine</li>
          </div>
        </div>

        {/*ACIVMENT DETAILS*/}

        <div className="grid Acivemnts_grid" id="Acivemnts_grid">
          <p id="Acivemnts_Details">Acivemnts</p>
          <div id="Aciv_div">
            <div className="card_div">
              <Gamefest />
              <Aciv_nsu2016 />
              <Youth_zest2018 />
            </div>
            <div className="card_div">
              <Aws />
              <Unity_script />
              <Udemy />
            </div>
          </div>
        </div>

        <div className="grid 'id=" languages_grid>
          <p id="" className="What_Computer Links_to_websites">
            Links to websites I made
          </p>
          <div id="languages_Details">
            <a
              href=" https://portfolio-reactv1.web.app/"
              target="_blank"
              className="idcard"
            >
              <h1 className="link_class">
                <img src={idcard} id="port_svg" /> portfolio I made in react
                <img src={idcard} id="port_svg" />
              </h1>
            </a>
            <a
              href="  https://dhaka-stock-exchange-test1.web.app/"
              target="_blank"
              className="idcard"
            >
              <h1 className="link_class">
                <img src={money} id="port_svg" /> Stock-Exchange website that
                generates random data
                <img src={money} id="port_svg" />
              </h1>
            </a>
            <a
              href=" https://blisstyle-8141e.firebaseapp.com/"
              target="_blank"
              className="idcard"
            >
              <h1 className="link_class">
                <img src={tshirt} id="port_svg" />
                E-commerce demo Website with funtional cart system
                <img src={tshirt} id="port_svg" />
                <a
                  href=" https://github.com/niloy32"
                  target="_blank"
                  className="idcard"
                >
                  <h1 className="link_class">
                    <img src={github} id="port_svg" />
                    MY GitHub
                    <img src={github} id="port_svg" />
                  </h1>
                </a>
              </h1>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
