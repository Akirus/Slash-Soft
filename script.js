"use strict"
const buttonPlatforms = document.querySelector(".button__platforms");
const buttonLanguages = document.querySelector(".button__languages");
const buttonOther = document.querySelector(".button__other");
const technologySliderContainer = document.querySelector(".technology_slider_container");
const technologyOptions=document.querySelector(".technology_options");
let technologyButtons=[buttonPlatforms,buttonLanguages,buttonOther];

const faqChat=document.querySelector(".faq_chat_slider");
const buttonQuestion=document.querySelector(".button__question");
const answers=document.querySelectorAll(".answer");


const buttonBack = document.querySelector(".button__back");
const buttonNext = document.querySelector(".button__next")
const solutionTitle = document.querySelector(".solution_title");
const slider = document.querySelector(".slider_container");
let solutionTitleValues = ["Food Delivery", "Women's Clothing Webstore", "Furniture Constructor"];


const Burger=document.querySelector(".burger_menu");
const BurgerButton=document.querySelector(".button__menu");
const backDrop=document.querySelector(".backdrop");
let burgerTranslateValue="300";
let burgerButtonClicks=0;



let translateValue = "1100";

if(document.documentElement.clientWidth<1348 && document.documentElement.clientWidth>700){
    translateValue="640";
}

if(document.documentElement.clientWidth<700){
    translateValue="311";
}

function validate() {
    let reg = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
    const address = document.querySelector("#email");
    if(!reg.test(address.value)) {
        alert('Введите корректный e-mail');
        return false;
    }
}

const form=document.querySelector("#contacts_form")

form.addEventListener("submit",event=>{
    event.preventDefault()
    validate();
})



BurgerButton.addEventListener("click",()=>{
    BurgerButton.classList.toggle("button__menu_close");
    Burger.style.transform = `translateX(0)`;
    backDrop.style.display="block"
    burgerButtonClicks++;
    if(burgerButtonClicks>1){
        Burger.style.transform = `translateX(${burgerTranslateValue}px)`;
        backDrop.style.display="none"
        burgerButtonClicks=0;
    }
    document.addEventListener("click",event=>{
        let target=event.target;
        if(target.className==="backdrop"){
            BurgerButton.classList.remove("button__menu_close");
            Burger.style.transform = `translateX(${burgerTranslateValue}px)`;
            backDrop.style.display="none"
        }
    })
})




let solutionTitleCurrentValue = 0;

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





technologyOptions.addEventListener("click",event=>{
    const target=event.target;
    if(target.tagName==="BUTTON"){
        if(target.className===buttonPlatforms.className){
            technologySliderContainer.style.transform=`translateX(0px)`
        }
        else if(target.className===buttonLanguages.className){
            technologySliderContainer.style.transform=`translateX(-${translateValue}px)`;
        }
        else{
            technologySliderContainer.style.transform=`translateX(-${translateValue*2}px)`;
        }
        for(let i of technologyButtons){
            i.className===target.className?i.classList.add("underline"):i.classList.remove("underline");
        }
    }
})




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







