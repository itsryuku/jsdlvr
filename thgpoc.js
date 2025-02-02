fetch("https://www.lookfantastic.com/account/graphql?operationName=Customer", {
  "body": "{\"query\":\"query Customer($currency: Currency) {\\n  customer {\\n    fullName\\n    hashedEmail\\n    creditAccounts(filter: {currency: $currency}) {\\n      balance {\\n        displayValue\\n      }\\n    }\\n  }\\n}\",\"variables\":{\"currency\":\"GBP\"}}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
})
  .then(response => response.json())  
  .then(data => {
    document.body.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;  
  })
  .catch(error => {
    document.body.innerHTML = `<pre>Error: ${error.message}</pre>`;  
  });
