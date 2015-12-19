/**
 * Created by sayla on 1/12/2015.
 */

/*var name= prompt("Type Your Name");
var fName= prompt("Type Your Father Name");
var age= prompt("Type Your Age");*/
//document.write("you name is "+name +"father Name is"+ fName +"and age is"+age);

//console.log(name);

//alert(prompt(alert("2n dalert "+alert("3rd alert")+2*5),prompt("this is text")));

/*
var a="a";
b="15";
a="aa";
*/
//console.log(a);
/*var num=10;
++num;
console.log(++num);
console.log(++num);
console.log(num--);


var num2=20;
num2=++num2 + num2--;
console.log(num2);
console.log(num2);*/


/*
var num=2;
alert(prompt(num+num+ ++num,alert(--num)),prompt("Hello world",num));*/
/*

var num = 1;
var newNum = num++;
console.log(num++ * newNum)*/

/*var num = 10;
 var newNum = num--;
console.log(num,newNum);*/

/*
var x=10;
var num=++x;
console.log(num);

console.log(num+2);
*/

/*

function table() {
   var val1 = prompt("no. of table ");


  for (x = 1; x <= 10; x++)
   {
    document.write(val1 + " x " + x + "=" + val1 * x + "<br>");
}    document.write("You write table of "+"<b>"+val1+"</b>");
}

*/

/*

prompt("write any number","1-10");

*/



//if else ------------------------------->>>>

/*
var x=2;
if(x ==3)
{
    alert("x is 2");
}
else{alert("error");}
*/



/*
function namee() {
    var name = "asim";


    if (name === "asim") {

        alert("name is " + name)
    }
    else{
        alert("name is change");
    }


}*/

//if with prompt condition---------------------------->>>>>>>

/*var name="danish";
var age=25;

var valName=prompt("what is your name");
var valage=prompt("age");

if(name == valName && age== valage)
{
    alert("Congratulations!!!")
}
else{

    alert("Boooooo Failed!!! Try Again Later");
}*/


/*
var age= prompt("type your age");
if(age >= 18)
{
    alert("you are able for N.I.C");

    //var old= prompt("Renew your N.I.c");
    //var neww=prompt("Do you want to create new N.I.C ");
}
else if(age <18) {
    alert("you are not able for N.I.C Because yoou are under age");


}*/
/*

console.log(confirm("yes u have done"))*/




/*
var  subEng=+prompt("Englis marks");
var subMath=+prompt("Math marks");
var subUrdu=+prompt("Urdu marks");
var subComp=+prompt("Computer marks");
var subChem=+prompt("Chemistry marks");

if(subChem >=40 && subComp >=40&& subEng >=40&& subMath >=40 && subUrdu>=40)
{
    alert("Congratulations !!! You are Pass Click ok for Resul Card");
    document.writeln("Chem Marks "+ subChem+"<br>");
    document.writeln("computer Marks "+ subComp+"<br>");
    document.writeln("English Marks "+ subEng+"<br>");
    document.writeln("Urdu Marks "+ subUrdu+"<br>");
    parseInt(total=subEng + subChem + subComp + subMath + subUrdu);

    document.writeln("Total Marks"+total+"<br>");
    var grade=total*100/500;
    if(grade <=40)
    {
        document.write("D Grate")
    }
    else if(grade <=50)
    {
        document.write("C Grate");
    }
    else if(grade <=60)
    {
        document.write("B Grate");
    }
    else if(grade <=70)
    {
        document.write("A Grate");
    }
    else if(grade <=80)
    {
        document.write("A-One Grate");
    }
    document.write("Grade : "+grade+"%");

}
else{

    alert("You are Fail");
}*/



/*
var val1=+prompt("enter value one");
var val2=+prompt("enter value two");
var val3=prompt("Enter Sign you want");
//console.log((val1) (val3) (val2));
if(val3== "+")
{
    document.write(val1 + val2);
}
else if(val3== "-")
{
    document.write(val1 - val2);
}
else if(val3== "*")
{
    document.write(val1 * val2);
}
else if(val3== "/")
{
    document.write(val1 / val2);
}
else {
    alert("you type wrong cherecter");

} */



/*
var arr=[10,10,30,50,"calc"];

arr[0]=50;
arr[0]=undefined;
arr=[]
arr.length=0

//var arr2=new Array(5);
console.log(arr[3])*/

/*var arr=[];
for(var x=0; x<=49; x++) {
    arr[x] = 1 + x + " Hello World";
    document.write(arr[x] + "<br>");

}*/



/*
var arr=[];
for(var x=49; x>=0; x--)
{
    arr[x]=1+x+" Hello World";
    document.write(arr[x]+"<br>");
}
*/


// for loop fill via array -----------------------
/*
var annimals=['cat','monkey','bird','lion','hen','fish'];
var numb=[10,1,9,6,8,5,7];
var result=[];


var animal2=[];
animal2=annimals;

for(var i=0; i<annimals.length;i++) {
    animal2[i]=annimals[i];

}
console.log(animal2)*/



/*
var elec=['mobile','tv','ac','feridge','laptop'];
var count=[];

for(var x=0; x<=49;x++){

    count[x]= x+1+"hello";
    document.write(count[x]+"<br>");
}
console.log(count);
*/

/*
var elec=['mobile','tv','ac','feridge','laptop'];
var digit=[1,3,4,5,8];
var val=[];
for(var y=0; y<digit.length; y++){
    val[digit[y]]=elec[y]
}
//console.log(val[7]);
console.log(val);
*/




/*
var val=[];

for(var y=0; y<50; y++ ){
    val[y] =  y+1;
     if(val[y]%3==0 && val[y]%5==0){
        val[y]="Three and five"
    }
     else if(val[y]%3==0 ) {
         val[y] = "three";
     }
/!*
    else if(val[y]%15==0){
        val[y]="Danish";
    }
*!/
    document.write(val[y]+"<br> ");
}
console.log(val );
*/


/*
var val=[];
for(var x=0;x<50; x++){
    val[x]=x+1;
    if(val[x]%5==0 && val[x]%3==0){
        val[x]="Five and three  ";
    }else if(val[x]%3==0) {
        val[x] = "Three";
    }else if(val[x]%2==0 && val[x]%10==0){
    val[x]="two and ten";
    }
    document.write(val[x]+"<br>");

}console.log(val);
*/



/*
var val1=[1,2,3,4,5,6,7,8];
var val2=[];
for(var y=0; y<val1.length; y++){
    val2[y]=val1[val1.length-y-1];
    document.write(val2[y]+"<br>")
}


    console.log(val1);
    console.log(val2);
*/

/*
var val1=[1,2,5,6,4,7,8,9];
var empty=[];

for(var x=0; x<val1.length; x++){
    empty[x]=val1[val1.length-x-1];
    console.log(x);
}console.log(empty);
console.log(val1);
*/

var arr=["ahmed","waqar","noman","zeshan","farooq",'hammad'];
/*
console.log(arr)
console.log(arr.pop());
console.log(arr)
console.log(arr)
console.log(arr.push("jj"));
console.log(arr)
*/

/*
console.log(arr.push("zia","jj",1));
console.log(arr);
console.log(arr.pop());
console.log(arr)
*/

/*
console.log(arr);
console.log(arr.shift("a"));
console.log(arr);
*/

/*
console.log(arr);
console.log(arr.unshift("a"));
console.log(arr);
*/


/*console.log(arr);
console.log(arr.splice(0,5,"Asim"));
console.log(arr);*/


/*console.log(arr);
console.log(arr.slice(0,7));
console.log(arr);*/




/*
var num=[1,2,3,4,8];
console.log(num);
var num2=[5,6,7];

for(var i=num2.length;i>0;i--){
    num.splice(4,0,num2[i-1]);
}
console.log(num);
console.log(num2);
*/



/*
var num=[1,2,3,8,9];
var missing=[4,5,6,7];
console.log(num)
console.log(missing)


console.log(num.splice(1,2));
/!*for(var x=missing.length;x>=0;x--){

    num.splice(2,0,missing[x-1]);
}*!/
console.log(num);
console.log(missing);*/



//==========================for loop
/*
var cleanCity=["lahore","islamabad","multan","quetta"];
var cityName=prompt("Enter City Name");
var a=false;
for(var x=0; x<cleanCity.length; x++){
    if(cityName.toLowerCase()==cleanCity[x]){
        alert(cityName+" is in clean city list");
        a=true;
        break;
    }
}if(a==false){

    alert(cityName + " is not in our list");
}*/


//calculator===============

/*
var vplus="";
function cal(a) {
    if (a == "C" || a == "AC") {
        document.getElementById('result').value = '';
    }
    else {
        var val1=document.getElementById('result').value = a;
        var val2=document.getElementById('result').value = a;
        console.log(val1);
        console.log(val2);
        var val2='';
        document.getElementById('result').value = a;
        if(a=="+"){
            document.getElementById('result').value = val1+val2;
        }else if(a=="-"){
            document.getElementById('result').value += a;
        }else if(a=="/"){
            document.getElementById('result').value += a;
        }else if(a=="*"){
            document.getElementById('result').value += a;
        }
    }
}*/

var alpha=['a','b','c','d','f','g'];
/*
console.log(alpha.push('H'));
console.log(alpha);*/


/*console.log(alpha.pop());
console.log(alpha);*/

/*
console.log(alpha.slice(0,2));
console.log(alpha);*/


/*
console.log(alpha.splice(0,2,'A'));
console.log(alpha);
*/

/*
var m=alpha.shift();
console.log(m);
console.log(alpha);*/



/*
var m=alpha.unshift(5,1);
console.log(m);
console.log(alpha);*/

var text="karachi is a good city. karachi was facing target killing issues.";
//console.log(text.length);
//var a=text.splice(5,6,0);
//console.log(a)


var numStart=0;
var numEnd=20;
var value=[];
for(var x=numStart; x<=numEnd; x++){
    value[x]=x;
}
console.log(value);