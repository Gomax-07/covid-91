function symptomCheck() {
    let sym1 = document.getElementById("sym1").value;
    let sym2 = document.getElementById("sym2").value;
    let sym3 = document.getElementById("sym3").value;
    let sym4 = document.getElementById("sym4").value;
    let sym5 = document.getElementById("sym5").value;
    let sym6 = document.getElementById("sym6").value;
    let sym7 = document.getElementById("sym7").value;
    let sym8 = document.getElementById("sym8").value;
    let sym9 = document.getElementById("sym9").value;
    let sym10 = document.getElementById("sym10").value;
    let sym11 = document.getElementById("sym11").value;
    let sym12 = document.getElementById("sym12").value;
    let sym13 = document.getElementById("sym13").value;

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


    if (sym1 === "0" || sym2 === "0" || sym3 === "0" || sym4 === "0" || sym5 === "0" || sym6 === "0" || sym7 === "0" || sym8 === "0" || sym9 === "0" || sym10 === "0" || sym11 === "0" || sym12 === "0" || sym13 === "0") {
        alert("Please choose option")

    } else if (sym1 === "Yes" || sym2 === "Yes" || sym3 === "Yes" || sym4 === "Yes" || sym5 === "Yes" || sym6 === "Yes" || sym7 === "Yes" || sym8 === "Yes" || sym9 === "Yes" || sym10 === "Yes" || sym11 === "Yes" || sym12 === "Yes" || sym13 === "Yes") {
        document.getElementById("form").style.display = "none";
        document.getElementById('result').textContent = "You display some of the symptoms of covid 19. Kindly visit the nearest hospital to get your covid 19 test done";
        document.getElementById("proceed2").style.display = "initial";




    } else if (sym1 === "No" || sym2 === "No" || sym3 === "No" || sym4 === "No" || sym5 === "No" || sym6 === "No" || sym7 === "No" || sym8 === "No" || sym9 === "No" || sym10 === "No" || sym11 === "No" || sym12 === "No" || sym13 === "No") {
        document.getElementById("form").style.display = "none";
        document.getElementById('result').textContent = "You do not display any symptoms of covid 19. However, you can still get tested to know your status";
        document.getElementById("proceed2").style.display = "initial";





    }


}

function showResults() {
    let location = document.getElementById("location").value;
    let name = document.getElementById("name").value;
    let number = document.getElementById("number").value;
    console.log(location)
    console.log(name)
    console.log(number)
    if (location === "0") {
        alert("Please choose hospital to continue")
    } else {
        document.getElementById('results').textContent = name;
        document.getElementById('results2').textContent = number;
        document.getElementById('results3').textContent = location;
        document.getElementById("table2").style.display = "initial";

    }







}

function book() {
    document.getElementById("appoint").style.display = "initial";


}