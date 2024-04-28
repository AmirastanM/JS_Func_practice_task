"use strict";

// 1) Verilmiş n - ədədinin 3-ə və 7-ə bölünüb-bölünməməsini tapan bir function yazin.

// let n = 21;
// function checkDivided(n){
// if(n%3 == 0 && n%7 == 0){
//     console.log("bolunur");
// }
// else{
//     console.log("bolunmur");
// }
// }
// checkDivided(n)


// 2) Functiona musbet bir eded gelir, hemin funksiya gelen ededin faktorialini hesablayib geri qaytarmalidir.

// let result = 1;
// function factorial(a){
//     for(let i = 1; i <= a; i++){
//      result *= i;
//     }
//     console.log(result);
// }
//factorial(0)


//3) Her hansisa number elementleri olan arayin icindeki cut ededlerin kvadratlarinin cemini hesablayan bir function yazin.

// let array = [1,2,3,4,5,6];
// let sum = 0;

// function sumSquere(arr){
//     for(let i=0; i < arr.length; i++){
//        if(arr[i] %2 == 0){
//          sum+=arr[i]**2;
//        }
//        }
    
//        console.log(sum);
// }
    
// sumSquere(array);


//4) Funtiona-a  mail ve password gelir. Mail beraberdirse cavid@code.edu.az -a ve password beraberdirse 12345 -e, ekranda "Girish olundu" yazilsin, eks halda "Mail ve yaxud password sehvdir" yazilsin. 

// let Login = (email, password) => {
// if(email == "cavid@code.edu.az" && password == "12345"){
// console.log("Login Succes");
// }
// else{
//     console.log("Email or password wrong");
// }
// };

// Login("cavid@code.edu.az", "12345");




// 5) Functiona ededlerden ibaret array gelir, function hemin arraydaki tek ededlerin cemini qaytarmalidir.

// let array=[1,2,3,4,5,6];
// let sum=0;
// function sumNumbers(arr){
 
//     for(let i=0; i < arr.length; i++){
//        if(arr[i] %2 != 0){
//          sum += arr[i];
//        }
//        }
    
//        console.log(sum);
// }
    
// sumNumbers(array);



//6) Functiona ededlerden ibaret array gelir, function hemin arraydaki cut ededlerin sayini qaytarmalidir.

// let array=[1,2,3,4,5,6];
// let count=0;
// let evenNumberCount = (arr) =>{
 
//     for(let i=0; i < arr.length; i++){
//        if(arr[i] %2 == 0){
//          count++;
//        }
//        }
    
//        console.log(count);
// }
    
// evenNumberCount(array);


// 8) Icerisinde name, surname, age, email olan bir nece student objectleriniz var. Ashagida elave etdiklerimi functionlar sekilinde yazin, functionlar objectlerden ibaret array qebul edecek.
//      1) Yashi 18-25 araliginda olan telebelerin sayi.
//      2) Emailinde "c" herfi olan studentlerin sayi.

// let students=[
//     {
//         name:"Zeyqem",
//         surname:"Ashurov",
//         email:"zeyqem@gmail.com",
//         age:39
//     },
//     {
//         name:"Nurlam",
//         surname:"Umudov",
//         email:"nurlan@gmail.com",
//         age:21
//     },
//     {
//         name:"Ilqar",
//         surname:"Abasov",
//         email:"ilgar@gmail.com",
//         age:24       
//     }
// ]
// //  1) Yashi 18-25 araliginda olan telebelerin sayi.\
// let count=0;
//   let  countStudentRange=(students)=>{
//      students.forEach(element => {
//         if(element.age > 18 && element.age < 25){
//             count++;
//         }
//      });
//      console.log(count);
//   }
//   //countStudentRange(students);

// //      2) Emailinde "c" herfi olan studentlerin sayi.

// let searchStudentEmail=(students)=>{
// students.forEach(element => {
//     if(element.email.match("c")){
//         count++;
//     }
//  });
//  console.log(count);
// }
//searchStudentEmail(students);




// 9) Function yazacaqsiz, Functiona parametr olaraq string gelecek. Hemin function gelen parametrin ilk herfini boyuk herf edib geri qaytarsin.

// function upperCase(text){
//     let word=text.toString()
//     let start=word.substring(0, 1)
   
//     let end=word.substring(1, word.length)
// console.log(start.toUpperCase() + end);

// }
// upperCase("amirastan")















    
