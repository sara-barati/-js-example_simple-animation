

let string=ingExtractor("zing went ring, ding wing SINk")
function ingExtractor(string) {
    return string
      .replace(/[^a-zA-Z ]/g, "")
      .split(" ")
      .filter((word) => {
        let temp = word.toLowerCase().replace("ing", "");
        if (temp.length === temp.replace(/[aeiou]/g, "").length) {
          return false;
        }
        if (word.toLowerCase().includes("ing")) {
          return true;
        }
      });
  }
  console.log(ingExtractor(string));



//solution2

    // function x(str){
    //     let res=[]
    //     let n =[]
    //     let arr=str.split(" ")
    //     for (let i = 0; i < arr.length; i++) {
          
    //          res[i]=arr[i].replace("ing","")
    //     }
    //   for (let i = 0; i < res.length; i++) {
    //     if (res[i].length>2){
    //         n[i]=res[i]+"ing"

   
    //     }
    // }
       
    //      return n
    //   }
    // console.log(x("coming bringing Letting sing"));


    