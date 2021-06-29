function symptomCheck(){
    let sym1=document.getElementById("sym1").value;
    let sym2=document.getElementById("sym2").value;
    let sym3=document.getElementById("sym3").value;
    let sym4=document.getElementById("sym4").value;
    let sym5=document.getElementById("sym5").value;
    let sym6=document.getElementById("sym6").value;
    let sym7=document.getElementById("sym7").value;
    let sym8=document.getElementById("sym8").value;
    let sym9=document.getElementById("sym9").value;
    let sym10=document.getElementById("sym10").value;
    let sym11=document.getElementById("sym11").value;
    let sym12=document.getElementById("sym12").value;
    let sym13=document.getElementById("sym13").value;

    console.log(sym1)
    console.log(sym2)
    console.log(sym3)
    console.log(sym4)
    console.log(sym5)
    console.log(sym6)
    console.log(sym7)
    console.log(sym8)
    console.log(sym9)
    console.log(sym10)
    console.log(sym11)
    console.log(sym12)
    console.log(sym13)


    if (sym1==="0" || sym2==="0" || sym3==="0" || sym4==="0" || sym5==="0" || sym6==="0" || sym7==="0" || sym8==="0"|| sym9==="0"|| sym10==="0"|| sym11==="0"|| sym12==="0"|| sym13==="0"){
        alert("Please choose option")

    }
    else{
        document.getElementById('result').textContent =sym1;

    }



}


