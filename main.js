const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const randomNumber = Math.round(Math.random()*10)

const msgList = ["A vida trará coisas boas se tiver paciência.", "Não compense na ira o que lhe falta na razão.", "A maior de todas as torres começa no solo.", "Não há que ser forte. Há que ser flexível.", "Siga os bons e aprenda com eles.", "A juventude não é uma época da vida, é um estado de espírito.", "Os defeitos são mais fortes quando o amor é fraco.", "Surpreender e ser surpreendido é o segredo do amor.", "A sorte favorece a mente bem preparada.", "O pessimista vê a dificuldade em cada oportunidade; O otimista vê a oportunidade em cada dificuldade."]

function openFortuneCookie(event) {
    event.preventDefault()

    screen1.classList.add("hide")
    screen2.classList.remove("hide")

    screen2.querySelector("p").innerText = `${msgList[randomNumber]}`
}

const btnOpen = document.querySelector("#btnOpen")

btnOpen.addEventListener('click', openFortuneCookie)

const btnAgain = document.querySelector("#btnAgain")

btnAgain.addEventListener('click', function(){
    screen1.classList.remove("hide")
    screen2.classList.add("hide")
})