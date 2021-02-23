class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = "Professor") {
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super("Silva", "Engenheiro")
    }
}

const filho = new Filho
const pai = new Pai
const avo = new Avo

pai.sobrenome = filho.sobrenome

console.log("Debug breakpoint!")