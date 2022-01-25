function getRandomIndex(arrLength, usedPos){
    const randomPos= Math.floor(Math.random()*(arrLength+1));
    if(usedPos.includes(randomPos)){
        return getRandomIndex(arrLength, usedPos);
    }
    return randomPos;
}
function insertWordInto(firstStr=null){
    const arr=firstStr.split(' ');
    let usedPos=[];

    return function(secondStr){
        if(usedPos.length===arr.length+1){
            usedPos=[];
        }  
        const randomPos=getRandomIndex(arr.length, usedPos);  
        if(arr.includes(secondStr)){
            arr.splice(arr.indexOf(secondStr),1);
        }
        arr.splice(randomPos, 0, secondStr);
        if(!usedPos.includes(randomPos)){
            usedPos.push(randomPos);
        }
        let newStr= arr.join(' ');
        arr.splice(randomPos,1);
        return newStr;
    }

}
const res= insertWordInto('Have a nice day')
console.log(res('!'))
console.log(res('!'))
console.log(res('!'))
console.log(res('!'))
console.log(res('!'))
console.log(res('!'))