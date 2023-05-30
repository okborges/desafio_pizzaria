function calcular_conta() {
    const valor_conta = document.getElementById('valor_conta').value;
    const valor_taxa = document.getElementById('valor_taxa').value;
    const pagantes = document.getElementById('pagantes').value;

    const valor_total =
        (parseInt(valor_conta) + parseInt(valor_taxa)) / parseInt(pagantes);

    document.getElementById('resultado').innerHTML = `R$${valor_total.toFixed(
        2
    )}`;
}

function formEvent() {
    const form = document.getElementById('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log('Formulário enviado');
        calcular_conta();
    });
}

formEvent();
