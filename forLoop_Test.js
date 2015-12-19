//============================================= 1

/*
for(var x=1;x<=5;x++){
    document.write(x+" hello world<br>");
}
*/


//============================================= 2

/*
for(x=1;x<=10;x++){
    document.write(x+"<br>");
}
*/



//============================================= 3

/*
var tableNo=+prompt("Enter Table No.");
tableLength=+prompt("table length");
for(var x=1;x<=tableLength;x++){
    document.write(tableNo+" x "+x+" = "+ tableNo*x+"<br>")
}
*/

//============================================= 4

/*
var A = ["Nokia","Samsung", "Apple", "Sony", "Huawei"];
for(var x=0;x< A.length;x++){
    document.write(A[x]+"<br>");
}
*/


//============================================= 5

/*
fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for(var x=0;x<fruits.length;x++){
    document.write("Element at "+x+" is "+fruits[x]+"<br>");
}
*/


//============================================= 6

/*
var numOfItem=+prompt("number of item");
var items=[];
console.log(numOfItem);
for(var x=0; x<numOfItem; x++){
    //console.log(x);
    items[x]=prompt("item no."+x +" is");
}
console.log(items);
*/

//============================================= 7
/*

document.write("Countning<br>");
document.write("------------------<br>");
for(var x=1;x<=10;x++){
    document.write(x+"<br>")
}

document.write("Reverse Countning<br>");
document.write("------------------------------<br>");
for(var x=10;x>=1;x--){
    document.write(x+"<br>")
}
document.write("Even Numbers<br>");
document.write("----------------------<br>");
for(var x=2;x<=20;x=x+2){
    document.write(x+"<br>")
}

document.write("Odd Numbers<br>");
document.write("-----------------<br>");
for(var x=1;x<=20;x=x+2){
    document.write(x+"<br>")
}

document.write("Series<br>");
document.write("----------------------<br>");
for(var x=2;x<=20;x=x+2){
    document.write(x+"k<br>")
}

*/

//============================================= 8
/*

var product=["cake","pastry","chips","cookie"];
var demand=prompt("what do you want sir/ mam?");
var found = false;
for(var x=0;x<product.length;x++){
    if(product[x]== demand){
        found=true;
        document.write(demand + " is availiable");
        break;
    }
}
if(!found){
    document.write(demand+" not in our list");
}
console.log(product[x]);
*/


//============================================= 9

/*var a = [24, 53, 78, 91, 12];
var largeNumber = a[0];
for(var i=0; i< a.length;i++){
    if(largeNumber < a[i]){
        largeNumber=a[i];
    }
}*/
/*a.sort();
console.log(largeNumber);*/
/*document.write("value of Array items "+ a+"<br>");
document.write("largest value of Array is "+ a.pop());*/


//============================================= 10

/*var a = [24, 53, 78, 91, 12];
a.sort();
console.log(a);
document.write("value of Array items "+ a+"<br>");
document.write("smallest value of Array is "+ a[0]);*/

//============================================= 11

/*
var a = [24, 53, 78, 91, 12];
a.sort();
console.log(a);
document.write("value of Array items "+ a+"<br>");
document.write("Smallest value of Array is "+ a[0]+"<br>");
document.write("largest value of Array is "+ a.pop());
*/



//============================================= 12

/*var a=[24,53,78,91,12];
for(var x=1; x<=5;x++){
    //console.log(a.pop())
    if(24> 53> 78> 91< 12){
        console.log("aa");
    }
}*/

//============================================= 13

/*
for(var x=5;x<=100;x=x+5){
    document.write(x+"<br>");
}
*/



//============================================= 14

/*
var students = ["Ali", "Sami", "Taha", "Inam"];
var scores = [58, 73, 89, 90];
for(var x=0;x<students.length;x++){
    document.write("<table border='1' width='200'><tr>");
    document.write("<td>"+students[x]+"</td>");
    document.write("<td>"+scores[x]+"</td>");
        document.write("</tr></table>");
}
*/
//============================================= 15

/*

var scores = [12, 45, 3, 22, 34, 50];
console.log(scores);
var userno=+prompt("enter value which is in Array");
var chk=false;
for(var x=0;x<scores.length;x++) {

    if (scores[x] == userno) {
        chk = true;
        document.write(scores.slice(0,x+1));
        break;
    }
}
    if(!chk){
        document.write(userno+" not fount in array");
}
*/


//============================================= 16

/*var a= [ [1,2,3] , [4,5,6] , [7,8,9] ];

var arrLen=(a[0].length + a[1].length + a[2].length);
for(var x=0;x< a.length;x++){
        document.write(a[x] + "<br>")
}*/

//============================================= 17
/*
var num=+prompt("enter value");
var result=[];
for (var x=num;x>=.5; x=x-0.5){
    document.write(x+"<br>")
}*/



//============================================= 18
/*
for(var x=0;x<=20;x++){

    if(x%2==0){
        document.write(x+" is even<br>");
    }else if(x%1==0){
        document.write(x+" is Odd<br>");
    }
}*/

//============================================= 19
/*var y='*';
for(var x=7;x>0;x--){
    for(var i=x;i>0;i--){
        document.write(y);
    }
    document.write('<br>');
}*/

function calculate(sign,num1,num2){
    if(sign == '+'){
        return add(num1,num2)
    }
    else{
        return subtract(num1,num2)
    }
}
function add(num1,num2){
    return num1+num2;
}
function subtract(num1,num2){
    return num1-num2;
}
var result = calculate('-',5,9);
console.log(result);