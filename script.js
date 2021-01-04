"use strict"

const buttonBack=document.querySelector(".button__back");
const buttonNext=document.querySelector(".button__next")
const solutionTitle=document.querySelector(".solution_title");

let solutionTitleValues=["Food Delivery","Women's Clothing Webstore","Furniture Constructor"];

let solutionTitleCurrentValue=0

buttonNext.addEventListener("click",()=>{
    if(solutionTitleCurrentValue<2){
        solutionTitleCurrentValue++
        solutionTitle.textContent=solutionTitleValues[solutionTitleCurrentValue]
    }
    else{
        solutionTitleCurrentValue=0;
        solutionTitle.textContent=solutionTitleValues[solutionTitleCurrentValue]
    }
})

buttonBack.addEventListener("click",()=>{
    if(solutionTitleCurrentValue===0){
        solutionTitleCurrentValue=2
        solutionTitle.textContent=solutionTitleValues[solutionTitleCurrentValue]
    }
    else{
        solutionTitleCurrentValue--;
        solutionTitle.textContent=solutionTitleValues[solutionTitleCurrentValue]
    }
})

