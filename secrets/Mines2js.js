const numMines = 25;
const numIMines = 25;
var mines =  [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];
var iMines = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];
var absMines = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];
var dig = true;
var real = true;
var pos = true;
var prLeft = 0;
var nrLeft = 0;
var piLeft = 0;
var niLeft = 0;
function generate() {
  for(let i = 0; i < numMines; i++) {
    let x = Math.floor(Math.random() * 16);
    let y = Math.floor(Math.random() * 16);
    if (Math.abs(mines[y][x]) === 9) {
      i--;
      continue;
    }
    if (Math.random() > 0.5) {
      mines[y][x] = 9;
      prLeft++;
    } else {
      mines[y][x] = -9;
      nrLeft++;
    }
  }
  var adj;
  for(let x = 0; x < 16; x++) {
    for(let y = 0; y < 16; y++) {
      adj = 0;
      if (mines[y][x] !== 9 && mines[y][x] !== -9) {
        if (x-1 >= 0) {
          adj += (mines[y][x-1] === 9) ? 1 : 0;
          adj -= (mines[y][x-1] === -9) ? 1 : 0;
        }
        if (x+1 < 16) {
          adj += (mines[y][x+1] === 9) ? 1 : 0;
          adj -= (mines[y][x+1] === -9) ? 1 : 0;
        }
        if (y+1 < 16) {
          adj += (mines[y+1][x] === 9) ? 1 : 0;
          adj -= (mines[y+1][x] === -9) ? 1 : 0;
        }
        if (y-1 >= 0) {
          adj += (mines[y-1][x] === 9) ? 1 : 0;
          adj -= (mines[y-1][x] === -9) ? 1 : 0;
        }
        if (y+1 < 16 && x+1 < 16) {
          adj += (mines[y+1][x+1] === 9) ? 1 : 0;
          adj -= (mines[y+1][x+1] === -9) ? 1 : 0;
        }
        if (y+1 < 16 && x-1 >= 0) {
          adj += (mines[y+1][x-1] === 9) ? 1 : 0;
          adj -= (mines[y+1][x-1] === -9) ? 1 : 0;
        }
        if (y-1 >= 0 && x+1 < 16) {
          adj += (mines[y-1][x+1] === 9) ? 1 : 0;
          adj -= (mines[y-1][x+1] === -9) ? 1 : 0;
        }
        if (y-1 >= 0 && x-1 >= 0) {
          adj += (mines[y-1][x-1] === 9) ? 1 : 0;
          adj -= (mines[y-1][x-1] === -9) ? 1 : 0;
        }
        mines[y][x] = adj;
      }
    }
  }
  for(let i = 0; i < numIMines; i++) {
    let x = Math.floor(Math.random() * 16);
    let y = Math.floor(Math.random() * 16);
    if (Math.abs(iMines[y][x]) === 9) {
      i--;
      continue;
    }
    if (Math.random() > 0.5) {
      iMines[y][x] = 9;
      piLeft++;
    } else {
      iMines[y][x] = -9;
      niLeft++;
    }
  }
  var adj;
  for(let x = 0; x < 16; x++) {
    for(let y = 0; y < 16; y++) {
      adj = 0;
      if (iMines[y][x] !== 9 && iMines[y][x] !== -9) {
        if (x-1 >= 0) {
          adj += (iMines[y][x-1] === 9) ? 1 : 0;
          adj -= (iMines[y][x-1] === -9) ? 1 : 0;
        }
        if (x+1 < 16) {
          adj += (iMines[y][x+1] === 9) ? 1 : 0;
          adj -= (iMines[y][x+1] === -9) ? 1 : 0;
        }
        if (y+1 < 16) {
          adj += (iMines[y+1][x] === 9) ? 1 : 0;
          adj -= (iMines[y+1][x] === -9) ? 1 : 0;
        }
        if (y-1 >= 0) {
          adj += (iMines[y-1][x] === 9) ? 1 : 0;
          adj -= (iMines[y-1][x] === -9) ? 1 : 0;
        }
        if (y+1 < 16 && x+1 < 16) {
          adj += (iMines[y+1][x+1] === 9) ? 1 : 0;
          adj -= (iMines[y+1][x+1] === -9) ? 1 : 0;
        }
        if (y+1 < 16 && x-1 >= 0) {
          adj += (iMines[y+1][x-1] === 9) ? 1 : 0;
          adj -= (iMines[y+1][x-1] === -9) ? 1 : 0;
        }
        if (y-1 >= 0 && x+1 < 16) {
          adj += (iMines[y-1][x+1] === 9) ? 1 : 0;
          adj -= (iMines[y-1][x+1] === -9) ? 1 : 0;
        }
        if (y-1 >= 0 && x-1 >= 0) {
          adj += (iMines[y-1][x-1] === 9) ? 1 : 0;
          adj -= (iMines[y-1][x-1] === -9) ? 1 : 0;
        }
        iMines[y][x] = adj;
      }
    }
  }
  var adj;
  for(let x = 0; x < 16; x++) {
    for(let y = 0; y < 16; y++) {
      adj = 0;
      if (iMines[y][x] !== 9 && iMines[y][x] !== -9) {
        if (x-1 >= 0) {
          adj += (iMines[y][x-1] === 9) ? 1 : 0;
          adj += (iMines[y][x-1] === -9) ? 1 : 0;
          adj += (mines[y][x-1] === 9) ? 1 : 0;
          adj += (mines[y][x-1] === -9) ? 1 : 0;
        }
        if (x+1 < 16) {
          adj += (iMines[y][x+1] === 9) ? 1 : 0;
          adj += (iMines[y][x+1] === -9) ? 1 : 0;
          adj += (mines[y][x+1] === 9) ? 1 : 0;
          adj += (mines[y][x+1] === -9) ? 1 : 0;
        }
        if (y+1 < 16) {
          adj += (iMines[y+1][x] === 9) ? 1 : 0;
          adj += (iMines[y+1][x] === -9) ? 1 : 0;
          adj += (mines[y+1][x] === 9) ? 1 : 0;
          adj += (mines[y+1][x] === -9) ? 1 : 0;
        }
        if (y-1 >= 0) {
          adj += (iMines[y-1][x] === 9) ? 1 : 0;
          adj += (iMines[y-1][x] === -9) ? 1 : 0;
          adj += (mines[y-1][x] === 9) ? 1 : 0;
          adj += (mines[y-1][x] === -9) ? 1 : 0;
        }
        if (y+1 < 16 && x+1 < 16) {
          adj += (iMines[y+1][x+1] === 9) ? 1 : 0;
          adj += (iMines[y+1][x+1] === -9) ? 1 : 0;
          adj += (mines[y+1][x+1] === 9) ? 1 : 0;
          adj += (mines[y+1][x+1] === -9) ? 1 : 0;
        }
        if (y+1 < 16 && x-1 >= 0) {
          adj += (iMines[y+1][x-1] === 9) ? 1 : 0;
          adj += (iMines[y+1][x-1] === -9) ? 1 : 0;
          adj += (mines[y+1][x-1] === 9) ? 1 : 0;
          adj += (mines[y+1][x-1] === -9) ? 1 : 0;
        }
        if (y-1 >= 0 && x+1 < 16) {
          adj += (iMines[y-1][x+1] === 9) ? 1 : 0;
          adj += (iMines[y-1][x+1] === -9) ? 1 : 0;
          adj += (mines[y-1][x+1] === 9) ? 1 : 0;
          adj += (mines[y-1][x+1] === -9) ? 1 : 0;
        }
        if (y-1 >= 0 && x-1 >= 0) {
          adj += (iMines[y-1][x-1] === 9) ? 1 : 0;
          adj += (iMines[y-1][x-1] === -9) ? 1 : 0;
          adj += (mines[y-1][x-1] === 9) ? 1 : 0;
          adj += (mines[y-1][x-1] === -9) ? 1 : 0;
        }
        absMines[y][x] = adj;
      } else {
        absMines[y][x] = Math.abs(mines[y][x]) + Math.abs(iMines[y][x])
      }
    }
  }
}
function reveal(square) {
  console.log(square % 100 - 10);
  console.log(Math.floor(square/100)-10);
  console.log("\n");
  if (dig) {
    // Digging
    if (!document.getElementById(square).classList.contains("flag")) {
      document.getElementById(square).classList.add("r");
      if(Math.abs(mines[Math.floor(square/100)-10][square % 100 - 10]) === 9 || Math.abs(iMines[Math.floor(square/100)-10][square % 100 - 10]) === 9) {
        document.getElementById("top").innerHTML = "YOU LOSE!";
        document.getElementById(square).innerHTML = "";
        document.getElementById("fav").href = "2minefav.png"
        for(let x = 0; x < 16; x++) {
          for(let y = 0; y < 16; y++) {
            let s = 100*(y+10)+x+10
            document.getElementById(s).classList.add("r");
            if(Math.abs(mines[y][x]) === 9 || Math.abs(iMines[y][x]) === 9) {
              document.getElementById(s).classList.add("m" + ((mines[y][x] !== 0) ? ((mines[y][x] > 0) ? "pr" : "nr") : "") + ((iMines[y][x] !== 0) ? ((iMines[y][x] > 0) ? "pi" : "ni") : ""));
              document.getElementById(s).innerHTML = "";
            } else {
              document.getElementById(s).classList.add("r" + Math.max(Math.abs(mines[y][x].toString()), Math.abs(iMines[y][x].toString())));
              document.getElementById(s).innerHTML = "" + mines[y][x] + ((iMines[y][x] < 0) ? iMines[y][x] : "+"+iMines[y][x]) + "i";
            }
          }
        }
      } else {
        document.getElementById(square).classList.add("r" + Math.max(Math.abs(mines[Math.floor(square/100)-10][square % 100 - 10].toString()), Math.abs(iMines[Math.floor(square/100)-10][square % 100 - 10].toString())));
        document.getElementById(square).innerHTML = "" + mines[Math.floor(square/100)-10][square % 100 - 10] + ((iMines[Math.floor(square/100)-10][square % 100 - 10] < 0) ? iMines[Math.floor(square/100)-10][square % 100 - 10] : "+"+iMines[Math.floor(square/100)-10][square % 100 - 10]) + "i";
      }
    }
  } else {
    // Flagging
    if (!document.getElementById(square).classList.contains("r")) {
      if (real) {
        // Real
        if (pos) {
          // Positive
          document.getElementById(square).classList.remove("nrflag");
          if (document.getElementById(square).classList.contains("prflag")) {
            document.getElementById(square).classList.remove("prflag");
            document.getElementById(square).innerHTML = "_";
            if (mines[Math.floor(square/100)-10][square % 100 - 10] === 9) {
              prLeft++;
            }
          } else {
            document.getElementById(square).classList.add("prflag");
            document.getElementById(square).innerHTML = "";
            if (mines[Math.floor(square/100)-10][square % 100 - 10] === 9) {
              prLeft--;
            }
          }
        } else {
          // Negative
          document.getElementById(square).classList.remove("prflag");
          if (document.getElementById(square).classList.contains("nrflag")) {
            document.getElementById(square).classList.remove("nrflag");
            document.getElementById(square).innerHTML = "_";
            if (mines[Math.floor(square/100)-10][square % 100 - 10] === -9) {
              nrLeft++;
            }
          } else {
            document.getElementById(square).classList.add("nrflag");
            document.getElementById(square).innerHTML = "";
            if (mines[Math.floor(square/100)-10][square % 100 - 10] === -9) {
              nrLeft--;
            }
          }
        }
      } else {
        // Imaginary
        if (pos) {
          // Positive
          document.getElementById(square).classList.remove("niflag");
          if (document.getElementById(square).classList.contains("piflag")) {
            document.getElementById(square).classList.remove("piflag");
            document.getElementById(square).innerHTML = "_";
            if (iMines[Math.floor(square/100)-10][square % 100 - 10] === 9) {
              piLeft++;
            }
          } else {
            document.getElementById(square).classList.add("piflag");
            document.getElementById(square).innerHTML = "";
            if (clientInformationines[Math.floor(square/100)-10][square % 100 - 10] === 9) {
              piLeft--;
            }
          }
        } else {
          // Negative
          document.getElementById(square).classList.remove("piflag");
          if (document.getElementById(square).classList.contains("niflag")) {
            document.getElementById(square).classList.remove("niflag");
            document.getElementById(square).innerHTML = "_";
            if (iMines[Math.floor(square/100)-10][square % 100 - 10] === -9) {
              niLeft++;
            }
          } else {
            document.getElementById(square).classList.add("niflag");
            document.getElementById(square).innerHTML = "";
            if (iMines[Math.floor(square/100)-10][square % 100 - 10] === -9) {
              niLeft--;
            }
          }
        }
      }
    }
    if (prLeft + nrLeft + piLeft + niLeft === 0) {
      document.getElementById("top").innerHTML = "YOU WIN!";
    }
  }
}
document.onkeydown = function (e) {
  e = e || window.event;
  switch (e.key) {
    case "d":
    case "f":
      document.getElementById("digflag").click();
      break;
    case "r":
    case "i":
      document.getElementById("realimag").click();
      break;
    case "p":
    case "n":
    case "+":
    case "-":
      document.getElementById("posneg").click();
      break;
  }
}// JavaScript Document
