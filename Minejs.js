const numMines = 40;
var mines = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
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
var flags = 0;
function generate() {
  for(let i = 0; i < numMines; i++) {
    let x = Math.floor(Math.random() * 16);
    let y = Math.floor(Math.random() * 16);
    mines[y][x] = 9;
  }
  var adj;
  for(let x = 0; x < 16; x++) {
    for(let y = 0; y < 16; y++) {
      adj = 0;
      if (mines[y][x] < 9) {
        if (x-1 >= 0) {
          adj += (mines[y][x-1] === 9) ? 1 : 0;
        }
        if (x+1 < 16) {
          adj += (mines[y][x+1] === 9) ? 1 : 0;
        }
        if (y+1 < 16) {
          adj += (mines[y+1][x] === 9) ? 1 : 0;
        }
        if (y-1 >= 0) {
          adj += (mines[y-1][x] === 9) ? 1 : 0;
        }
        if (y+1 < 16 && x+1 < 16) {
          adj += (mines[y+1][x+1] === 9) ? 1 : 0;
        }
        if (y+1 < 16 && x-1 >= 0) {
          adj += (mines[y+1][x-1] === 9) ? 1 : 0;
        }
        if (y-1 >= 0 && x+1 < 16) {
          adj += (mines[y-1][x+1] === 9) ? 1 : 0;
        }
        if (y-1 >= 0 && x-1 >= 0) {
          adj += (mines[y-1][x-1] === 9) ? 1 : 0;
        }
        mines[y][x] = adj;
      }
    }
  }
}
function reveal(square) {
  console.log(square % 100 - 10);
  console.log(Math.floor(square/100)-10);
  console.log("\n");
  if (dig) {
    if (!document.getElementById(square).classList.contains("flag")) {
      document.getElementById(square).classList.add("r" + mines[Math.floor(square/100)-10][square % 100 - 10].toString());
      document.getElementById(square).classList.add("r");
      if(mines[Math.floor(square/100)-10][square % 100 - 10] === 9) {
        document.getElementById("top").innerHTML = "YOU LOSE!";
        document.getElementById(square).innerHTML = "&#9728;";
        document.getElementById("fav").href = "./favs/minefav.png"
        for(let x = 0; x < 16; x++) {
          for(let y = 0; y < 16; y++) {
            let s = 100*(y+10)+x+10
            document.getElementById(s).classList.add("r" + mines[y][x].toString());
            document.getElementById(s).classList.add("r");
            if(mines[y][x] === 9) {
              document.getElementById(s).innerHTML = "&#9728;";
            } else {
              document.getElementById(s).innerHTML = mines[y][x];
            }
          }
        }
      } else {
        document.getElementById(square).innerHTML = mines[Math.floor(square/100)-10][square % 100 - 10];
      }
    }
  } else {
    if (!document.getElementById(square).classList.contains("r")) {
      if (document.getElementById(square).classList.contains("flag")) {
        document.getElementById(square).classList.remove("flag");
        document.getElementById(square).innerHTML = "_"
        if (mines[Math.floor(square/100)-10][square % 100 - 10] === 9) {
          flags--;
        }
      } else {
        document.getElementById(square).classList.add("flag");
        document.getElementById(square).innerHTML = "&#9873;"
        if (mines[Math.floor(square/100)-10][square % 100 - 10] === 9) {
          flags++;
        }
      }
    }
    if (flags === numMines) {
      document.getElementById("top").innerHTML = "YOU WIN!";
    }
  }
}
document.onkeydown = function (e) {
  e = e || window.event;
  switch (e.which || e.keyCode) {
    case 70 : document.getElementById("mode").click();
      break;
    case 68 : document.getElementById("mode").click();
      break;
  }
}// JavaScript Document