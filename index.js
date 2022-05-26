const questionArrayES = [ 'La mayor lección que has aprendido en tu vida.',
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

const questionArrayHU = [ 'A legnagyobb lecke amit életedben megtanultál.',
'Mi a legviccesebb emléked?',
'Mi az amit soha nem tudtál megbocsátani?',
'Egy mondat amivel a legjobban megbántottak életed során?',
'Melyik emlékedet törölnéd egy életre?',
'Kinek tudsz leginkább megnyílni?',
'Kettő embert vihetsz magaddal egy lakatlan szigetre. Kik azok?',
'Milyen számodra a tökéletes vasárnap?',
'Ha most lennél 18 éves, csinálnál bármit máshogy?',
'Egy tárgy, ami nélkül nem tudnál élni?',
'Szerinted mi miatt lehet jobb férfinak/nőnek lenni?',
'Valami, amit másért tettél, és a mai napig jóérzéssel tölt el?',
'A legjobb tulajdonság egy emberben.',
'Kinek kellene köszönetet mondanod az életedben és miért?',
'Egy szóval írd le ahogy ebben a pillanatban érzed magad.',
'Mi az a munka amit soha nem csinálnál, akármennyi pénzt ajánlanának érte?',
'Ha utaznál az időben, hova mennél?',
'Ha csak egyetlenegy emléket tarthatnál meg, mi lenne az?',
'Ha 24 óra lenne hátra az életedből mivel töltenéd?',
'Életed legrosszabb napja.',
'Mit fogsz máshogy csinálni mint a szüleid?',
'Mi okozta a legnagyobb bánatot az életedben?',
'Ha egy napra újra kisgyerek lehetnél, mit élveznél benne a legjobban?',
'Melyik volt a legérdekesebb hely, ahol életedben jártál?',
'Ha nyernél a lottön, folytatnád a munkát amit csinálsz?',
'Milyennek képzeled el a tökéletes életet?',
'Mi volt a legkellemetlenebb dolog, amit mások előtt csináltál?',
'Ha leülhetnél beszélgetni bárkivel, élő vagy holttal, ki lenne az?',
'Valami amit még soha nem mondtál el senkinek?',
'Egy napra kinek a bőrébe bújnál?',
'Mi az amit elkezdtél, de soha nem fejeztél be és miért?',
'Mi lehet a legnehezebb a veled valő közös életben?',
'Mi az amitől félsz is, de ki is próbálnád?',
'Mi hiányzik az életedből?',
'Szerinted mi az első benyomása rólad az embereknek?',
'Életed legboldogabb napja?',
'Szeretnéd has gyerekeid rád hasonlítanának? has igen, miben?',
'Szerinted mi miatt lehet jobb nőnek lenni?',
'Mi az amire sosem sajnálnád a pénzt?',
'Ha egyetlen egy dolgot változtathatnál meg a múltadban mi lenne az?',
'Ha király lehetnél, mi lenne az első dolog amin változtatnál az országodban?',
'Mi az a hazugság amit a legtöbbször mondtál életed során?',
'Egy kaland amit nagyon irigyeltél egyszer valakitől?',
'Mi az, amire a kelleténél jóval több időt szánsz?',
'A nap amit újraélnél.',
'Ha lehetne egy szuperképességed, mit választanál?',
'Ha az egész világ hallana egy mondat erejéig, mit mondanál?',
'Mire vagy a legbüszkébb?',
'Mi okozta a legnagyobb örömet az életedben?',
'A legidegesítőbb tulajdonságod.',
'Ki az, akit nem sajnálnál, has soha többé nem beszélnétek?',
'Mit kérdeznél egy jóstól?',
'Mire vam a legnagyobb szükséged jelenleg?',
'Ha bérmelyik már nem élő rokonodat visszahozhatnád a sírból, ki lenne az?',
'Kinek az életét tartod irigylésre méltónak az ismerőseid közül?',
'Min nevettél úgy utoljára, hogy a könnyed is folyt?',
'A legrosszabb utlajdonság valakiben.',
'Az érzés, ami a leggyakrabban a hatalmába kerít.',
'Ha el kellene költöznöd egy másik orszégba, hova mennél?',
'Kedvenc idézeted.',
'Ki az akinek minden esetben adsz a véleményére?',
'Milyen álmodat adtad fel?',
'A legfontosabb lecke amit a szüleidtől tanultál?',
'Melyik filmnek vagy könyvnek lennél szívesen a főszereplője?',
'Hol szeretnél 10 év múlva lenni?',
'Ha megkérdeznék a barátaidat, a legrosszabb tulajdonságodról szerinted mit válaszolnának?',
'Hol találsz békére?',
'Mikor érezted magad igazán szerencsésnek?',
'Inkább híres vagy gazdag lennél?',
'Mi volt a legnagyobb pénzkidobás életed során?',
'Mond el a kettő legfontosabb modnatot magadról.',
'Mikor sírtál utoljára, és miért?',
'Szégyenlted magad valaha mások helyett? Mikor és miért?',
'Ha kapnál egy repülőjegyet amivel bárhova mehetnél. Hova mennél?',
'Mi a legnagyobb vágyad, amiről még senkinek sem meséltél?',
'Mi a legkorábbi gyerekkori emléked?',
'Milyen címet adnál a jelenlegi fejezetnek az életedben?',
'Mit kellene tudnia rőlad az embereknek amit jelenleg nem tudnak?',
'A legnagyobb félelmed.',
'Mi az smit nehezen ismersz be magaddal kapcsolatban.',
'Szerinted mi miatt lehet jobb férfinak lenni?' ]


let cardDeck


const cardEl = document.getElementById("card_text")
const cardLeft = document.getElementById("card_left")
const newDeckBtn = document.getElementById("new_deck_btn")
const cardCont = document.getElementById("card_container")


function getLanguage(){
    let languageInput = document.getElementById("languageOption").value;
    document.getElementById("languageOption").style.display = "none"
    return languageInput
}

function newDeck(){
    let deck = Array() 

    if (getLanguage()==="spanish"){
        console.log("you chose spanish")

    for (let i of questionArrayES){
        console.log(i)
        deck.push(i)
    }
    console.log("We have a new deck")

    cardDeck = deck
    cardEl.innerHTML = ""
    cardLeft.innerHTML = `Cards left  ${deck.length}`
}

else {
    for (let i of questionArrayHU){
        console.log(i)
        deck.push(i)
    }
    console.log("We have a new deck")

    cardDeck = deck
    cardEl.innerHTML = ""
    cardLeft.innerHTML = `Cards left  ${deck.length}`
}

languageOption
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


