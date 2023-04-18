import {
    buttonPlay,
    buttonStop,
    buttonIncrease,
    buttonDecrease,
    cardForest,
    cardRain,
    cardCoffeeShop,
    cardFireplace,
    volumeForest,
    volumeRain,
    volumeCoffeeShop,
    volumeFireplace,
    buttonDarkMode,
    buttonLightMode
} from "./elements.js"

export function Events({
    timer,
    display,
    sound,
    theme
}) {
    buttonPlay.addEventListener("click", function() {
        timer.startCounting();
     });

    buttonStop.addEventListener("click", function() {
        timer.stopCounting();
    });

    buttonIncrease.addEventListener("click", function() {
        display.userIncreasedTime();
    });

    buttonDecrease.addEventListener("click", function() {
        display.userDecreasedTime();
    });

    cardForest.addEventListener("click", function({target, currentTarget}) {
        sound.turnOnAmbient(target, currentTarget);
        display.cardStatus(target, currentTarget);
    });

    cardRain.addEventListener("click", function({target, currentTarget}) {
        sound.turnOnAmbient(target, currentTarget);
        display.cardStatus(target, currentTarget);
    });

    cardCoffeeShop.addEventListener("click", function({target, currentTarget}) {
        sound.turnOnAmbient(target, currentTarget);
        display.cardStatus(target, currentTarget);
    });

    cardFireplace.addEventListener("click", function({target, currentTarget}) {
        sound.turnOnAmbient(target, currentTarget);
        display.cardStatus(target, currentTarget);
    });

    volumeForest.addEventListener("input", function({currentTarget}) {
        sound.chooseVolume(currentTarget);
    });

    volumeRain.addEventListener("input", function({currentTarget}) {
        sound.chooseVolume(currentTarget);
    });

    volumeCoffeeShop.addEventListener("input", function({currentTarget}) {
        sound.chooseVolume(currentTarget);
    });

    volumeFireplace.addEventListener("input", function({currentTarget}) {
        sound.chooseVolume(currentTarget);
    });

    buttonLightMode.addEventListener("click", function({currentTarget}) {
        theme.changeTheme(currentTarget);
    });

    buttonDarkMode.addEventListener("click", function({currentTarget}) {
        theme.changeTheme(currentTarget);
    });
}