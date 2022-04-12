Object.prototype.getKey = function (value) {
  for (let key in this) {
    let c = 0;
    for (let i in this[key]) {
      if (this[key][i] == value[i]) {
        c++;
      }
    }
    if (c == 31) {
      return key;
    }
  }
  return "";
};

$(document).ready(function(){
  const possible = {
    "A":[false, false, false, true, false, true, false, false, false, true, false, false, false, true, true, true, true, false, false, false, true, false, false, true, false, false, false, true, false, false],
    "B":[true, false, true, false, false, true, false, false, false, true, false, false, true, false, true, false, true, false, false, true, false, false, false, true, false, false, true, false, true, false],
    "C":[false, true, false, true, false, false, false, false, false, true, false, false, false, false, false, false, true, false, false, false, false, false, false, false, true, false, false, false, false, true],
    "D":[true, false, true, false, false, true, false, false, false, true, false, false, false, true, false, false, true, false, false, false, true, false, false, true, false, false, true, false, true, false],
    "E":[true, true, true, false, false, false, false, false, false, true, false, false, false, false, true, false, true, false, false, false, false, false, false, true, false, false, false, false, true, true],
    "F":[true, true, true, false, false, false, false, false, false, true, false, false, false, false, true, false, true, false, false, false, false, false, false, true, false, false, false, false, false, false],
    "G":[false, true, false, true, false, false, false, false, false, true, false, false, false, false, false, true, true, false, false, false, true, false, false, false, true, false, true, false, false, false],
    "H":[false, false, true, false, false, false, true, false, false, true, false, false, false, true, true, true, true, false, false, false, true, false, false, true, false, false, false, true, false, false],
    "I":[true, true, false, false, true, false, false, false, false, false, false, true, false, false, false, false, false, false, true, false, false, false, false, false, false, true, false, false, true, true],
    "J":[true, true, false, false, true, false, false, false, false, false, false, true, false, false, false, false, false, false, true, false, false, false, false, false, true, true, false, false, false, false],
    "K":[false, false, true, false, false, false, true, false, false, true, false, false, true, false, true, false, true, false, false, true, false, false, false, true, false, false, false, true, false, false],
    "L":[false, false, true, false, false, false, false, false, false, true, false, false, false, false, false, false, true, false, false, false, false, false, false, true, false, false, false, false, true, true],
    "M":[false, false, true, false, false, false, true, false, false, true, true, false, true, true, false, false, true, false, false, false, true, false, false, true, false, false, false, true, false, false],
    "N":[false, false, true, false, false, false, true, false, false, true, true, false, false, true, false, false, true, false, false, true, true, false, false, true, false, false, false, true, false, false],
    "O":[false, false, false, true, false, true, false, false, false, true, false, false, false, true, false, false, true, false, false, false, true, false, false, false, true, false, true, false, false, false],
    "P":[true, false, true, false, false, true, false, false, false, true, false, false, true, false, true, false, true, false, false, false, false, false, false, true, false, false, false, false, false, false],
    "Q":[false, false, false, true, false, true, false, false, false, true, false, false, false, true, false, false, true, false, false, false, true, false, false, false, true, false, true, false, false, true],
    "R":[true, false, true, false, false, true, false, false, false, true, false, false, true, false, true, false, true, false, false, true, false, false, false, true, false, false, false, true, false, false],
    "S":[false, true, false, true, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, true, false, true, false],
    "T":[true, true, false, false, true, false, false, false, false, false, false, true, false, false, false, false, false, false, true, false, false, false, false, false, false, true, false, false, false, false],
    "U":[false, false, true, false, false, false, true, false, false, true, false, false, false, true, false, false, true, false, false, false, true, false, false, true, false, false, false, true, true, true],
    "V":[false, false, true, false, false, false, true, false, false, true, false, false, false, true, false, false, true, false, false, false, true, false, false, false, true, false, true, false, false, false],
    "W":[false, false, true, false, false, false, true, false, false, true, false, false, false, true, false, false, true, true, false, true, true, false, false, true, false, false, false, true, false, false],
    "X":[false, false, true, false, false, false, true, false, false, false, true, false, true, false, false, false, false, true, false, true, false, false, false, true, false, false, false, true, false, false],
    "Y":[false, false, true, false, false, false, true, false, false, false, true, false, true, false, false, false, false, false, true, false, false, false, false, false, false, true, false, false, false, false],
    "Z":[true, true, false, false, false, false, true, false, false, false, false, false, true, false, false, false, false, true, false, false, false, false, false, true, false, false, false, false, true, true],
    "a":[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, true, true, false, false, false, true, false, true, true, false, false],
    "b":[false, false, true, false, false, false, false, false, false, true, false, false, false, false, false, false, true, true, false, true, false, false, false, true, true, false, true, false, false, false],
    "c":[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, true, false, false, false, false, false, false, true, false, false, false, false, true],
    "d":[false, false, false, false, false, false, true, false, false, false, false, false, false, true, false, false, false, true, false, true, true, false, false, false, true, false, true, true, false, false],
    "e":[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, true, false, true, true, false, true, false, false, false, false, true],
    "f":[false, false, false, false, true, true, false, false, false, false, false, true, false, false, true, true, false, false, true, false, false, false, false, false, false, true, false, false, false, false],
    "g":[false, false, false, true, false, true, true, false, false, false, true, false, true, true, false, false, false, false, false, false, true, false, false, false, false, false, true, false, true, false],
    "h":[false, false, true, false, false, false, false, false, false, true, false, false, false, false, false, false, true, true, false, true, false, false, false, true, false, false, false, true, false, false],
    "i":[false, false, false, false, true, false, false, false, false, false, false, false, false, false, true, false, false, false, true, false, false, false, false, false, false, true, false, false, true, true],
    "j":[false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, true, true, false, false, false, false],
    "k":[false, false, true, false, false, false, false, false, false, true, false, false, false, false, false, true, true, true, false, false, false, false, false, true, true, false, false, false, false, true],
    "l":[false, false, false, false, true, false, false, false, false, false, false, true, false, false, false, false, false, false, true, false, false, false, false, false, false, true, false, false, false, false],
    "m":[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, false, true, true, false, false],
    "n":[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, false, true, false, false, false, true, false, false, false, true, false, false],
    "o":[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, true, false, false, false, false, true, false, true, false, false, false],
    "p":[false, false, true, true, false, true, false, false, false, true, true, false, true, false, false, false, true, false, false, false, false, false, false, true, false, false, false, false, false, false],
    "q":[false, false, false, true, false, true, true, false, false, false, true, false, true, true, false, false, false, false, false, false, true, false, false, false, false, false, false, true, false, false],
    "r":[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, false, true, false, false, false, true, false, false, false, false, false, false],
    "s":[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, true, false, false, false, true, true, false, false, false, true, false, true, false],
    "t":[false, false, false, false, true, false, false, true, true, false, false, true, false, false, false, false, false, false, true, false, false, false, false, false, false, true, false, false, false, false],
    "u":[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, true, false, false, true, false, false, false, true, true, true],
    "v":[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, true, false, false, false, true, false, true, false, false, false],
    "w":[false, false, false, false, false, false, false, false, false, true, false, false, false, true, false, false, true, true, false, true, true, false, false, false, false, false, false, false, false, false],
    "x":[false, false, false, false, false, false, false, false, false, false, true, false, true, false, false, false, false, true, false, true, false, false, false, false, false, false, false, false, false, false],
    "y":[false, false, false, false, false, false, false, false, false, false, true, false, false, true, false, true, false, false, false, false, true, false, false, false, false, false, true, false, true, false],
    "z":[false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, false, false, false, false, true, true, true, true, false, false, false, false, true, true],
    "1":[false, false, false, true, true, false, false, false, false, false, false, true, false, false, false, false, false, false, true, false, false, false, false, false, false, true, false, false, true, true],
    "2":[false, false, false, true, false, true, false, false, false, false, false, false, true, false, false, false, false, true, false, false, false, false, false, true, false, false, false, false, true, true],
    "3":[false, false, false, true, false, true, false, false, false, false, false, false, true, false, false, false, false, false, false, true, false, false, false, false, true, false, true, false, false, false],
    "4":[false, false, true, false, false, false, true, false, false, true, false, false, false, true, true, true, false, false, false, false, true, false, false, false, false, false, false, true, false, false],
    "5":[true, true, true, false, false, false, false, false, false, true, false, false, false, false, true, false, false, false, false, true, false, false, false, false, false, false, true, false, true, false],
    "6":[false, true, false, true, false, false, false, false, false, true, false, false, false, false, false, false, true, true, false, true, false, false, false, false, true, false, true, false, false, false],
    "7":[true, true, false, false, false, false, true, false, false, false, false, false, true, false, false, false, false, false, true, false, false, false, false, false, false, true, false, false, false, false],
    "8":[false, false, false, true, false, true, false, false, false, false, true, false, true, false, false, false, false, true, false, true, false, false, false, false, true, false, true, false, false, false],
    "9":[false, false, false, true, false, true, false, false, false, false, true, false, true, true, false, false, false, false, false, false, true, false, false, false, false, false, true, false, true, false],
    "0":[false, false, false, true, false, true, false, false, false, true, false, false, true, true, false, false, true, true, false, false, true, false, false, false, true, false, true, false, false, false],
    "!":[false, false, false, false, true, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false],
    "@":[false, false, false, true, false, true, false, false, true, true, false, true, false, true, false, true, true, false, false, false, false, false, false, false, true, false, true, false, false, false],
    "$":[false, false, false, true, true, true, false, false, false, false, true, true, false, false, false, false, false, false, true, true, false, false, false, false, true, true, true, false, false, false],
    "%":[true, false, true, false, true, false, false, true, false, false, false, false, true, false, false, false, false, true, false, false, false, false, true, false, false, true, false, true, false, true],
    "^":[false, false, false, true, false, true, false, false, false, true, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    "&":[false, false, false, true, false, true, false, false, false, false, true, false, true, false, false, false, false, true, false, true, false, false, false, true, false, false, true, true, true, false],
    "*":[false, false, false, false, false, false, false, false, false, false, true, true, true, false, true, true, false, true, true, true, false, false, false, false, false, false, false, false, false, false],
    "(":[false, false, false, true, false, false, false, false, false, true, false, false, false, false, false, false, true, false, false, false, false, false, false, false, true, false, false, false, false, false],
    ")":[false, false, false, false, false, true, false, false, false, false, false, false, false, true, false, false, false, false, false, false, true, false, false, false, false, false, true, false, false, false],
    "[":[true, false, true, false, false, false, false, false, false, true, false, false, false, false, false, false, true, false, false, false, false, false, false, true, false, false, false, false, true, false],
    "]":[false, true, false, false, false, false, true, false, false, false, false, false, false, true, false, false, false, false, false, false, true, false, false, false, false, false, false, true, false, true],
    "{":[false, true, false, false, true, false, false, false, false, false, false, true, false, false, true, false, false, false, true, false, false, false, false, false, false, true, false, false, false, true],
    "}":[true, false, false, false, true, false, false, false, false, false, false, true, false, false, false, true, false, false, true, false, false, false, false, false, false, true, false, false, true, false],
    "/":[false, false, false, false, false, false, true, false, false, false, false, false, true, false, false, false, false, true, false, false, false, false, false, true, false, false, false, false, false, false],
    "\\":[false, false, true, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, true, false, false],
    "?":[false, false, false, true, false, true, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false]
  }
  var guess = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
  var correct = possible[Object.keys(possible)[Math.floor(Math.random() * Object.keys(possible).length)]];
  var guesses = 0;
  var invalid = true;
  var won = false;
  $("#guess > .segment.blank").click(function(){
    if (guesses < 4 && !won) {
      $(this).toggleClass("guessing");
      $(this).removeClass("invalid");
      let i = Number(this.id.slice(1)) - 1;
      guess[i] = !guess[i];
      $(".label").val(possible.getKey(guess));
      if (possible.getKey(guess) === "") {
        $(".guessing").addClass("invalid");
        invalid = true;
      } else {
        $(".invalid").removeClass("invalid");
        invalid = false;
      }
    }
  });
  
  $(".submit").click(function(){
    if (!invalid && guesses < 4 && !won) {
      guesses++;
      let c = 0;
      for (let i in guess) {
        i = Number(i);
        if (guess[i] === true) {
          let rid = "#g" + String(guesses) + "s" + String(i+1);
          let gid = "#s" + String(i+1);
          console.log(i);
          console.log(rid);
          console.log(gid);
          if (correct[i]) {
            $(rid).toggleClass("blank correct");
            console.log("correct");
          } else if (!correct[i]) {
            $(rid).toggleClass("blank incorrect");
            console.log("incorrect");
          }
          $(gid).toggleClass("guessing");
        }
        if (guess[i] === correct[i]) {
          c++;
        }
      }
      $(".label").val("");
      if (c == 31)  {
        $("#guess > .segment").toggleClass("correct");
        won = true;
        if (guesses === 1) {
          $(".label").val("Lucky");
        } else if (guesses === 2) {
          $(".label").val("Excellent");
        } else if (guesses === 3) {
          $(".label").val("Great");
        } else if (guesses === 4) {
          $(".label").val("Finally");
        } else {
          $(".label").val("Hacker :(");
        }
      } else if (guesses >= 4) {
        for (let i in correct) {
          i = Number(i);
          let gid = "#s" + String(i+1);
          $(gid).removeClass("guessing");
          if (correct[i] == true) {
            $(gid).addClass("incorrect");
          } else {
            $(gid).removeClass("incorrect");
          }
        }
        $(".label").val(possible.getKey(correct));
      }
      guess = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
      invalid = true;
    }
  });

  $(".random").click(function(){
    if (!won) {
      let entry = possible[Object.keys(possible)[Math.floor(Math.random() * Object.keys(possible).length)]];
      for (let i in entry) {
        guess[i] = entry[i]
      }
      invalid = false;
      for (let i in guess) {
        i = Number(i);
        let gid = "#s" + String(i+1);
        $(gid).removeClass("invalid");
        if (guess[i] == true) {
          $(gid).addClass("guessing");
        } else {
          $(gid).removeClass("guessing");
        }
      }
      $(".label").val(possible.getKey(guess));
    }
  });
  
  $(".label").bind("keypress", function(e){
    if (e.which === 13 && guesses < 4 && !won) {
      console.log(possible[$(".label").val()])
      console.log($(".label").val())
      let entry = (possible[$(".label").val()] != undefined) ? possible[$(".label").val()] : [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
      for (let i in entry) {
        guess[i] = entry[i]
      }
      invalid = false;
      for (let i in guess) {
        i = Number(i);
        let gid = "#s" + String(i+1);
        $(gid).removeClass("invalid");
        if (guess[i] == true) {
          $(gid).addClass("guessing");
        } else {
          $(gid).removeClass("guessing");
        }
      }
    }
  });
  $(".helpButton").click(function(){
    $(".help").toggle();
  });
});
// debug print correct as ASCII: console.log(" " + ((correct[0]) ? "-" : " ") + " " + ((correct[1]) ? "-" : " ") + "\n" + ((correct[2]) ? "|" : " ") + ((correct[3]) ? "/" : " ") + ((correct[4]) ? "|" : " ") + ((correct[5]) ? "\\" : " ") + ((correct[6]) ? "|" : " ") + "\n " + ((correct[7]) ? "-" : " ") + " " + ((correct[8]) ? "-" : " ") + "\n" + ((correct[9]) ? "|" : " ") + ((correct[10]) ? "\\" : " ") + ((correct[11]) ? "|" : " ") + ((correct[12]) ? "/" : " ") + ((correct[13]) ? "|" : " ") + "\n " + ((correct[14]) ? "-" : " ") + " " + ((correct[15]) ? "-" : " ") + "\n" + ((correct[16]) ? "|" : " ") + ((correct[17]) ? "/" : " ") + ((correct[18]) ? "|" : " ") + ((correct[19]) ? "\\" : " ") + ((correct[20]) ? "|" : " ") + "\n " + ((correct[21]) ? "-" : " ") + " " + ((correct[22]) ? "-" : " ") + "\n" + ((correct[23]) ? "|" : " ") + ((correct[24]) ? "\\" : " ") + ((correct[25]) ? "|" : " ") + ((correct[26]) ? "/" : " ") + ((correct[27]) ? "|" : " ") + "\n " + ((correct[28]) ? "-" : " ") + " " + ((correct[29]) ? "-" : " "));