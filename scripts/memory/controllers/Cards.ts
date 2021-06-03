class Cards{
    /**
     * Function returning the numbers of pairs needed for the selected difficulty
     * @param difficulty Value of the desire difficulty get from the user
     * @returns A number to make the number of pairs.
     */
    static initDifficulty(difficulty:string){
    
        switch(difficulty){
            case 'easy' : return 3;
            case 'medium': return 4;
            case 'hard' : return 5;
            default : return 0;
        }
       
    }
    /**
     * Function create randomly generated cars by pairs
     * @param pairsCount numbers of pairs it will be created
     */
    static createPairs(pairsCount:number){
        // EASY(3pairs) - MEDIUM(4 pairs)- HARD(5pairs)
        const cardsArray:Object[] = [];
        
        for(let pairsNumber = 0; pairsNumber < pairsCount; pairsNumber ++){
            let cardNumber:number = Math.floor(Math.random()*13);
            cardNumber == 0 ? cardNumber = Math.floor(Math.random()*13) : cardNumber;
            let choosenCard:number | string; 
            switch(cardNumber){
                case 1 : choosenCard = "A";
                            break;
                case 11 : choosenCard = 'K';
                            break;
                case 12 : choosenCard = 'Q';
                            break;
                case 13 : choosenCard = 'V';
                            break;
                default : choosenCard = cardNumber;
            }

            const cardSymbol:number = Math.floor(Math.random()*4);
            let choosenSymbol:string;
            switch(cardSymbol){
                case 1 : choosenSymbol = 'spade';
                            break;
                case 2 : choosenSymbol = 'heart';
                            break;
                case 4 : choosenSymbol = 'diamond';
                            break;
                default : choosenSymbol = 'club';
            }
            const cardToPush:Object = {
                number : choosenCard,
                symbol : choosenSymbol
            }
            cardsArray.push(cardToPush, cardToPush)
        }
        return cardsArray;
    }
    static createDeck(generatedCards:Object[]){
        const tempIndex:number[]=[];
        for(let card = 0; card < 6; card ++){
            let nouvelIndex:number=0;
            let checkExistence=true;
            while(checkExistence){
                nouvelIndex = Math.floor(Math.random()* generatedCards.length)
                
                const verification = tempIndex.find(e => {return e == nouvelIndex});
                if(verification === undefined){
                    checkExistence=false;
                }
            }
            tempIndex.push(nouvelIndex); 
        }
        const newArray:Object[]=[];
        for(let index = 0; index <generatedCards.length; index ++ ){
            newArray.push(generatedCards[tempIndex[index]]);
        }
        return newArray;
    }
}

export {Cards};