import React from "react";

import "./App.css";
// import { profilePicture } from "../../images";
import * as IMAGES from "../../images";
import { imgs } from "../../images";

const paleta = false;
const { images } = IMAGES;
const { profilePicture } = imgs;
const obj = JSON.parse(JSON.stringify(imgs));

// Object.entries(images).map((e, i) => {
//   console.log(e);
// });

function App(): JSX.Element {
  function render() {
    const res: React.DetailedHTMLProps<
      React.ImgHTMLAttributes<HTMLImageElement>,
      HTMLImageElement
    >[] = new Array();

    let c: number = 0;
    console.log(images);
    console.log("######");
    for (let key in images) {
      if (images[key].module !== profilePicture) {
        console.log(images[key]);
        c = c + 1;
        res.push(
          <img
            className="carrousel-iten"
            src={images[key].module}
            key={c}
            alt=""
          />
        );
      }
    }

    return res;
  }

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
          <div className="img">
            <img className="profilePicture" src={profilePicture} alt="" />
            <p className="profileNickname">yVariani</p>
          </div>
        </header>
        <h1>
          Olá, eu sou Yasmin Variani, sou streamer e artista digital. Este site
          me serve de portifólio, ou uma vitrine virtual se preferir.
        </h1>
        <br />
        <br />
        <main>
          <section>
            <article>
              Aqui você vai encontrar alguns dos desenhos/designs que fiz. A
              arte de desenhar é uma das minhas paixões, e adoro trazer esse
              conteúdo pras minhas lives. Atualmente eu uso{" "}
              <i style={{ color: "#fae" }}>*Ipad, programa e mesa*</i>
              <br />
              <br />
            </article>
          </section>
        </main>
        <div className="divisor"></div>
        <aside>
          Para quem tem interesse, faço lives na{" "}
          <a
            href="https://www.twitch.tv/yvariani"
            target="_blank"
            rel="noreferrer"
          >
            Twitch
          </a>{" "}
          jogando os mais diversos jogos.
          <br />
          <br />
          Tenho uma página na{" "}
          <a href="https://trello.com/b/RBA4723P/jogos" rel="">
            Trello
          </a>{" "}
          onde organizo todos os jogos que trouxe ou pretendo trazer para as
          minhas lives, deixando inclusive um review sobre os jogos que foram
          zerados.
        </aside>
        <section>{render()}</section>
      </div>
      {/* fim do App */}
    </>
  );
  // return (
  //   <>
  //     <img src={imge} alt="" />
  //   </>
  // );
}

export default App;
