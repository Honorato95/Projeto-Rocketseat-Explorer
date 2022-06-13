const answerElement = document.querySelector("#answer");
const inputAsk = document.querySelector("#input-ask");
const button = document.getElementById("button-ask");

const answers = ["Certeza!",
"Não tenho tanta certeza.",
"É decididamente assim.",
"Não conte com isso.",
"Sem dúvidas!",
"Pergunte novamente mais tarde.",
"Sim, definitivamente!",
"Minha resposta é não.",
"Você pode contar com isso.",
"Melhor não te dizer agora.",
"A meu ver, sim.",
"Minhas fontes dizem não.",
"Provavelmente.",
"Não é possível prever agora.",
"Perspectiva boa.",
"As perspectivas não são tão boas.",
"Sim.",
"Concentre-se e pergunte novamente.",
"Sinais apontam que sim."];

const makeAsk = () => {
    if(inputAsk.value == "") {
        alert("Faça uma pergunta!");
        return
    };

    button.setAttribute("disabled", true);

    const answer = "<div>" + inputAsk.value + "</div>";
    const randomAnswer = answers[Math.floor(Math.random() * 19)];
    answerElement.innerHTML = answer + randomAnswer;
    answerElement.style.opacity = 1;

    setTimeout(function() {
        answerElement.style.opacity = 0;
    }, 3000);

    setInterval(() => {
        window.location = window.location.href
    }, 4500);
};
