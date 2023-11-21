const animais = document.getElementById('animais')
const myPopup1 = new Popup({
    id: "my-popup",
    title: "Ajude a Salvar Animais em Perigo!",
    content: `Muitos animais estão enfrentando ameaças sérias, como perda de habitat e caça ilegal. Sua contribuição pode fazer a diferença na preservação dessas espécies. Junte-se a nós na missão de conservação! Clique aqui para doar e proteger a diversidade da vida selvagem.`,
    
});

animais.addEventListener('click', () => {
    myPopup1.show();
});



const poluicao = document.getElementById('poluicao');
const myPopup2 = new Popup({
    id: "my-popup",
    title: "Lute Contra a Poluição: Faça Sua Parte!",
    content: `A poluição ameaça nosso planeta. Adote práticas sustentáveis para combater resíduos e plásticos. Sua ação faz a diferença. Clique aqui para saber como contribuir contra a poluição. `,
});

poluicao.addEventListener('click', () => {
    myPopup2.show();
});



const residuos = document.getElementById('residuos');
const myPopup3 = new Popup({
    id: "my-popup",
    title: "Reduza Resíduos, Salve o Planeta!",
    content: `O aumento constante de resíduos é um desafio sério para o meio ambiente. Embalagens descartáveis, produtos de uso único e desperdício excessivo estão sobrecarregando nossos sistemas de gestão de resíduos. Cada um de nós pode fazer a diferença ao adotar práticas sustentáveis.`,
});

residuos.addEventListener('click', () => {
    myPopup3.show();
});



const contaminacao = document.getElementById('contaminacao');
const myPopup4 = new Popup({
    id: "my-popup",
    title: "Proteja o Solo: Diga Não à Contaminação!",
    content: `
    A contaminação do solo é uma ameaça crescente para nossa terra. Produtos químicos tóxicos, resíduos industriais e práticas agrícolas prejudiciais estão comprometendo a qualidade do solo. Sua ação pode fazer a diferença na preservação desse recurso vital.`,
});

contaminacao.addEventListener('click', () => {
    myPopup4.show();
});



const doar = document.getElementById('pop1');
const myPopup5 = new Popup({
    id: "my-popup",
    title: "Faça a Diferença: Doe e Transforme Vidas!",
    content: `
    Faça parte da mudança! Sua doação apoia projetos vitais de ONGs ambientais. Juntos, podemos proteger ecossistemas, preservar a biodiversidade e criar um futuro mais sustentável.Doe já!`,
});

doar.addEventListener('click', () => {
    myPopup5.show();
});



const Reflorestamento = document.getElementById('pop2');
const myPopup6 = new Popup({
    id: "my-popup",
    title: "Plante o Futuro: Apoie o Reflorestamento!",
    content: `
    Contribua para ONGs que lideram projetos de reflorestamento. Sua generosidade planta árvores, restaura ecossistemas e combate as mudanças climáticas!.`,
});

Reflorestamento.addEventListener('click', () => {
    myPopup6.show();
});



const reuso = document.getElementById('pop3');
const myPopup7 = new Popup({
    id: "my-popup",
    title: "Água é Vida: Apoie o Reuso Sustentável!",
    content: `
    Faça parte da revolução hídrica! Sua doação fortalece iniciativas de reuso de água por ONGs comprometidas. Juntos, podemos conservar esse recurso vital, promover práticas sustentáveis e garantir um futuro hídrico mais seguro!.`,
});

reuso.addEventListener('click', () => {
    myPopup7.show();
});



const descarte = document.getElementById('pop4');
const myPopup8 = new Popup({
    id: "my-popup",
    title: "Lixo no Lugar Certo!",
    content: `
    Junte-se à missão de um planeta mais limpo! Sua doação apoia ONGs dedicadas ao descarte correto de lixo. Contribua para programas que educam, reciclam e preservam o meio ambiente. `,
});

descarte.addEventListener('click', () => {
    myPopup8.show();
});



const campanhas = document.getElementById('pop5');
const myPopup9 = new Popup({
    id: "my-popup",
    title: "Semeando Sustentabilidade:",
    content: `
    Junte-se à jornada sustentável! Sua doação impulsiona nossas campanhas dedicadas à sustentabilidade, promovendo práticas e estilos de vida ecologicamente conscientes. Clique agora para fortalecer o movimento por um planeta mais verde e saudável. `,
});

campanhas.addEventListener('click', () => {
    myPopup9.show();
});



const energia = document.getElementById('pop6');
const myPopup10 = new Popup({
    id: "my-popup",
    title: "Ilumine o Futuro: Apoie a Energia Limpa!",
    content: `
    Faça parte da revolução energética! Sua doação impulsiona projetos de energia limpa, promovendo fontes renováveis e sustentáveis. Ao contribuir, você está investindo em um futuro com menos emissões e mais respeito pelo nosso planeta.`,
});

energia.addEventListener('click', () => {
    myPopup10.show();
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const dynamicText = document.querySelector("span");
const words = ["Verde", "Sustentável", "Ecológico", "Limpo","Melhor"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");
    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 100);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 70);
    } else {
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1000);
    }
}
typeEffect();

let prevScrollPos = window.pageYOffset;
const header = document.getElementById("cabeçalho");

window.addEventListener("scroll", function() {
    let currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {

        header.classList.remove("hidden");
    } else {

        header.classList.add("hidden");
    }

    prevScrollPos = currentScrollPos;
})

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}