// Uma factory function retorna um novo objeto 
module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}
