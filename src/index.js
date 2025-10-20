import GeraCPF from './modules/GeraCPF';
import ValidaCPF from './modules/ValidaCPF';

(function () {
    const gerador = new GeraCPF();
    const cpfGerado = document.querySelector('.cpf-gerado');
    const botaoGerar = document.querySelector('.container button');
    const botaoCopiar = document.querySelector('.botao-copiar');
    const botaoValidar = document.querySelector('.botao-validar');
    const cpfParaValidar = document.querySelector('#cpf');
    const resultadoValidacao = document.querySelector('.cpf-validado');
    const cpfRegex = /^(\d{11}|\d{3}\.\d{3}\.\d{3}-\d{2})$/;

    botaoGerar.addEventListener('click', () => {
        mostrarCpf();
    })

    botaoCopiar.addEventListener('click', () => {
        copiarTexto();
    });

    botaoValidar.addEventListener('click', () => {
        resultadoValidacao.innerHTML = "";
        if(!cpfRegex.test(cpfParaValidar.value)) return alert('Preencha o campo corretamente');

        const validador = new ValidaCPF(cpfParaValidar.value);

        if(validador.valida()){
            resultadoValidacao.innerHTML = "CPF Válido";
            resultadoValidacao.setAttribute('valid', 'true');
        } else {
            resultadoValidacao.innerHTML =  "CPF Inválido";
            resultadoValidacao.setAttribute('valid', 'false');
        }
    });

    document.addEventListener('keypress', (e) => {
        if (e.keyCode === 13) {
            mostrarCpf();
        }
    });

    function mostrarCpf() {
        setTimeout(() => {
            cpfGerado.innerHTML = gerador.geraNovoCPF();
            botaoCopiar.removeAttribute('hidden');
            alert('Cpf gerado!');
        }, 500);
        
    }

    async function copiarTexto(){
        try{
            await navigator.clipboard.writeText(cpfGerado.innerText);
            alert('Texto copiado para Área de Transferência!');
        } catch (e){
            alert(`Falha ao copiar texto: ${e}`);
        }

    }

})();