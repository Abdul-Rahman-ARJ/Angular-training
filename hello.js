function powerCal(){
    let a= parseInt(document.getElementById("num1").value)
    let b= parseInt(document.getElementById("num2").value)
   document.getElementById("res").value = Math.pow(a,b)

   document.getElementById("result").innerHTML="Result of "+a+"<sup>"+b+"</sup> is "+Math.pow(a,b)
 
}


