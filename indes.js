
function Pagamento(valorTotal, parcelas) {
    this.valorTotal = valorTotal;
    this.parcelas = parcelas;
 
    this.valorParcelas = function() {
        return this.valorTotal / parcelas;
    }
}

const valorTotal = 5000;
const numParcelas = 5;
 
const pagamento = new Pagamento(valorTotal, numParcelas);
console.log("pagamento")
console.log(pagamento)
console.log(pagamento.valorParcelas());