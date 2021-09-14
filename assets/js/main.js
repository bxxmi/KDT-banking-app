const bankingURL = 'https://syoon0624.github.io/json/test.json';
const request = new XMLHttpRequest();

request.open('GET', bankingURL);
request.responseType = 'json';
request.send();

request.onload = () => {
  const bankingData = request.response;
  console.log(bankingData);
}

