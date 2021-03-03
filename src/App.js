import logo from "./logo.svg";
import { BrowserRouter as Router } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faCertificate,
  faAmericanSignLanguageInterpreting,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Gamefest from "./Test_icon";
import Aciv_nsu2016 from "./2016_aciv";
import Youth_zest2018 from "./youth_zest";
import niloy from "./niloy.jpg";
import "./App.css";
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
        {/* <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/}
        <div className="grid">
          <div id="first_box">
            <h1 id="name_text">
              <img src={logo} className="App-logo " alt="logo" />
              <img src={logo} className="App-logo logo2" alt="logo" />
              <p className="name">Tanzimul Haque</p>
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
                  href="https://www.linkedin.com/"
                  target="_blank"
                  className="linkedin"
                >
                  <FontAwesomeIcon icon={["fab", "linkedin"]} />
                </a>
                <a
                  href="https://www.twitter.com/"
                  target="_blank"
                  className="twitter"
                >
                  <FontAwesomeIcon icon={["fab", "twitter-square"]} />
                </a>
              </Router>
              {/*<a href="#" className="fa fa-facebook"></a>
              <a href="#" className="fa fa-linkedin"></a>
              <a href="#" className="fa fa-twitter"></a>*/}
            </div>
          </div>
        </div>
        {/*PROFILE DETAILS*/}
        <div className="grid personnal_gric">
          <p id="Person_Details">Person Details</p>
          <div id="Person_Details3">
            <p id="Person_Details2">
              Person DetailsI am a computer science and engineering student
              currently studying at the University of Liberal Arts Bangladesh. I
              have profound knowledge of anything computer-related. I have
              strong analytic and creative skills. I always keep up to date with
              any new technology and news about the tech industry. I have done
              few projects in university and I have a lot of experience working
              with a team. Currently, I’m working as a freelancer. In my free
              time, I try learning new skills from Coursera or udemy and play
              video games. I’ve made some websites using HTML, CSS, and
              JavaScript and currently learning unity game development. I have
              also used Firebase, MySQL, and PHP for small projects. I am eager
              to learn new things and I can adapt to any situation. I have
              participated in a lot of gaming tournaments so I am a really good
              team player and also, I can work under stress.
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
            <p></p>
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
            <li>C++</li>
            <li>HTML/CSS</li>
            <li>Java Script</li>
            <li>Python</li>
            <li>C# (C sharp)</li>
            <li>Unity Game Engine</li>
          </div>
        </div>

        {/*ACIVMENT DETAILS*/}

        <div className="grid Acivemnts_grid" id="Acivemnts_grid">
          <p id="Acivemnts_Details">Acivemnts</p>
          <div id="Aciv_div">
            {/* <li>
              Participated in Gamefest (2015) Runners-up of League of legends
            </li>
            <li>
              Participated in Gamescon (2016) Champion of League of legends
            </li>
            <li>
              Participated in NSU Cybernauts competition arranged by NSU
              Computer Club (2016) Champion of League of legends
            </li>
            <li>
              Participated in Youthzest Bangladesh hosted by Youthzest (2018)
              Runners-up of League of legends
            </li>
            <li>
              63rd Annual Science Festival 2019 Saint Joseph Higher Secondary
              School Runners-up of League of legends
            </li>
            <li>
              Participated in NSU Cybernauts competition arranged by NSU
              Computer Club (2019) Runners-up of League of legends
            </li> */}

            <div className="card_div">
              <Gamefest />

              <Aciv_nsu2016 />

              <Youth_zest2018 />
            </div>
          </div>
          {/* <video loop autoPlay muted id="game_video">
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag. I suggest you upgrade
            your browser.
          </video> */}
        </div>

        {/*junk 

        <div className="test_div">
          <div>
            <div>
              <FontAwesomeIcon icon="american-sign-language-interpreting" />
              <FontAwesomeIcon icon="check-square" />
              ready!
            </div>
          </div>
        </div>*/}
      </header>
    </div>
  );
}

export default App;
