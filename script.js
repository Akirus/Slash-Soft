"use strict"
const buttonPlatforms = document.querySelector(".button__platforms");
const buttonLanguages = document.querySelector(".button__languages");
const buttonOther = document.querySelector(".button__other");
const technologySliderContainer = document.querySelector(".technology_slider_container");
const technologyOptions = document.querySelector(".technology_options");
let technologyButtons = [buttonPlatforms, buttonLanguages, buttonOther];

const faqChat = document.querySelector(".faq_chat_slider");
const buttonQuestion = document.querySelector(".button__question");
const answers = document.querySelectorAll(".answer");


const buttonBack = document.querySelector(".button__back");
const buttonNext = document.querySelector(".button__next")
const solutionTitle = document.querySelector(".solution_title");
const slider = document.querySelector(".slider_container");
let solutionTitleValues = ["Food Delivery", "Women's Clothing Webstore", "Furniture Constructor"];


const Burger = document.querySelector(".burger_menu");
const BurgerButton = document.querySelector(".button__menu");
const backDrop = document.querySelector(".backdrop");
let burgerTranslateValue = "300";
let burgerButtonClicks = 0;


let translateValue = "1100";

if (document.documentElement.clientWidth < 1348 && document.documentElement.clientWidth > 700) {
    translateValue = "640";
}

if (document.documentElement.clientWidth < 700) {
    translateValue = "311";
}


const address = document.querySelector("#email");
const emailContainer = document.querySelector(".email_container");
const name = document.querySelector("#name");
const checkbox=document.querySelector("#agree")
const nameContainer = document.querySelector(".name_container");

function validate(name, email,checkbox) {
    if (name && email && checkbox) {
        return true;
    } else {
        return false;
    }
}

const label=document.querySelector(".agree_label");

checkbox.addEventListener("click",event=>{
    if (!checkbox.checked){
        if(!label.classList.contains("wrong")){
            label.classList.add("wrong")
            checkbox.style.boxShadow="inset 0 0 0 1px rgba(255, 85, 93, 1)";
        }
    }
    else{
        if(label.classList.contains("wrong")){
            label.classList.remove("wrong")
            checkbox.style.boxShadow="unset";
        }
    }
})

function agree(){
    if (!checkbox.checked){
        if(!label.classList.contains("wrong")){
            label.classList.add("wrong")
            checkbox.style.boxShadow="inset 0 0 0 1px rgba(255, 85, 93, 1)";
        }
        return false;
    }
    else{
        if(label.classList.contains("wrong")){
            label.classList.remove("wrong")
            checkbox.style.boxShadow="unset";
        }
        return true;
    }
}

function emailValidate() {
    let reg = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
    if (!address.value) {
        if (emailContainer.classList.contains("wrong_email")) {
            emailContainer.classList.remove("wrong_email");
        }
        emailContainer.classList.add("wrong");
        return false;
    } else if (!reg.test(address.value)) {
        if (emailContainer.classList.contains("wrong")) {
            emailContainer.classList.remove("wrong");
        }
        emailContainer.classList.add("wrong_email");
        return false;
    } else {
        if (emailContainer.classList.contains("wrong")) {
            emailContainer.classList.remove("wrong");
        } else if (emailContainer.classList.contains("wrong_email")) {
            emailContainer.classList.remove("wrong_email");
        }
        return true;
    }
}

function nameValidate() {
    if (name.value.trim()) {
        if (nameContainer.classList.contains("wrong")) {
            nameContainer.classList.remove("wrong");
        }
        return true;
    } else {
        if (!nameContainer.classList.contains("wrong")) {
            nameContainer.classList.add("wrong");
        }
        name.value = "";
        return false;
    }
}


const form = document.querySelector("#contacts_form");


form.addEventListener("submit", event => {
    event.preventDefault();
    if (!validate(nameValidate(), emailValidate(),agree())) {
        event.returnValue = false;
    } else {
        address.value = "";
        name.value = "";
        checkbox.checked=false;
    }
})


BurgerButton.addEventListener("click", () => {
    BurgerButton.classList.toggle("button__menu_close");
    Burger.style.transform = `translateX(0)`;
    backDrop.style.display = "block"
    burgerButtonClicks++;
    if (burgerButtonClicks > 1) {
        Burger.style.transform = `translateX(${burgerTranslateValue}px)`;
        backDrop.style.display = "none"
        burgerButtonClicks = 0;
    }
    document.addEventListener("click", event => {
        let target = event.target;
        if (target.className === "backdrop") {
            BurgerButton.classList.remove("button__menu_close");
            Burger.style.transform = `translateX(${burgerTranslateValue}px)`;
            backDrop.style.display = "none";
            burgerButtonClicks = 0;
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


technologyOptions.addEventListener("click", event => {
    const target = event.target;
    if (target.tagName === "BUTTON") {
        if (target.className === buttonPlatforms.className) {
            technologySliderContainer.style.transform = `translateX(0px)`
        } else if (target.className === buttonLanguages.className) {
            technologySliderContainer.style.transform = `translateX(-${translateValue}px)`;
        } else {
            technologySliderContainer.style.transform = `translateX(-${translateValue * 2}px)`;
        }
        for (let i of technologyButtons) {
            i.className === target.className ? i.classList.add("underline") : i.classList.remove("underline");
        }
    }
})


const navList = document.querySelector(".home_page_nav_list");
const servicesSection = document.querySelector("#services");
const aboutUsSection = document.querySelector("#about_us");
const casesSection = document.querySelector("#cases");
const workflowSection = document.querySelector("#workflow");
const ourTeamSection = document.querySelector("#our_team");
const technologySection = document.querySelector("#technology");
const faqSection = document.querySelector("#faq");
const contactUsSection = document.querySelector("#contact_us");
const homePageSection=document.querySelector("#home_page");

homePageSection.addEventListener("click", event => {
    let target = event.target;
    if(target.className==="link__mailto"){
        event.stopPropagation();
    }
    else{
        event.preventDefault();
    }
    if (target.classList.contains("services_link")) {
        servicesSection.scrollIntoView({behavior: "smooth"});
    } else if (target.className === "about_us_link") {
        aboutUsSection.scrollIntoView({behavior: "smooth"});
    } else if (target.className === "cases_link") {
        casesSection.scrollIntoView({behavior: "smooth"});
    } else if (target.className === "workflow_link") {
        workflowSection.scrollIntoView({behavior: "smooth"});
    } else if (target.className === "our_team_link") {
        ourTeamSection.scrollIntoView({behavior: "smooth"});
    } else if (target.className === "technology_link") {
        technologySection.scrollIntoView({behavior: "smooth"});
    } else if (target.className === "faq_link") {
        faqSection.scrollIntoView({behavior: "smooth"});
    } else if (target.classList.contains("contact_us_link")) {
        contactUsSection.scrollIntoView({behavior: "smooth"});
    }
})

casesSection.addEventListener("click",event=>{
    let target = event.target;
    if (target.classList.contains("contact_us_link")) {
        contactUsSection.scrollIntoView({behavior: "smooth"});
    }
})


let chatTranslateValue = "88";
let buttonQuestionClicks = 0;

buttonQuestion.addEventListener("click", () => {
    faqChat.style.transform = `translateY(-88px)`;
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => faqChat.style.transform = `translateY(-188px)`, 300);
        resolve(setTimeout(() => {
            answers[1].innerHTML = "<p class=\"description\">\n" +
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
            faqChat.style.transform = `translateY(-354px)`
        }, 1000))
    })
})







