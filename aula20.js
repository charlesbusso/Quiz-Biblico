
let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
let progresso = document.querySelector('progresso')
let pontos = 0 // pontos para o placar
let placar = 0 // placar
let nivel = document.querySelector('h2')
let somAcerto = document.querySelector('#somAcerto')
let somErro = document.querySelector('#somErro')
let somAplausos = document.querySelector('#somAplausos')
let totalChance = document.querySelector('#totalChance')
let chanceUm = document.getElementById('um')
let chanceDois = document.getElementById('dois')
let chanceTres = document.getElementById('tres')
let vida = 0

// pergunta

let numQuestao = document.querySelector('#numQuestao')
let pergunta = document.querySelector('#pergunta')

//alternativas

let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')
//article com a class questao
let articleQuestoes = document.querySelector('.questoes')
let alternativas = document.querySelector('#alternativas')


const q0 = {
    numQuestao : 0,
    pergunta : "pergunta",
    alternativaA : "alternativa A",
    alternativaB : "alternativa B",
    alternativaC : "alternativa C",
    alternativaD : "alternativa D",
    correta : "0",

}
const q1 = {
    numQuestao : 1,
    pergunta : "Quem matou Abel ?",
    alternativaA : "Sansão",
    alternativaB : "Jacó",
    alternativaC : "Caim",
    alternativaD : "Moisés",
    correta : "Caim",

}

    const q2 = {
        numQuestao : 2,
        pergunta : "Como Jesus foi encontrado ?",
        alternativaA : "Na cama",
        alternativaB : "Manjedoura",
        alternativaC : "Berço",
        alternativaD : "No mato",
        correta : "Manjedoura",
}

const q3 = {
    numQuestao : 3,
    pergunta : "Qual personagem biblico viveu mais ?",
    alternativaA : "Jarede",
    alternativaB : "Matusalém",
    alternativaC : "Noé",
    alternativaD : "Adão",
    correta : "Matusalém",
}
const q4 = {
    numQuestao : 4,
    pergunta : "Quantos anos viveu Sara ?",
    alternativaA : "127",
    alternativaB : "125",
    alternativaC : "132",
    alternativaD : "117",
    correta : "127",
}

const q5 = {
    numQuestao : 5,
    pergunta : "Deus disse a quem : Anda na minha presença e sê perfeito", 
    alternativaA : "Adão",
    alternativaB : "Jacó",
    alternativaC : "Abrão",
    alternativaD : "moisés",
    correta : "Abrão",
} 
const q6 = {
    numQuestao : 6,
    pergunta : "Quantos anos viveu Matusalém ?", 
    alternativaA : "962",
    alternativaB : "996",
    alternativaC : "969",
    alternativaD : "992",
    correta : "969",
}
const q7 = {
    numQuestao : 7,
    pergunta : "Quantos anos tinha José quando foi vendido pelos irmãos ?", 
    alternativaA : "22",
    alternativaB : "15",
    alternativaC : "17",
    alternativaD : "19",
    correta : "17",
}
const q8 = {
    numQuestao : 8,
    pergunta : "José sonhou que o sol, a lua e 11 estrelas se uncurvavam perante ele. O que isso quer dizer ?", 
    alternativaA : "Que ele será um deus",
    alternativaB : "Que o pai, mãe e seus irmaos se encurvariam a ele",
    alternativaC : "Que ele é um anjo de Deus",
    alternativaD : "Ele inventou o sonho pra provocar os irmãos",
    correta : "Que o pai, mãe e seus irmaos se encurvariam a ele",
}
const q9 = {
    numQuestao : 9,
    pergunta : "Quem era Davi ?", 
    alternativaA : "Rei de Israel e Judá",
    alternativaB : "Pastor da Igreja",
    alternativaC : "Soldado de Israel",
    alternativaD : "Profeta",
    correta : "Rei de Israel e Judá",
}
const q10 = {
    numQuestao : 10,
    pergunta : " Qual o nome do segundo rio que saia do Éden pra regar o jardim ?", 
    alternativaA : "Hidéquel",
    alternativaB : "Eufrates",
    alternativaC : "Pisom",
    alternativaD : "Giom",
    correta : "Giom",
}
const q11 = {
    numQuestao : 11,
    pergunta : "Davi cometeu um adultério e depois se casou com a moça, quem era ela ?", 
    alternativaA : "Miriã",
    alternativaB : "Jeosebede",
    alternativaC : "Rebeca",
    alternativaD : "Bateseba",
    correta : "Bateseba",
}
const q12 = {
    numQuestao : 12,
    pergunta : "Qual filho de Davi reinou após sua morte ?", 
    alternativaA : "Salomão",
    alternativaB : "Jeroboão",
    alternativaC : "Roboão",
    alternativaD : "Samuel",
    correta : "Salomão",
}
const q13 = {
    numQuestao : 13,
    pergunta : "Quem matou o Gigante que tinha seis dedos em cada mão e seis dedos em cada pé ?", 
    alternativaA : "Samuel",
    alternativaB : "Davi",
    alternativaC : "Jeremias",
    alternativaD : "Jonatas filho de Siméia",
    correta : "Jonatas filho de Siméia",
}
const q14 = {
    numQuestao : 14,
    pergunta : " Quem era o amigo de Davi que disse: Onde você for eu também vou ?", 
    alternativaA : "Samuel",
    alternativaB : "Itai",
    alternativaC : "Jeremias",
    alternativaD : "Jonatas",
    correta : "Itai",
}
const q15 = {
    numQuestao : 15,
    pergunta : "O que Salomão pediu a Deus em um sonho ?", 
    alternativaA : "Riqueza",
    alternativaB : "Sabedoria",
    alternativaC : "Vingança a seus inimigos",
    alternativaD : "Poder",
    correta : "Sabedoria",
}
const q16 = {
    numQuestao : 16,
    pergunta : "Segundo Oséias, o povo é destruido por causa do que ?", 
    alternativaA : "Só pensam em vingança",
    alternativaB : "Não sabem se defender",
    alternativaC : "São fracos e oprimidos",
    alternativaD : "Por falta de conhecimento na palavra de Deus",
    correta : "Por falta de conhecimento na palavra de Deus",
}
const q17 = {
    numQuestao : 17,
    pergunta : " Quem é o Avô de Davi?", 
    alternativaA : "Obede",
    alternativaB  : "Boaz",
    alternativaC : "Jessé ",
    alternativaD : "Elias",
    correta : "Obede",
}
const q18 = {
    numQuestao : 18,
    pergunta : " Quem eram os filhos de Noemi?", 
    alternativaA : "José e Judá",
    alternativaB : "Jacó e Esaúl",
    alternativaC : "Malom e Quiliom",
    alternativaD : "Elimeleque e Adrameleque ",
    correta : "Malom e Quiliom",
}
const q19 = {
    numQuestao : 19,
    pergunta : "Quem era a sogra de Rute", 
    alternativaA : "Noeli",
    alternativaB : "Norma",
    alternativaC : "Raquel",
    alternativaD : "Noemi",
    correta : "Noemi",
}
const q20 = {
    numQuestao : 20,
    pergunta : "Quem fez um voto de tolo na Bíblia", 
    alternativaA : "Adorão",
    alternativaB : "João Batista",
    alternativaC : "Gileade",
    alternativaD : "Jefté",
    correta : "Jefté",
}
const q21 = {
    numQuestao : 21,
    pergunta : "Quais são os livros de Salomão na Bíblia", 
    alternativaA : "Eclesiastes, Provérbios e Samuel",
    alternativaB : "Jeremias, Provérbios e Cântico dos Cânticos",
    alternativaC : "Lamentações, Salmos e Provérbios",
    alternativaD : "Eclesiastes, Provérbios e Cântico dos Cânticos",
    correta : "Eclesiastes, Provérbios e Cântico dos Cânticos",
}
const q22 = {
    numQuestao : 22,
    pergunta : "Complete a frase de 1° Coríntios cap.15 ! Onde está, ó morte, o teu aguilhão ? Onde está, ó inferno,...", 
    alternativaA : "A tua espada",
    alternativaB : "A tua flecha",
    alternativaC : "A tua vitória",
    alternativaD : "A tua derrota",
    correta : "A tua vitória",
}
const q23 = {
    numQuestao : 23,
    pergunta : "Qual o maior versículo da Bíblia ?", 
    alternativaA : "Ester cap. 8 vers. 9",
    alternativaB : "Salmos cap. 17 vers. 2",
    alternativaC : "Eclesiastes cap. 9 vers. 11",
    alternativaD : "Jeremias cap. 27 vers. 18",
    correta : "Ester cap. 8 vers. 9",
}
const q24 = {
    numQuestao : 24,
    pergunta : "Qual foi o 1° fundamento do muro da Nova Jerusalém ?", 
    alternativaA : "Ametista",
    alternativaB : "Sardônica",
    alternativaC : "Berilo",
    alternativaD : "Jaspe",
    correta : "Jaspe",
}
const q25 = {
    numQuestao : 25,
    pergunta : "Quando o 3° Anjo derramou a sua taça nos rios e nas fontes, as águas se tornaram em que ? ", 
    alternativaA : "Sangue",
    alternativaB : "Lodo",
    alternativaC : "Em barro",
    alternativaD : "Amargas",
    correta : "Sangue",
}
const q26 = {
    numQuestao : 26,
    pergunta : "Em Apocalipse cap. 1 vers. 20 diz que os sete castiçais que viste, são o que ?", 
    alternativaA : "A setes Chaves de Davi",
    alternativaB : "sete Anjos",
    alternativaC : "As setes Igrejas",
    alternativaD : "As setes Cidades",
    correta : "As setes Igrejas",
}
const q27 = {
    numQuestao : 27,
    pergunta : "Do que fala o capítulo 13 de 1° Coríntios", 
    alternativaA : "Da fé",
    alternativaB : "Da Caridade",
    alternativaC : "Da esperança",
    alternativaD : "Da morte",
    correta : "Da Caridade",
}
const q28 = {
    numQuestao : 28,
    pergunta : "Uma mão misteriosa apareceu diante de um Rei e seus convidados e escrevia defronte de um castiçal. Que Rei era ? ", 
    alternativaA : "Belsazar",
    alternativaB : "Nabucodonosor",
    alternativaC : "Dario",
    alternativaD :  "Davi",
    correta : "Belsazar",
}
const q29 = {
    numQuestao : 29,
    pergunta : "Na armadura de Deus, o que simboliza o escudo ?", 
    alternativaA : "A oração",
    alternativaB : "A verdade",
    alternativaC : "A fé",
    alternativaD : "A paz",
    correta : "A fé",
}
const q30 = {
    numQuestao : 30,
    pergunta : "Em Apocalipse, o sexto anjo derramou a sua taça em qual rio ?", 
    alternativaA : "Rio Jordão",
    alternativaB : "Rio Hidéquel",
    alternativaC : "Rio Eufrates",
    alternativaD : "Rio Pisom",
    correta : "Rio Eufrates",
}
const q31 = {
    numQuestao : 31,
    pergunta : "Arão tomou os pendentes de ouro do povo e com um burril ele formou qual animal ?", 
    alternativaA : "Leão",
    alternativaB : "Bezerro",
    alternativaC : "Cordeiro",
    alternativaD : "Urso",
    correta : "Bezerro",
}
const q32 = {
    numQuestao : 32,
    pergunta : "Quais livros terminam com Interrogação", 
    alternativaA : "Lamentações, Amós, Jonas",
    alternativaB : "Lamentações, Jonas, Naum",
    alternativaC : "Jonas, Naum, Provérbios",
    alternativaD : "Naum, provérbios, Amós",
    correta : "Lamentações, Jonas, Naum",
}
const q33 = {
    numQuestao : 33,
    pergunta : "Deus deu a quem sabedoria e inteligência para saber fazer toda a obra a serviço do santuario ?", 
    alternativaA : "Bezalel, Aisamaque",
    alternativaB : "Bezalel, Aoliabe",
    alternativaC : "Aisamaque, Aoliabe",
    alternativaD : "Uri, Bezalel ",
    correta : "Bezalel, Aoliabe",
}
const q34 = {
    numQuestao : 34,
    pergunta : "O que diz em Malaquias cap. 3 vers. 6 ?", 
    alternativaA : "Quem suportará o dia da sua vinda ?",
    alternativaB : "Meu concerto com ele foi de vida e de paz ",
    alternativaC : "Não temos nós todos um mesmo Pai",
    alternativaD : "Porque eu, o Senhor, não mudo por isso não sois consumido ",
    correta : "Porque eu, o Senhor, não mudo por isso não sois consumido ",
}
const q35 = {
    numQuestao : 35,
    pergunta : "Quem foi escolhido para fazer parte do ministério e apostolado no lugar de Judas ?", 
    alternativaA : "Matias",
    alternativaB : "Barsabás",
    alternativaC : "Parmenas",
    alternativaD : "Nicolau",
    correta : "Matias",
}
const q36 = {
    numQuestao : 36,
    pergunta : "Onde está escrito: Nenhuma condenação há para os que estão em Cristo, que não anda segundo a carne, mas segundo o espirito ?", 
    alternativaA : "Romanos cap. 12",
    alternativaB : "Romanos cap. 5",
    alternativaC : "Romanos cap. 8",
    alternativaD : "Romanos cap. 2",
    correta : "Romanos cap. 8",
}
const q37 = {
    numQuestao : 37,
    pergunta : "Qual o maior capítulo da Bíblia ?", 
    alternativaA : "Salmos 18",
    alternativaB : "Salmos 19",
    alternativaC : "Salmos 118",
    alternativaD : "Salmos 119",
    correta : "Salmos 119",
}
const q38 = {
    numQuestao : 38,
    pergunta : "Quem era a Avó de Timóteo ?", 
    alternativaA : "Loíde",
    alternativaB : "Eunice",
    alternativaC : "Salomé",
    alternativaD : "Noemi",
    correta : "Loíde",
}
const q39 = {
    numQuestao : 39,
    pergunta : "Em apocalipse, diz que Jesus aparece a João em uma ilha, Qual é essa ilha ? ", 
    alternativaA : "Tiatira",
    alternativaB : "das Caveiras",
    alternativaC : "Patmos",
    alternativaD : "Éfeso",
    correta : "Patmos",
}
const q40 = {
    numQuestao : 40,
    pergunta : "Em apocalipse, quantos anjos proclamaram os juizos de Deus ?", 
    alternativaA : "3 Anjos",
    alternativaB : "7 Anjos",
    alternativaC : "12 Anjos",
    alternativaD : "24 Anjos",
    correta : "3 Anjos",
}
const q41 = {
    numQuestao : 41,
    pergunta : "Em apocalipse, Um rio puro da água da vida, claro como um cristal procedia de onde ?", 
    alternativaA : "Jardim do Éden",
    alternativaB : "Monte da Oliveiras",
    alternativaC : "Do trono de Deus e do Cordeiro",
    alternativaD : "Do Santuário",
    correta : "Do trono de Deus e do Cordeiro",
}
const q42 = {
    numQuestao : 42,
    pergunta : "Qual a cor do cavalo que saiu quando foi aberto o segundo selo ?", 
    alternativaA : "Vermelho",
    alternativaB : "Branco",
    alternativaC : "Preto",
    alternativaD : "Amarelo",
    correta : "Vermelho",
}
const q43 = {
    numQuestao : 43,
    pergunta : "Segundo o calendário Biblico, o mês de Elul representa qual mês", 
    alternativaA : "Agosto",
    alternativaB : "Março",
    alternativaC : "Novembro",
    alternativaD : "Setembro",
    correta : "Setembro",
}
const q44 = {
    numQuestao : 44,
    pergunta : "A jumenta ao ver o Anjo do Senhor, apertou contra a parede o pé de quem ?", 
    alternativaA : "Balaão filho de Peor",
    alternativaB : "Balaão filho de Beor",
    alternativaC : "Balaão filho Zipor",
    alternativaD : "Balaão filho de Eleazar",
    correta : "Balaão filho de Beor",
}
const q45 = {
    numQuestao : 45,
    pergunta : "Qual o nome que Faraó deu a josé ?", 
    alternativaA : "Safenate-Paneía",
    alternativaB : "Asenate-Paneía",
    alternativaC : "Tatenate-Paneía",
    alternativaD : "Zafenate-Paneía",
    correta : "Zafenate-Paneía",
}
const q46 = {
    numQuestao : 46,
    pergunta : "Quantos côvados de comprimento teve a Arca de Noé ?", 
    alternativaA : "300 Côvados",
    alternativaB : "200 Côvados",
    alternativaC : "150 Côvados",
    alternativaD : "100 Côvados",
    correta : "300 Côvados",
}
const q47 = {
    numQuestao : 47,
    pergunta : "Zedequias era filho de Quem ?", 
    alternativaA : "Micaías",
    alternativaB : "Josafá",
    alternativaC : "Inlá",
    alternativaD : "Quenaana",
    correta : "Quenaana",
}
const q48 = {
    numQuestao : 48,
    pergunta : "Que recusou vender a vinha a Acabe ?", 
    alternativaA : "Os filhos de belial",
    alternativaB : "Nabote",
    alternativaC : "Nabal",
    alternativaD : "Nebaiote",
    correta : "Nabote",
}
const q49 = {
    numQuestao : 49,
    pergunta : "Qual o nome do primeiro filho que Oséias teve de Gomer, filha de Diblaim ?", 
    alternativaA : "Jesreel",
    alternativaB : "Jezreel",
    alternativaC : "Jezabel",
    alternativaD : "Jezabeel",
    correta : "Jezreel",
}
const q50 = {
    numQuestao : 50,
    pergunta : "Qual o nome do segundo filho de Isaías ?", 
    alternativaA : "Sear-Jasube",
    alternativaB : "Maer Salal-Has-Baz",
    alternativaC : "Jigleal",
    alternativaD : "Palti",
    correta : "Maer Salal-Has-Baz",
}


//constante com um array de objetos com todas as questões
const questoes = [q0, q1, q2 , q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20, q21, q22, q23, q24, q25, q26, q27, q28, q29, q30, q31, q32, q33, q34, q35, q36, q37, q38, q39, q40, q41, q42, q43, q44, q45, q46, q47, q48, q49, q50]

let numero = document.querySelector('#numero')
let total = document.querySelector('#total')
numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
total.textContent = totalDeQuestoes

//montar a 1a questão completa para iniciar o quiz

numQuestao.textContent = q1.numQuestao
pergunta.textContent = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD

//configurar o value da 1a questão completa

a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')

//PARA MONTAR AS PRÓXIMAS QUESTÕES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    d.setAttribute('value', nQuestao+'D')
}
/*alternativas.addEventListener('dblclick', () => {
    pontos -= 10
    if(numQuestao.value == 30 && pontos == 310){
        pontos = 300
    }

})*/

function bloquearAlternativas() {
  a.classList.add('bloqueado')
  b.classList.add('bloqueado')
  c.classList.add('bloqueado')
  d.classList.add('bloqueado')
}


function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
    d.classList.remove('bloqueado')
}
function piscarNoAcerto(){
    articleQuestoes.classList.remove('errou')
    articleQuestoes.classList.add('acertou')

}
function piscarNoErro(){
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.add('errou')
}
function tirarPiscar(){
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.remove('errou')
}

  /* function verificarErro() {
    let numeroDaQuestao = nQuestao.value
    let erro = questoes[numeroDaQuestao].alternativas
    

    if (respostaEscolhida != correta){
       
        chanceUm.innerHTML = '😢'
        piscarNoErro()
        somErro.play()
        titulo.textContent = "Que pena, você errou mais que três vezes 😢 !!"
        bloquearAlternativas();
        fimDoJogo();
    
}if((respostaEscolhida != correta)&&(chanceUm === 1)){
    chanceDois.innerHTML = '😢'
}
if(totalChance == 2){
    chanceTres = '😢'
}


}*/


function verificarSeAcertou(nQuestao, resposta) {
    let numeroDaQuestao = nQuestao.value

    let respostaEscolhida = resposta.textContent
    let certa = questoes[numeroDaQuestao].correta
    if(respostaEscolhida == certa) {
        piscarNoAcerto()
        somAcerto.play()
        pontos += 10
        titulo.textContent = "Parabéns você acertou 😊 !!"
       if(nQuestao.value == 1 && pontos == 20){
            pontos = 10
        
        
       }if((respostaEscolhida != certa)&&(vida == 0)){
        vida = 1
        totalChance.innerHTML = vida
        chanceUm.innerHTML = '😢'
        piscarNoErro()
        somErro.play()
        titulo.textContent = "Que pena, você errou 😢 !!"
        
         }if((respostaEscolhida != certa)&&(vida == 1)){
            vida = 2
            piscarNoErro()
            somErro.play()
            totalChance.innerHTML = vida
            chanceDois.innerHTML = '😢'
            titulo.textContent = "Que pena, você errou 😢 !!"
         }if((respostaEscolhida != certa)&&(vida == 2)){
            vida = 3
            totalChance.innerHTML = vida
            chanceTres.innerHTML = 'd'água
       }if((respostaEscolhida != certa)&&(vida == 3)){
            vida = 4
            título.textContent = ' Que pena, você errou mais que três vezes '
            fimDoJogo()
       }
           




        
         setTimeout(() => {
            tirarPiscar()
         }, 800);
      
         if ((numeroDaQuestao > 0)&&(numeroDaQuestao < 9)){
            nivel.textContent = 'Nivel 1';
         }else if((numeroDaQuestao > 9)&&(numeroDaQuestao < 19)){
            nivel.textContent = 'Nível 2';
         }else if((numeroDaQuestao > 19)&&(numeroDaQuestao < 31)){
            nivel.textContent = 'Nível 3';
         }else if((numeroDaQuestao > 29)&&(numeroDaQuestao < 41)){
            nivel.textContent ='Nível 4';
         }else if((numeroDaQuestao > 39)&&(numeroDaQuestao < 51)){
            nivel.textContent = 'Nível 5';
         }else (nivel);
       //atualizar  o placar

       placar = pontos
       instrucoes.textContent = "Pontos" + placar
       //bloquear a escolha de opcoes
       bloquearAlternativas()

       setTimeout(function() {
        proxima = numeroDaQuestao+1
        
        if (proxima > totalDeQuestoes) {
            fimDoJogo()
            somAplausos.play()
        }else {
            proximaQuestao(proxima)
            titulo.textContent = ''
        }

       }, 1650);

       desbloquearAlternativas()
}
 


function fimDoJogo() {
    instrucoes.textContent = "fim do Jogo !!"
    numQuestao.textContent = ""

    let pont = ''
    pontos == 0 ? pont = 'ponto' : pont = 'pontos'

    instrucoes.textContent = " Parabéns ,Você conseguiu " + pontos + " " + pont
    aviso.textContent = "você conseguiu " + pontos + " " + pont

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""
    d.textContent = ""

    
    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')
    d.setAttribute('value', '0')

    

    if(pontos < 80){
        titulo.textContent = "Precisa estudar mais, Você não sabe muito sobre a Bíblia 😢!"
    }else if((pontos > 80)&&(pontos < 150)){
        titulo.textContent = "Você acertou algumas questões, mais tem que estudar mais! 😢"
    }else if((pontos > 160)&&(pontos < 290)){
        titulo.textContent = "Parabéns, Você sabe bastante da Bíblia 😊"
    }else if((pontos > 290)&&(pontos < 320)){ 
    titulo.textContent = "Parabéns, Você acertou todas as perguntas e sabe muito, mais muito sobre a Bíblia 😊😊😊😊😊"
    }else(titulo.textContent = '')

    //ocultar o article da questao

    articleQuestoes.style.display = 'none'
    setTimeout(function() {
        pontos = 0 
        location.reload();

    }, 6000)
}



















