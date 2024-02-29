let nomeHeroi = "Ana"
let experiencia = 9000

let nivelHeroi

switch (true) {
    case (experiencia <= 1000):
        nivelHeroi = "Ferro"
        break
    case (experiencia >= 1001 && experiencia <= 2000):
        nivelHeroi = "Bronze"
        break
    case (experiencia >= 2001 && experiencia <= 5000):
        nivelHeroi = "Prata"
        break
    case (experiencia >= 5001 && experiencia <= 7000):
        nivelHeroi = "Ouro"
        break
    case (experiencia >= 7001 && experiencia <= 8000):
        nivelHeroi = "Platina"
        break
    case (experiencia >= 8001 && experiencia <= 9000):
        nivelHeroi = "Ascendente"
        break
    case (experiencia >= 9001 && experiencia <= 10000):
        nivelHeroi = "Imortal"
        break
    case (experiencia >= 10001):
        nivelHeroi = "Radiante"
        break
}

console.log("O Heroi de nome " + nomeHeroi + " está no nível " + nivelHeroi)