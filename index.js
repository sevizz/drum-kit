const ic1 = document.querySelector(".w")
const ic2= document.querySelector(".a")
const ic3 = document.querySelector(".s")
const ic4 = document.querySelector(".d")
const ic5 = document.querySelector(".j")
const ic6 = document.querySelector(".k")
const ic7 = document.querySelector(".l")

ic1.addEventListener('click', () => {
        var audio = new Audio('./sounds/tom-1.mp3')
        audio.play();
    }
)

ic2.addEventListener('click', () => {
        var audio = new Audio('./sounds/tom-2.mp3')
        audio.play();
    }
)

ic3.addEventListener('click', () => {
        var audio = new Audio('./sounds/tom-3.mp3')
        audio.play();
    }
)

ic4.addEventListener('click', () => {
        var audio = new Audio('./sounds/tom-4.mp3')
        audio.play();
    }
)

ic5.addEventListener('click', () => {
        var audio = new Audio('./sounds/snare.mp3')
        audio.play();
    }
)

ic6.addEventListener('click', () => {
        var audio = new Audio('./sounds/crash.mp3')
        audio.play();
    }
)

ic7.addEventListener('click', () => {
        var audio = new Audio('./sounds/kick-bass.mp3')
        audio.play();
    }
)

document.addEventListener('keydown', () => {
    if (event.key == 'w') {
        var audio = new Audio('./sounds/tom-1.mp3');
        audio.play();
    }  
  }
)

document.addEventListener('keydown', () => {
    if (event.key == 'a') {
        var audio = new Audio('./sounds/tom-2.mp3');
        audio.play();
    }  
  }
)

document.addEventListener('keydown', () => {
    if (event.key == 's') {
        var audio = new Audio('./sounds/tom-3.mp3');
        audio.play();
    }  
  }
)

document.addEventListener('keydown', () => {
    if (event.key == 'd') {
        var audio = new Audio('./sounds/tom-4.mp3');
        audio.play();
    }  
  }
)

document.addEventListener('keydown', () => {
    if (event.key == 'j') {
        var audio = new Audio('./sounds/snare.mp3');
        audio.play();
    }  
  }
)

document.addEventListener('keydown', () => {
    if (event.key == 'k') {
        var audio = new Audio('./sounds/crash.mp3');
        audio.play();
    }  
  }
)

document.addEventListener('keydown', () => {
    if (event.key == 'l') {
        var audio = new Audio('./sounds/kick-bass.mp3');
        audio.play();
    }  
  }
)
