function obterPrecos()
{
    document.getElementById("precoBitcoin").innerHTML = fazerRequisicao("BTCBUSD");
    document.getElementById("precoEthereum").innerHTML = fazerRequisicao("ETHBUSD");
    document.getElementById("precoFantom").innerHTML = fazerRequisicao("FTMBUSD");
    document.getElementById("precoMatic").innerHTML = fazerRequisicao("MATICBUSD");
    document.getElementById("precoLink").innerHTML = fazerRequisicao("LINKBUSD");
    document.getElementById("precoBusd").innerHTML = fazerRequisicao("BUSDBRL");
}

function fazerRequisicao(coinParam)
{

    var coin = coinParam != null ? coinParam : document.getElementById('coin').value;

    var xhttp = new XMLHttpRequest();
    
    xhttp.open ("GET", "https://data.binance.com/api/v3/ticker/price?symbol=" + coin + "", false);

    xhttp.send();

    const obj = JSON.parse(xhttp.responseText);

    var valorMoeda = coinParam == "BUSDBRL" ? "R$ " + obj.price : formatarMoedaBRL(obj.price);

    if(coinParam == null)
      document.getElementById("precoOutrasCriptomoedas").innerHTML = coin == "BUSDBRL" ? "R$ " + obj.price : valorMoeda;
    
    return valorMoeda;
}

function formatarMoedaBRL(valor)
{
    //5000 -> R$ 5.000,00
   return Intl.NumberFormat('pt-br', {style: 'currency', currency: 'USD'}).format(valor);
}