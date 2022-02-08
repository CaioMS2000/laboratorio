import profilePicture from "./profile.jpg";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";
import img4 from "./4.png";
import img5 from "./5.png";
import img6 from "./6.png";
import img7 from "./7.png";
import img8 from "./8.png";
import img9 from "./9.png";
import img10 from "./10.png";
import img11 from "./11.png";
import img12 from "./12.png";
import img13 from "./13.png";
import img14 from "./14.png";
import img15 from "./15.png";
import img16 from "./16.png";
import img17 from "./17.png";
import img18 from "./18.png";
import img19 from "./19.png";
import img20 from "./20.png";

function importAll(r: __WebpackModuleApi.RequireContext) {
  // console.log(r.keys());
  return r.keys().map((fileName: string) => {
    // console.log({
    //   slug: fileName.substr(2).replace(/\/index\.mdx$/, ""),
    //   module: r(fileName),
    // });
    return {
      slug: fileName.substr(2).replace(/\/index\.mdx$/, ""),
      module: r(fileName),
    };
  });
}

const images = {
  ...importAll(require.context(".", false, /\.jpeg/)),
  ...importAll(require.context(".", false, /\.jpg/)),
  ...importAll(require.context(".", false, /\.png/)),
};
console.log(images);
console.log("######");
export { images };

const imgs = {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  profilePicture,
};
// console.log(imgs);

export { imgs };

// import profilePicture from "../../images/image0.jpg";

// import img1 from "../../images/Bryder_.png";
// import img2 from "../../images/Caioms_.png";
// import img3 from "../../images/Ilustracao_Sem_Titulo (1).png";
// import img4 from "../../images/Ilustracao_Sem_Titulo (2).png";
// import img5 from "../../images/Ilustracao_Sem_Titulo (3).png";
// import img6 from "../../images/Ilustracao_Sem_Titulo.png";
// import img7 from "../../images/image0 (1).png";
// import img8 from "../../images/image0 (2).png";
// import img9 from "../../images/image0 (3).png";
// import img10 from "../../images/image0 (4).png";
// import img11 from "../../images/image0 (5).png";
// import img12 from "../../images/image0 (6).png";
// import img13 from "../../images/image0 (7).png";
// import img14 from "../../images/image0 (8).png";
// import img15 from "../../images/image0.png";
// import img16 from "../../images/image1 (1).png";
// import img17 from "../../images/image1.png";
// import img18 from "../../images/image2.png";
// import img19 from "../../images/Jmr55555.png";
// import img20 from "../../images/LokoNoControle.png";
