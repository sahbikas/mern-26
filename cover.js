for ( i = 5; i >= 1; i--) {
    let toPrint= "";
        for ( j = 5; j >= i; j--) {
    toPrint += j+"    ";
        }
        console.log(toPrint)
        
      }
      
    /*  for ( i = 0; i >= 1; i++) {
        let toPrint= "*";
            for ( j = 0; j >= i; j++) {
        toPrint += j+"    ";
            }
            console.log(toPrint)
            
          }
*/
      /*for (var q=0; s<5; q++)  {
        for(var s=0; s<q; s++){
            document.write("*")
        }
        document.write("<br>")
      }  
      */

      var d=['ram', 'sita', 'ram', 'sita', 'ram', 'sita']
      for (const n of d) {
        for (const n in d)
        console.log(d[n])
      }