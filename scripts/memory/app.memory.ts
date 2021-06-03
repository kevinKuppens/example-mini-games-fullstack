import { Cards } from './controllers/Cards';
import {GameController} from './controllers/game.controller'

const init = () => {
    console.log("memory game initiated");
    

    GameController.gameStart(Cards.initDifficulty('easy'));
}

window.addEventListener('load', init); 