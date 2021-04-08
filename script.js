var character = document.getElementById("character");
var block = document.getElementById("block");
var foo = document.getElementById("thisone").innerHTML;

function jump() {
  if (character.classList != "animate") {
    character.classList.add("animate");
  }
  setTimeout(function () {
    character.classList.remove("animate");
  }, 500);
}

var checkDead = setInterval(function () {
  var characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  var blockleft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  if (blockleft < 20 && blockleft > 0 && characterTop >= 130) {
    block.style.animation = "none";
    block.style.display = "none";
    alert(
      "Your Score is  " +
        foo +
        ", You Lose. Reload the Page and Restart the Game"
    );
  }
}, 10);

function add() {
  foo++;
  document.getElementById("thisone").innerHTML = foo;
}
