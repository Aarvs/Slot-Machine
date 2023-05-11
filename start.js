const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    A : 2,
    B : 5,
    C : 6,
    D : 8
}

const SYMBOLS_VALUES = {
    A : 9,
    B : 4,
    C : 3,
    D : 2
}



const deposit = () =>{
    while(true){

        const depositAmount = prompt("Type Deposit Amount: ");
        const numberDepositAmount = parseFloat(depositAmount);
    
        if(isNaN(numberDepositAmount) || numberDepositAmount <= 0){
            console.log("Invalid transaction! Please try again.")
        }else{
            return numberDepositAmount;
        }
    }
};

const getNumberOfLines = () =>{

    while(true){

        const lines = prompt("Enter Number of lines (From 1-3): ");
        const numberOfLines = parseFloat(lines);
    
        if(isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3){
            console.log("Invalid Number of lines! Please try again.")
        }else{
            return numberOfLines;
        }
    }
};

const getBet = (balance , lines) =>{

    while(true){
        const bet = prompt("Enter the bet per line: ");
        const numberBet = parseFloat(bet);
    
        if(isNaN(numberBet) || numberBet <= 0 || numberBet > balance/lines){ // here we divide balance with lines to check that the distribution of bet among lines is valid or not.
            
            console.log("Invalid bet! Please try again.")
        }else{
            return numberBet;
        }
    }

};

const spin = () =>{
    const symbols = [];
    for(const[symbol,count] of Object.entries(SYMBOLS_COUNT)){
        // console.log(symbol,count);
        for(let i = 0; i < count; i++){
            symbols.push(symbol);
        }
    }
    const reels = [[] , [] , []];
    for(let i=0; i<COLS;i++){
        let copySymbol =[...symbols];
        for(let j=0; j<ROWS; j++){
            const randomIndex = Math.floor(Math.random() * copySymbol.length);
            const selectedSymbol = copySymbol[randomIndex];
            reels[i].push(selectedSymbol);
            copySymbol.splice(randomIndex,1);
        }
    }
    return reels;
};

const reels = spin();
console.log(reels);





// let balance = deposit();
// const numberOfLines = getNumberOfLines();
// const getNumberBet = getBet(balance , numberOfLines);
