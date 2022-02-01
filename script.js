const botao = document.getElementById("Converter")
const SelecionarMoedas = document.getElementById("TipoDeMoeda")
const BTC = 231000
const ETH = 17540
const USD = 5.27
const EUR = 5.97

const ConverterMoedas = () => {
    
    const InputReal = Number(document.getElementById("ValorReal").value)
    const ValorDoReal = document.getElementById("RealValor")
    const ValorCripto = document.getElementById("CriptoValor")

    ValorDoReal.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
    }).format(InputReal)

    if (SelecionarMoedas.value === "₿ Bitcoin"){
        ValorCripto.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(InputReal / BTC);
    }
    if (SelecionarMoedas.value === "Ethereum"){
        ValorCripto.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "ETH"
        }).format(InputReal / ETH);
        
    }

    if (SelecionarMoedas.value === "$ Dollar"){
        ValorCripto.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(InputReal / USD);
        
    }

    if (SelecionarMoedas.value === "€ Euro"){
        ValorCripto.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(InputReal / EUR);
        
    }

}

    const AlterarMoedas = function() {

        let Cripto = document.getElementById("BTCripto")
        let CriptoImage = document.getElementById("BTCImage")

    if (SelecionarMoedas.value === "₿ Bitcoin"){
            CriptoImage.src = "./images/BTC.png",
            Cripto.innerHTML = "BitCoin"
    }

    if (SelecionarMoedas.value === "Ethereum"){
        CriptoImage.src = "./images/ETC.jpeg",
        Cripto.innerHTML = "Ethereum"
    }

    if (SelecionarMoedas.value === "$ Dollar"){
        CriptoImage.src = "images/estados-unidos (1) 1.png",
        Cripto.innerHTML = "$ Dollar"
    }

    if (SelecionarMoedas.value === "€ Euro"){
        CriptoImage.src = "images/Design sem nome 1.png",
        Cripto.innerHTML = "€ Euro"
    }

}
    botao.addEventListener("click", ConverterMoedas);
 SelecionarMoedas.addEventListener("change", AlterarMoedas);
