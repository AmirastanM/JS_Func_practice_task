"use strict";

// let person={
//     name:"Nurlan",
//     surname:"Umudov",
//     age:22
// }
// console.log(person.name);
// console.log(person);

// let datas=[
//     {
//         name:"Fatime",
//         surname:"Qayxanova",
//         groups:[
//             "pb101",
//             "p314"
//         ],
//         teachers:[
//             "Cavid",
//             "Hemid"
//         ]
//     },
//     {
//         name:"Fexriyye",
//         surname:"Tagizade",
//         groups:[
//             "pb101"
            
//         ],
//         teachers:[
//             "Cavid",
            
//         ]

//     },
//     {
//         name:"Afide",
//         surname:"Veliyeva",
//         groups:[
//             "pb101",
//             "p312"
//         ],
//         teachers:[
//             "Cavid",
//             "Elcin"
//         ]
//     }
// ]
// console.log(datas);


// let surname="Tagizade";
//console.log(surname.length);
// console.log(surname.toLowerCase());
//console.log(surname.toUpperCase());
// console.log(surname.trim());
// console.log(surname.startsWith("T"));
// console.log(surname.indexOf("a"));
//console.log(surname.lastIndexOf("a"));
// console.log(surname.substring(0,2));
//console.log("fvdgsjhakjdvhsjbalcdsjldcjshjaljdcs".substring(0,10)+"... ");

// for(let i=0 ; i<surname.length;i++){
//     const element =surname[i];
//     console.log(element);
// }

//console.log(surname.includes("t".toUpperCase()));

// let array=surname.split(" ")

// console.log(array);
// console.log(surname.charAt(0))
// console.log(surname.charCodeAt("t"))
// console.log(surname.slice(0,3))
// let fullName="Tagizade Fexriyye Azerbaycan";
// console.log(fullName.replace("Azerbaycan","italiya"))

// let nums=[1,2,3,34,5];
// for(const item of nums){
//     console.log(item);
// }


// let person={
//     name:"Nurlan",
//     surname:"Umudov",
//     age:22
// }

// for (const key in person) {
//    console.log(person[key]);
// }
// for (const key in person) {
//    if(key=="name"||key=="surname"){
//     console.log(person[key]);
//    }
   
//  }
 
// let nums=[1,2,4,5,6,];

// nums.forEach((element,i)=>{
//     console.log(element+ " "+i);
// })

// let  data=nums.toString();
// console.log(data);

// let data=nums.join("-");

//nums.push(100);
// console.log(nums);
// nums.pop();
// console.log(nums);
// nums.shift();
// console.log(nums);
// nums.unshift(500);
// console.log(nums);


// const myGirls=["gshja","gdhsj"];
// const myBoys=["gshja","dgshj","vcbxsj"];
// const myChildren=myGirls.concat(myBoys);
// console.log(myChildren);

// let address="Ehmedli";

// let result=[...address]//Rest
// console.log(result);

// let obj={
//     name:"test",
//     surname:"testov"
// }
// let data={...obj};
// console.log(data);

// let nums=[1,2,4,5,6,];
// let datas =[...nums];
// console.log(datas);

// showText();

// function showText(){
//     let a=100;
//     if(a>50){
//         console.log("Hello World");
//     }
    
// }

// function showText(text){
//     console.log(text);
// }

// showText(500);

// function sum(a,b){
//     let result=a+b;
//     console.log(result);
// }

// sum(111,500);

// let datas=[1,2,3,4,4];
// function findData(arr){
//     for(const item of arr){
//         if(item==100){
//             console.log("100 already found");
//             break;
//         }
//     }
//     console.log("welcome to our site");
// }

// findData(datas);

// function sum(a,b){
//     return a+b;
    
// }
// let result=sum(10,20);
// console.log(result);
// let datas=[1,2,3,4,4];
// function test(arr){
//     arr[0]=100;
//     console.log(arr);
// }
// test(datas);
// console.log(datas);


// let b=100;
// function test(a){
//     a=20;
//     console.log(a);
// }
// test(datas);
// console.log(b);

// let datas=[1,2,3,4,4];
// function test(arr){
//     let newArr=["salam","sagol"]
//     arr=newArr;
//     console.log(arr);
// }
// test(datas);
// console.log(datas);

// let elems1=[1,2,34];
// let elems2=[4,5,6];
// elems1=elems2;
// elems2[0]=100;
// console.log(elems1)
// console.log(elems2)

// function test(...datas){
//    for(let i=0 ; i<datas.length;i++){
//     const element =datas[i];
//     console.log(element);
// }
// }
// test(1,23,33,4,5)

// function test(){
//     //console.log(arguments);//argumnets objectdir array deyil
//    for(let i=0 ; i<arguments.length;i++){
//     const element =arguments[i];
//     console.log(element);
// }
// }
// test(1,2,34,5);

// let showwTest=()=>{
//     console.log("tested");
// }
// showTest();

// let showTest=(text)=>{
//     console.log(this);
// }
// showTest();
// // console.log(this);

// function showNumber(){
//     console.log(this)
// }
//  showNumber();

// const showText=()=>{
//     console.log(this)
// }
// showText("Nesir bey");

// let student={
//     name:"Reshad",
//     surname:"Aghyev",
//     age:21,
//     address:"Neftciler",
//     getFullName:function(){
//         console.log(this.name+ " "+this.surname)
//     },
//     getFullData:()=>{
//         console.log(this.name+ " "+this.surname)
//         //console.log("Welcome")
//     },

// }

// student.getFullName();
// student.getFullData();

// window.location.reload();

// const test=()=>{
//     for (let i=0;i<arguments.legnth;i++){
//         const element=arguments[i];
//         console.log(element);
//     }
// }
// test(1,23,4)///erorr

// this.alert();