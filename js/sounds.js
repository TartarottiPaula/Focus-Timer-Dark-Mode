export function Sounds() {
    const forest = new Audio('./sounds/forest.wav');
    const rain = new Audio('./sounds/rain.wav');
    const coffeeShop = new Audio('./sounds/coffee-shop.wav');
    const fireplace = new Audio('./sounds/fireplace.wav');
    const alert = new Audio('./sounds/alert.mp3');

    function chosenSound(card) {
      switch(card) {
        case "forest":
          return forest;
        case "rain":
          return rain;
        case "coffee-shop":
          return coffeeShop;
        case "fireplace":
          return fireplace;
      }
    }

    function turnOnAmbient(eventTarget, card) {
      let volumeWasTheTarget = eventTarget.classList.contains("volume-controls");

      if(!volumeWasTheTarget) {
        let sound = chosenSound(card.id);
        sound.loop = true;
        if(sound.paused){
            sound.play();
            sound.volume = 0.5;
        } else {
            sound.pause();
        }
      }
    }

    function turnOnAlert() {
        alert.play();
    }

    function chooseVolume(volumeCard) {
      let theSoundOfThisCard = chosenSound(volumeCard.parentNode.id);
      let isTheSoundPlaying = !theSoundOfThisCard.paused;

      if(isTheSoundPlaying) {
        theSoundOfThisCard.volume = `${(volumeCard.value)/100}`;
      }
    }

    return {
        turnOnAmbient,
        turnOnAlert,
        chooseVolume,
    }
  }