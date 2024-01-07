
let marks_obj = 340;
let total_marks = 500;

const per = marks_obj/total_marks * 100

if(per >= 95){
   console.log("A+")
} else if(per >= 90 < 95) {
    console.log("A-")
}else if(per >= 85 < 90) {
    console.log("B+")
} else if(per >= 75 < 80) {
    console.log("B-")
} else if(per >= 60 < 75) {
    console.log("B")
}else if (per >= 55 < 60) {
    console.log("C")
} else if (per >= 45 < 55){
    console.log("D")
}else if (per < 45) {
    console.log("f")
}


