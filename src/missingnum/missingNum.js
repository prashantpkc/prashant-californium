function getMissing(a){
    let missingArr = [];
    let minNum = Math.min(...a)
    let maxNum = Math.max(...a)
    for (let i = minNum; i < maxNum; i++) {
        if(a.indexOf(i)<0){
            missingArr.push(i)
        }
        
    }return missingArr.join(",")
}


module.exports.getMissing = getMissing;
