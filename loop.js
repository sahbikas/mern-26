//let i = 1;

//do{
    //console.log(i++)
//}while(i <= 10)

// i = 1;
 //while(10 <= i) {
 //   console.log(i++)
 //}

 //for(let j = 1; j <= 10; j++){
   // console.log(j)
// }
//j = 2
 //for(  ; j <= 20; j+=2){
  //  console.log(j)
 //}

 //j = 2
 //for(  ; j <= 20;){
  //  console.log(j)
  //  j+=2
// }

// j = 2
//// for(  ; ;){
   // if(j > 20){
   // break;
   // }
   // console.log(j)
   // j+=2
 //}

// for in loop ,
// executes only in an array,
//for in loop  runs on every element of an array,
// it gives us index of the array


// for val loop
// it gives us value of the array



    
const cats = [
  {
      name: "Category 1",
      children: [
          {
              name: "Category 1.1",
              children: null
          },
          {
              name: "Category 1.2",
              children: [
                  {
                      name: "Category 1.2.1",
                      children: null
                  },
                  {
                      name: "Category 1.2.2",
                      children: null
                  }
              ]
          }
      ]
  },
  {
      name: "Category 2",
      children: [
          {
              name: "Category 2.1",
              children: [
                  {
                      name: "Category 2.1.1",
                      children: null
                  }
              ]
          }
      ]
  }
]

function printCategories(cats, indentation = 0) {
  for (const cats of cats) {
    console.log(' '.repeat(indentation) + cats.name);
    if (cats.subchildren.length > 0) {
      printCategories(cats.subchildren, indentation + 2);
    }
  }
}