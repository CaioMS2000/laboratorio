const request = require("request");
const cheerio = require("cheerio");

function includes(a, b) {
  // a string
  // b vetor
  const arr = [];
  b.forEach((el) => {
    if (a.includes(el)) {
      arr.push(true);
    }
  });

  return arr.length;
}
function includes2(a, b) {
  // a string
  // b vetor
  let bul = false;
  b.forEach((el) => {
    if (a.includes(el)) {
      bul = true;
    }
  });

  return bul;
}

request(
  "https://www.ime.usp.br/~pf/dicios/br-utf8.txt",
  (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);

      const v = $("body")["0"].children["0"].data.split("\n");

      v.forEach((e) => {
        if (e.length == 5) {
          if (includes(e, ["o", "s", "a", "p"]) == 3) {
            if (e[1] != "o") {
              if (e[3] != "s") {
                if (e[4] != "a") {
                  if (
                    !includes2(e, ["c", "i", "t", "r", "l", "d", "f", "v", "s"])
                  ) {
                    if (e[0] != "a") {
                      if (e[1] != "s") {
                        if (e[4] != "o") {
                          if (e[1] == "a") {
                            if (e[3] == "o") {
                              if (e[4] == "s") {
                                console.log(e);
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      });
    }
  }
);
