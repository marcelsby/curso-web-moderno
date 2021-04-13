class Lancamento {
    // Parâmetros que podem ser passados quando eu instanciar minha classe
    constructor(nome = "Genérico", valor = 0) {
        // Abaixo eu atribuo os valores recebidos por parâmetro para serem os atributos do meu objeto instanciado
        this.nome = nome
        this.valor = valor
    }            
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes =  mes
        this.ano = ano
        this.lancamentos = []
    }

    // Métodos da minha classe
    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0

        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })

        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 1300)
const contaDeLuz = new Lancamento('Luz', -220)
const contas = new CicloFinanceiro("Jan", "2020")

contas.addLancamentos(salario, contaDeLuz)

console.log(contas.sumario())