// 데이터 가져오기
const bankingURL = 'https://syoon0624.github.io/json/test.json';
const request = new XMLHttpRequest();

request.open('GET', bankingURL);
request.responseType = 'json';
request.send();

request.onload = () => {
  const bankingData = request.response;
  const bankingList = bankingData['bankList'];
  const dailyHistory = document.querySelector('.transaction-histories');
  let date, income, classify, history, price;

  // 값 저장
  for(let i=0; i<bankingList.length; i++) {
    date = bankingList[i]['date'];
    income = bankingList[i]['income'];
    classify = bankingList[i]['classify'];
    history = bankingList[i]['history'];
    price = bankingList[i]['price'];
  }
}

// 슬라이드 이벤트
const btn = document.querySelector('.up-button'); 
const bg = document.querySelector('.transaction');

btn.addEventListener('click', () => {
  bg.classList.toggle('up');
});