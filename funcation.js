/*
const students = [{
    name: "bikash",
    obtMarks: 344
}]
function getDivision(obtMarks, total) {
    let per = obtMarks/total*100;

    if(per >= 80) {
        return("distinction")
    }else if (per >= 60){
    return("first division")
    }else if(per >= 45){
        return("second division")
    }else if(per >= 35){
        return("third division")
    }else  {
        return("sorry you are faild")
    }
}
*/
//let response = getDivision(344, 500)
//let resulte = getDivision(obtMarks, total)
//console.log(obtMarks)

const getSum = (arr) => {
    let sum = 0;
    for(let x  of arr) 
    {
        sum += x;
    }
    return sum;
}
const arr = [1,2,3,4,5]
// print in the following format using funcation:

// category 1
// category 1.2
// category 1.2.1
// 
// 