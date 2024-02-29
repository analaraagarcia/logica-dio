function rankeadas(vitorias, derrotas) {

    //Cálculo de rankeadas
    let saldoDeVitorias = vitorias - derrotas

    let nivel

    switch (true) {
        case saldoDeVitorias <= 10:
            nivel = "Ferro"
            break

        case saldoDeVitorias > 10 && saldoDeVitorias <=20:
            nivel = "Bronze"
            break

        case saldoDeVitorias > 20 && saldoDeVitorias <= 50:
            nivel = "Prata"
            break

        case saldoDeVitorias > 50 && saldoDeVitorias <= 80:
            nivel = "Ouro"
            break

        case saldoDeVitorias > 80 && saldoDeVitorias <= 90:
            nivel = "Diamante"
            break

        case saldoDeVitorias > 90 && saldoDeVitorias <= 100:
            nivel = "Lendário"
            break
            
        default:
            nivel = "Imortal" 
    }

    return `O herói tem um saldo de ${saldoDeVitorias} e está no nível ${nivel}!`
}


let vitorias = 42
let derrotas = 1


const resultado = rankeadas(vitorias, derrotas)
    console.log(resultado)
    