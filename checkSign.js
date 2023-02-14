function checkSign(n){
    if(n<0){
        console.log("Negatif");
    }else{
        console.log("Positif");
    }
    
    return n;
}
checkSign(-7);
checkSign(5);
checkSign(9);
module.exports = checkSign;
