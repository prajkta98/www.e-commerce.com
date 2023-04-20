// sepcial countdown
let dayItem = document.querySelector("#days");
let hoursItem = document.querySelector("#hours");
let minItem = document.querySelector("#min");
let secItem = document.querySelector("#sec");

let countDown = ()=>{
    let futureDate = new Date("20 Apr 2023");
    let currentDate = new Date();
    let myDate = futureDate-currentDate;

    let days = Math.floor(myDate/1000/60/24);
}



