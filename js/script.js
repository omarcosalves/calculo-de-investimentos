const valor = document.querySelector('#value')
const taxa = document.querySelector('#taxa')
const periodo = document.querySelector('#periodo')
const rendimento = document.querySelector('#rendimento')
const button = document.querySelector('#btnCalcular')

button.addEventListener('click', ()=>{
    event.preventDefault()
    let tx = (tx.value / 100)
    let resultado = (valor.value * taxa.value * periodo.value)
    if(valor.value!==''&& tx.value!==''&&periodo.value!==''){
        rendimento.value = (resultado.toFixed(2) + valor.value)
    }

})