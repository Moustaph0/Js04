 function checkNumber(n){
        if(n<5){
            console.log("Faible");
        }
        if(n=5 || n=6){
            console.log("Moyen");
        }
 }
checkNumber(3);
checkNumber(5);
checkNumber(6);
module.exports = checkNumber;
