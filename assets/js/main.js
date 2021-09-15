// 데이터 가져오기
const bankingURL = 'https://syoon0624.github.io/json/test.json';
const request = new XMLHttpRequest();

request.open('GET', bankingURL);
request.responseType = 'json';
request.send();

request.onload = () => {
  const bankingData = request.response;
  console.log(bankingData);
}

// 슬라이드 이벤트
const btn = document.querySelector('.up-button'); 
const bg = document.querySelector('.transaction');

btn.addEventListener('click', () => {
  bg.classList.toggle('up');
});