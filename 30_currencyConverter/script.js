let currency = "inr"
async function getData(){
    const currencyUrl = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.min.json`
    const data = await fetch(currencyUrl).
    then(res => res.json());
    console.log(data);

    

   

}

getData()