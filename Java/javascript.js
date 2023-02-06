function obterPrecos()
{
    document.getElementById("precoBitcoin").innerHTML = fazerRequisicao("BTC");
    document.getElementById("precoLitecoin").innerHTML = fazerRequisicao("LTC");
    document.getElementById("precoEthereum").innerHTML = fazerRequisicao("ETH");
    document.getElementById("precoBitcoincash").innerHTML = fazerRequisicao("BCH");
    document.getElementById("precoDogecoin").innerHTML = fazerRequisicao("DOGE");
    document.getElementById("precoShiba").innerHTML = fazerRequisicao("SHIB");
}

function fazerRequisicao(coinParam){
    
    var coin = coinParam != null ? coinParam : document.getElementById('coin').value; 
    //var coin;
    //if(coinParam != null)
    //coin = coinParam
    //else coin = coinParam : document.getElementById('coin').value;

    var xhttp = new XMLHttpRequest();
    
    xhttp.open("GET", "https://www.mercadobitcoin.net/api/" + coin + "/ticker", false);

    xhttp.send();

    const obj = JSON.parse(xhttp.responseText);

    var valorMoeda = coinParam == "SHIB" ? "R$ " + obj.ticker.last : formatarMoedaBRL(obj.ticker.last);

    if(coinParam == null)
      document.getElementById("PrecoOutrasCriptomoedas").innerHTML = coin == "SHIB" ? "R$ " + obj.ticker.last : valorMoeda;
    
    return valorMoeda;
}

function formatarMoedaBRL(valor)
{
    //5000 -> R$ 5.000,00
   return Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(valor);
}

