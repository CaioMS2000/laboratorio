import React from "react";

import "./App.css";
import imge from "../../images/45f32bf3-6018-4f07-8089-a3d3981a90d8-profile_banner-480.jpeg";

const paleta = false;

function App(): JSX.Element {
  return (
    <>
      {paleta && (
        <div className="grid-container">
          <div
            className="grid-item"
            style={{ backgroundColor: "#820933" }}
          ></div>
          <div
            className="grid-item"
            style={{ backgroundColor: "#344966" }}
          ></div>
          <div
            className="grid-item"
            style={{ backgroundColor: "#FF3562" }}
          ></div>
          <div
            className="grid-item"
            style={{ backgroundColor: "#8075FF" }}
          ></div>
          <div
            className="grid-item"
            style={{ backgroundColor: "#F6CFC8" }}
          ></div>
        </div>
      )}
      <div className="App">
        <header>
          {/* <div className="img"> <img src={imge} alt="" /> </div> */}
          <article>
            Olá, eu sou Yasmin Variani, sou streamer e artista digital. Este
            site me serve de portifólio, ou uma vitrine virtual se preferir.
            <br />
            <br />
            Aqui você vai encontrar alguns dos designs que fiz.
            <br />
            <br />
            Para quem tem interesse, faço lives na{" "}
            <a
              href="https://www.twitch.tv/yvariani"
              target="_blank"
              rel="noreferrer"
            >
              Twitch
            </a>{" "}
            jogando os mais diversos jogos.
          </article>
        </header>
        <main>
          <section></section>
        </main>
      </div>
    </>
  );
  // return (
  //   <>
  //     <img src={imge} alt="" />
  //   </>
  // );
}

export default App;
