var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
var coin = document.getElementById('coin').value;

console.log(getprice("BTC"));

getprice(coin)
{
    xhr.open("GET", "https://www.mercadobitcoin.net/api/" + coin + "/ticker", false);

    xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor

    const obj = JSON.parse(xhr.responseText);

    console.log(obj.ticker.last);

    return obj.ticker.last;
}
