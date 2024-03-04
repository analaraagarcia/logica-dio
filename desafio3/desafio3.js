class heroiNome {

    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar() {
        let ataque

        switch (this.tipo) {
            case 'mago':
                ataque = "Magia"
                break
            
            case 'guerreiro':
                ataque = "Espada"
                break
            
            case 'monge':
                ataque = "Artes Marciais"
                break
            
            case 'ninja':
                ataque = "Shuriken"
                break

            default:
                ataque = "ataque desconhecido"
        }
        
        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}

const heroi = new heroiNome("Ana", 23, 'monge')

heroi.atacar()
