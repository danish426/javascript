function game(){
    var valOne=prompt("value 1 from(1-9)");
    if(valOne.length==1) {
        if (valOne == 1 || valOne == 2 || valOne == 3 || valOne == 4 || valOne == 5 || valOne == 6 || valOne == 7 || valOne == 8 || valOne == 9) {
            var ans = "2" + valOne - 2;
            document.write("Your answer will be <b>" + ans + "</b><br>");
            var valOne = prompt("value 1 from(1-9)");
            document.write("Your 2nd value is " + valOne + "<br>");
            document.write("Computer's value is " + (9 - valOne) + "<br>");
            var valOne = prompt("value 1 from(1-9)");
            document.write("Your 3rd value is " + valOne + "<br>");
            document.write("Computer's value is " + (9 - valOne + "<br>"));
            document.write("Total is <b>" + ans + "<b>");
        }
    }
    else{
        valOne=prompt("you must chose 1 to 9",1);
    }
}