import { Cards } from "./Cards";

class GameController{
    /**
     * Function starting the game
     * @param difficulty numbers of pairs the app will be generate
     */
    static async gameStart(difficulty:number){
        const generatedCards = Cards.createPairs(difficulty);
        const generateDeck = Cards.createDeck(generatedCards);

        console.table(generateDeck);
    }
}

export {GameController};