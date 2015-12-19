//var label2= new Array(10);
var arr=[10,20,30,40];

//console.log(arr);
//array push method for adding index aftr last index and return Length

//console.log(arr.push(7,8,99,50));




//remove last index from an array and return last index.

/*var a=arr.pop();
console.log(a);*/


// remove 1st index from an array and return 1st index.

/*
var a=arr.shift(10,20);
console.log(a);
*/


// add index from start(index wil be 1 or more then 1 and return total length
/*var a=arr.unshift(10,20);
console.log(a);
console.log(arr);*/


/*
var a=arr.join("");
console.log(a);
*/




/*
var fruit1=['apple','banana','mango','cherry','watermelon','pinapple','coconut'];
var fruits2=[];
var length=fruit1.length;
console.log(fruit1);
for(var x=0;x<length; x++){
   // console.log(x);
    var a=fruit1.pop();
    fruits2[x]=a;
   // fruits2[x]=fruit1[fruit1.length-x-1];

}
console.log(fruit1);
console.log(fruits2);
*/



/*
var val=[1,2,3,4,5,6];
var alpha=['a','b','c','d','e','f'];
var result=[];
var length=val.length;
for(var x=0; x<length; x++){

    var a=result[x]=alpha.shift() +""+val.shift();
}// console.log(a);
 console.log(result);
*/

/*
var val=[1,2,3,4,5,6,7,8,9];
var alpha=['a','b','c','d','e','f','g','h','i'];
var result=[];
var alp=JSON.parse(JSON.stringify(alpha));
console.log(alp);
var loopLength=val.length;
for(var x=0; x<loopLength; x++){
    result[x]=val.shift()+""+alpha.shift();
   result[loopLength+x]=(alp.push(loopLength ));

    console.log(x)
}*/
//console.log(result);