const questionArray = [ 'La mayor lección que has aprendido en tu vida.',
'¿Cuál es tu recuerdo más divertido?',
'¿Qué es lo que nunca podías perdonar?',
'¿Una frase que le haya dolido más en su vida?',
'¿Qué recuerdo borrarías de por vida?',
'¿Con quién puede abrirse más?',
'Dos personas que puedes llevarte a una isla desierta. ¿Quiénes son?',
'¿Qué es para usted un domingo perfecto?',
'Si tuvieras 18 años, ¿harías algo diferente?',
'¿Un objeto sin el que no podría vivir?',
'¿Qué crees que hace que sea mejor ser hombre/mujer?',
'¿Algo que hayas hecho por otra persona y de lo que te sientas bien a día de hoy?',
'La mejor cualidad de una persona.',
'¿A quién debe dar las gracias en su vida y por qué?',
'En una palabra, describe cómo te sientes en este momento.',
'¿Cuál es el trabajo que nunca harías, por mucho dinero que te ofrecieran?',
'Si pudieras viajar en el tiempo, ¿a dónde iría?',
'Si sólo pudieras conservar un recuerdo, ¿cuál sería?',
'Si te quedaran 24 horas de vida, ¿qué harías con ellas?',
'El peor día de tu vida.',
'¿Qué harás diferente que tus padres?',
'¿Qué es lo que más le has dolido en su vida?',
'Si pudieras volver a ser un niño por un día, ¿qué es lo que más le gustaría?',
'¿Cuál has sido el lugar más interesante en el que has estado en su vida?',
'Si te tocara la lotería, ¿seguirías haciendo lo que haces?',
'¿Cómo imagina que sería la vida perfecta?',
'¿Qué es lo más vergonzoso que has hecho delante de los demás?',
'Si pudieras sentarse a hablar con cualquier persona, viva o muerta, ¿quién sería?',
'¿Algo que nunca le hayas contado a nadie?',
'¿En la piel de quién te pondrías por un día?',
'¿Qué has empezado pero nunca has terminado y por qué?',
'¿Qué es lo más difícil de estar contigo?',
'¿Qué te da miedo hacer, pero lo intentarías de toda forma?',
'¿Qué te falta en su vida?',
'¿Cuál crees que es la primera impresión que tiene la gente de usted?',
'¿El día más feliz de tu vida?',
'¿Quieres que tus hijos sean como tú? Si es así, ¿de qué manera?',
'¿Qué crees que hace que sea mejor ser mujer?',
'¿En qué nunca te arrepentirías de haber gastado dinero?',
'Si pudieras cambiar algo de su pasado, ¿qué sería?',
'Si pudieras ser rey, ¿qué sería lo primero que cambiaría de su país?',
'¿Cuál es la mentira que más has dicho en tu vida?',
'¿Una aventura en la que alguna vez tuviste mucha envidia de alguien?',
'¿A qué dedica más tiempo del que debería?',
'El día que revivirías.',
'Si pudieras tener un superpoder, ¿cuál elegirías?',
'Si el mundo entero pudieras escucharte durante una frase, ¿qué dirías?',
'¿De qué está más orgulloso?',
'¿Qué es lo que más alegría le has dado en su vida?',
'Su cualidad más molesta.',
'¿A quién no le daría pena no volver a hablar?',
'¿Qué le pedirías a una buena persona?',
'¿Qué es lo que más necesita en este momento?',
'Si pudieras traer de la tumba a cualquier familiar que ya no esté vivo, ¿quién sería?',
'¿Qué vida consideras envidiable entre tus conocidos?',
'¿Qué fue lo último que le hizo reír tanto que se le saltaron las lágrimas?',
'Lo peor de alguien.',
'El sentimiento que más a menudo saca lo mejor de ti.',
'Si tuviera que mudarse a otro país, ¿a dónde iría?',
'Cita favorita.',
'¿A quién le das siempre tu opinión?',
'¿A qué sueño has renunciado?',
'¿La lección más importante que aprendiste de tus padres?',
'¿De qué película o libro le gustaría ser el protagonista?',
'¿Dónde le gustaría estar dentro de 10 años?',
'Si le preguntaras a tus amigos por tu peor cualidad, ¿qué crees que te dirían?',
'¿Dónde encuentras la paz?',
'¿Cuándo se has sentido realmente afortunado?',
'¿Prefieres ser famoso o rico?',
'¿Cuál has sido el mayor despilfarro de dinero en su vida?',
'Díganos las dos cosas más importantes sobre usted.',
'¿Cuándo fue la última vez que lloraste y por qué?',
'¿Alguna vez te has avergonzado de ti mismo por los demás? ¿Cuándo y por qué?',
'Si pudieras conseguir un billete de avión para ir a cualquier parte. ¿A dónde irías?',
'¿Cuál es su mayor deseo que nunca has contado a nadie?',
'¿Cuál es su primer recuerdo de la infancia?',
'¿Qué título le pondría al capítulo actual de su vida?',
'¿Qué debería saber la gente sobre usted que no sepa en este momento?',
'Su mayor temor.',
'¿Qué es lo que le cuesta admitir de sí mismo?',
'¿Qué crees que te hace mejor hombre?',
'¿Por cual aspectos crees que es mejor ser hombre?']


let cardDeck


const cardEl = document.getElementById("card_text")
const cardLeft = document.getElementById("card_left")
const newDeckBtn = document.getElementById("new_deck_btn")
const cardCont = document.getElementById("card_container")




function newDeck(){
    let deck = Array() 
    for (let i of questionArray){
        console.log(i)
        deck.push(i)
    }
    console.log("We have a new deck")

    cardDeck = deck
    cardEl.innerHTML = ""
    cardLeft.innerHTML = `Cards left  ${deck.length}`
}



newDeckBtn.addEventListener("click", function(){
    console.log("New deck requested")
    newDeck()
})



cardCont.addEventListener("click", function(){
    if(cardDeck.length){
    console.log("I am clicked")
    drawNewCard()
    }
    else {

    }
})


function getRandomNumber(){
    return Math.floor(Math.random()*cardDeck.length)
}


function getNewCard(){
    let randomIndex = getRandomNumber()
    let card = cardDeck[randomIndex]
    cardDeck.splice(randomIndex, 1)
    console.log(cardDeck.length)
    return card
}

function drawNewCard(){
    cardEl.innerHTML = getNewCard()
    cardLeft.innerHTML = `Cards left  ${cardDeck.length}`
}


