//------------01------------//

function welcome(){
    console.log("Olá")
    console.log("Sejá bem-vindo")
}
welcome()

//-----------02-----------//

function yourName(nome){
    console.log(`Nome do Usuário: ${nome}`)
}
yourName("Igor")

//----------03----------//

function profile (name, yearOld, music){ 
    console.log(`Usuário: ${name}`)
    console.log(`Idade:${yearOld}`)
    console.log(`Música Favorita: ${music}`)
}
profile("Al3ncar", "17 anos", "Tim maia")

//---------04----------//

function leisure(music, film){
    console.log(`Recomendações`)
    console.log(`Venha ouvir essa música ${music}`)
    console.log(`Veja já o novo filme: ${film}`)
}
leisure("Racionais mc's", "A vida de um programador do VainaWeb")

//---------05----------//

function soma(x, y){
    return x * y
}
console.log(soma(3, 5))