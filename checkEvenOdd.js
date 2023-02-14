function checkEvenOdd(i){
    for(i=1;i<=2;i++){
        if(i%2==0){
            console.log("pair");
        }
        else{
            console.log("Impair");
        }
    }
    return i;
}
checkEvenOdd(7);
checkEvenOdd(2);
module.exports = checkEvenOdd;
