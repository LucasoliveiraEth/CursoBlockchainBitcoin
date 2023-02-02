function getPrices()
{
    document.getElementById("price-BTC").innerHTML = getPrice("BTC");
    document.getElementById("price-ETH").innerHTML = getPrice("ETH");
    document.getElementById("price-XRP").innerHTML = getPrice("XRP");
    document.getElementById("price-ADA").innerHTML = getPrice("ADA");
    document.getElementById("price-DOGE").innerHTML = getPrice("DOGE");
    document.getElementById("price-MATIC").innerHTML = getPrice("MATIC");
    document.getElementById("price-SOL").innerHTML = getPrice("SOL");
    document.getElementById("price-DOT").innerHTML = getPrice("DOT");
    document.getElementById("price-LTC").innerHTML = getPrice("LTC");
    document.getElementById("price-SHIB").innerHTML = getPrice("SHIB");
    document.getElementById("price-AVAX").innerHTML = getPrice("AVAX");
    document.getElementById("price-UNI").innerHTML = getPrice("UNI");
    document.getElementById("price-ATOM").innerHTML = getPrice("ATOM");
    document.getElementById("price-LINK").innerHTML = getPrice("LINK");
    document.getElementById("price-BCH").innerHTML = getPrice("BCH");
    document.getElementById("price-XLM").innerHTML = getPrice("XLM");
    document.getElementById("price-APE").innerHTML = getPrice("APE");
    document.getElementById("price-USDC").innerHTML = getPrice("USDC");
}

function getPrice(coinParam){

    var coin = coinParam != null ? coinParam : document.getElementById('coin').value;

    var xhttp = new XMLHttpRequest();
    
    xhttp.open("GET", "https://www.mercadobitcoin.net/api/" + coin + "/ticker", false);

    xhttp.send();

    const obj = JSON.parse(xhttp.responseText);

    var valorMoeda = coinParam == "SHIB"? "R$ " + obj.ticker.last : formatarMoedaBRL(obj.ticker.last);

    if(coinParam == null)
      document.getElementById("price-other").innerHTML = coin == "SHIB" ? "R$ " + obj.ticker.last : valorMoeda;
    
    return valorMoeda;
}

function formatarMoedaBRL(valor)
{
   return Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(valor);
}