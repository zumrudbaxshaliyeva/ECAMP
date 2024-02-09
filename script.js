const stocks = [
    {
        symbol: "iphone11",
        price: 1000,
        sector: "smartfonlar"
    },
    {
        symbol: "iphone12",
        price: 1200,
        sector: "smartfonlar"
    },
    {
        symbol: "iphone13",
        price: 1500,
        sector: "smartfonlar"
    },
    {
        symbol: "çaydan ninja KT200EU",
        price: 250,
        sector: "mətbəx texnikasi"
    },
    {
        symbol: "Paltaryuyan LG W1S1CVKK2HM",
        price: 5699,
        sector: "ev texnikasi"
    }
];

// Task2
const intervalId = setInterval(() => {
    stocks[4].price += 100;
    console.log("Updated price:", stocks[4].price);
}, 5000);

setTimeout(() => {
    clearInterval(intervalId); 
}, 20000);

//Task3
function filterStocksBySector(sector) {
    return stocks.filter(stock => stock.sector === sector);
}

const smartfonStocks = filterStocksBySector("smartfonlar");
const homeTechnologiesStocks = filterStocksBySector("ev texnikasi");


console.log("Smartfon Stocks:", JSON.stringify(smartfonStocks));
console.log("Home Technologies Stocks:", JSON.stringify(homeTechnologiesStocks));



//Task4
// const checkStockPrices=()=>{
// const message=stocks.filter(stock=>{
//      stock.price>4000 || stock.price<500
//      return alert(stocks.symbol)


   
// })
// setTimeout(checkStockPrices, 10000);

// }
// checkStockPrices()
