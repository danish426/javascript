var arr=['j','l','p','a','f','j','l','p','pak'];
var num=[1,2,3,4,5];
/*
console.log(arr);
console.log(num);
*/

// arr.splice(starting index,no. of delets index,set value......);
//arr.splice(2,3,25);
/*
console.log(arr.splice(1,3));
console.log(arr);
*/

/*
var val=[1,2,3,4];
val.splice(0,1,"a");
console.log(val);*/

/*console.log(num.splice(1,2));
console.log(num);*/



//==================== splice end==============



//var x=arr.slice(starrting index,no. of index );
/*
var x=arr.slice(0,3);
console.log(x);
console.log(arr);
 var val=['a','b','c','d','e'];
var y=val.slice(1,4);
console.log(y);*/

/*num.sort(function(a,b){return b-a});
//num.reverse() for reverse index no. as define;
//num.reverse();
console.log(num);*/

//arr.splice(0,1);
/*
arr.sort();
arr.splice(2,2);
var a=arr.slice(6,7);
console.log(arr);
console.log(a);*/

//=========================For Loop

//var Cleancity=["Islamabad","Lahore","Pindi","Multan","Faislabad","karachi"];
/*
var city=prompt("Enter City Name");
for(var x=0; x<Cleancity.length; x++){
 console.log(Cleancityx);
 if(Cleancity[x]== city.toLowerCase()) {

 alert(city+" in clean city list");
}
else{console.log(city+" is not in list ");}}
*/



/*
var firstName=["Danish","Asim","Noman","Akram"];
var LastName=["Qamar","Ahmed","Yousuf","Mehmood"];
var reslut=prompt("Enter First Name","");
for(var x=0; x<firstName.length; x++){
 console.log(x);
 /!*if(firstName[x]==LastName[x]){
  alert("you complete name is ");
 }*!/
}
*/

//===========================For Loop End
/*

var city="lahore";

for(var x=0; x<Cleancity.length; x++){
 console.log(Cleancity[x]);
 if(Cleancity[x]=== city.toLowerCase()) {

  alert(city+" in clean city list");
 console.log(x)}
 else{console.log(city+" is not in list ");
  //console.log(x);
   }
//console.log(Cleancity[x]);
if("Lahore"==Cleancity[x]){
 console.log("city matched");//break;
}
 else {
 console.log("city not matched");
//brake;
}
}*/



/*
var arr=['j','l','p','a','f','j','l','p','pak'];
var num=[10,20,30,40,50];
console.log(num);
console.log(num.slice(3,5));
console.log(num);*/


/*
var alpha=['a','b','c','c','d','a','g','e','f'];
console.log(alpha);

console.log(alpha.sort());
console.log(alpha);*/


/*
var fname=prompt("val 1");
for(var x=0; x<10; x++){
 console.log(x)//val[x]=x;
}
//console.log(val);*/



/*
var a=num.push();
console.log(a);
console.log(num);
*/

/*
var arrNew=[];
for( var x=0;x<arr.length;x++){
 document.write(x);
 arrNew[x]=arr[x];
}
console.log(arr);
console.log(arrNew);*/


/////////////////////////////Game ---------------
var y;
var comNum1;
var val1=+prompt("Enter Any Number 1 to 9");
console.log(val1);
document.writeln("Your answer will be 2"+ (2-val1)+"<br>");
var val2=+prompt("Enter 2nd Number 1 to 9");
console.log("value 2 is "+val2);
for(var x=1;x<=9;x++){
 console.log(y=val2+x);
 if(y==9) {
  break;
 // console.log(looopLength=x);
 }



} console.log(comNum1=y-x);
 //console.log(looopLength);
document.writeln("your 2nd No. is"+val2+"<br>");
document.writeln("Computer No. is"+comNum1+"<br>");