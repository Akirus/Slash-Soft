"use strict"

const buttonBack = document.querySelector(".button__back");
const buttonNext = document.querySelector(".button__next")
const solutionTitle = document.querySelector(".solution_title");
const slider = document.querySelector(".slider_container");

let solutionTitleValues = ["Food Delivery", "Women's Clothing Webstore", "Furniture Constructor"];

let solutionTitleCurrentValue = 0;
let translateValue = "1100";

buttonBack.setAttribute("disabled", "disabled");

buttonNext.addEventListener("click", () => {
    solutionTitleCurrentValue++;
    if (buttonBack.hasAttribute("disabled")) {
        buttonBack.removeAttribute("disabled")
    }
    solutionTitle.textContent = solutionTitleValues[solutionTitleCurrentValue % 3]
    slider.style.transform = `translateX(-${translateValue * solutionTitleCurrentValue}px)`
    if (solutionTitleCurrentValue === 2) {
        buttonNext.setAttribute("disabled", "disabled")
    }
})

buttonBack.addEventListener("click", () => {
    if (buttonNext.hasAttribute("disabled")) {
        buttonNext.removeAttribute("disabled")
    }
    solutionTitleCurrentValue--;
    solutionTitle.textContent = solutionTitleValues[solutionTitleCurrentValue % 3]
    if (solutionTitleCurrentValue === 0) {
        buttonBack.setAttribute("disabled", "disabled")
        slider.style.transform = `translateX(0)`
    } else {
        slider.style.transform = `translateX(-${translateValue * solutionTitleCurrentValue}px)`
    }
})

const buttonPlatforms = document.querySelector(".button__platforms");
const buttonLanguages = document.querySelector(".button__languages");
const buttonOther = document.querySelector(".button__other");
const technologySliderContainer = document.querySelector(".technology_slider_container");

let clicks = 0;
const buttons =[buttonPlatforms,buttonLanguages,buttonOther];


buttonLanguages.addEventListener("click", () => {
    technologySliderContainer.style.transform = `translateX(-${translateValue}px)`
    buttons.forEach((button)=>{
        if(!buttonLanguages.classList.contains("underline")){
            buttonLanguages.classList.add("underline");
        }
    })
    if(!buttonLanguages.classList.contains("underline")){
        buttonLanguages.classList.add("underline");
    }
    if(buttonPlatforms.classList.contains("underline")){
        buttonPlatforms.classList.remove("underline");
    }
    if(buttonOther.classList.contains("underline")){
        buttonOther.classList.remove("underline");
    }
})

buttonPlatforms.addEventListener("click", () => {
    technologySliderContainer.style.transform = `translateX(0)`;
    if(!buttonPlatforms.classList.contains("underline")){
        buttonPlatforms.classList.add("underline");
    }
    if(buttonLanguages.classList.contains("underline")){
        buttonLanguages.classList.remove("underline");
    }
    if(buttonOther.classList.contains("underline")){
        buttonOther.classList.remove("underline");
    }
})

buttonOther.addEventListener("click", () =>{
    technologySliderContainer.style.transform = `translateX(-${translateValue*2}px)`;
    if(!buttonOther.classList.contains("underline")){
        buttonOther.classList.add("underline");
    }
    if(buttonPlatforms.classList.contains("underline")){
        buttonPlatforms.classList.remove("underline");
    }
    if(buttonLanguages.classList.contains("underline")){
        buttonLanguages.classList.remove("underline");
    }
})

const faqChat=document.querySelector(".faq_chat_slider");
const buttonQuestion=document.querySelector(".button__question");
const answers=document.querySelectorAll(".answer");

let chatTranslateValue="88";
let buttonQuestionClicks=0;

buttonQuestion.addEventListener("click",()=>{
    faqChat.style.transform=`translateY(-88px)`;
    let promise=new Promise(function(resolve,reject){
        setTimeout(()=>faqChat.style.transform=`translateY(-188px)`,300);
        resolve(setTimeout(()=>{
            answers[1].innerHTML="<p class=\"description\">\n" +
                "                            We provide custom solutions for e-commerce, technologies we use are:\n" +
                "                        </p>\n" +
                "                        <ul>\n" +
                "                            <li><p class=\"dot description\">Taking a sprint with a bunch of tasks into work, our\n" +
                "                                employees\n" +
                "                                implement and test the task,\n" +
                "                                after which we provide a demo to the customer.</p></li>\n" +
                "                            <li><p class=\"dot description\">The client validates the work and agrees on the next set of\n" +
                "                                tasks.</p></li>\n" +
                "                            <li><p class=\"dot description\">Close and continuous execution of tasks brings the product as\n" +
                "                                close as possible to the customer's vision.</p></li>\n" +
                "                        </ul>"
            faqChat.style.transform=`translateY(-354px)`
    },1000))
})})

