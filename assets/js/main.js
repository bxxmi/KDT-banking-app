// 데이터 가져오기
const bankingURL = 'https://syoon0624.github.io/json/test.json';
const request = new XMLHttpRequest();

request.open('GET', bankingURL);
request.send();

request.onload = () => {
  const bankingList = JSON.parse(request.response);
  bankData(bankingList);
}

function bankData(obj) {
  const bankDatas = obj['bankList'];
  const historyWrap = document.querySelector('.transaction-histories');
  let date, income, classify, history, price;

  bankDatas.forEach((datas, index) => {
    date = datas.date;
    income = datas.income;
    classify = datas.classify;
    history = datas.history;
    price = datas.price;

    const priceValue = price.toLocaleString();
    console.log(index);

    let ul = document.createElement('ul');
    ul.className = 'transactions';
    ul.innerHTML = `
      <div class="daily-cost">
        <span class="date">${date}</span>
        <span class="cost">
          <span class="cost-sum">${priceValue}</span>원 지출</span>
      </div>
    `;

    let li = document.createElement('li');
    li.className = 'transaction-item';
    // in, out 비교
    if(income === 'in') {
      li.innerHTML = `
      <span class="item-name">${history}</span>
      <span class="item-cost in">${priceValue}</span>
    `;
    } else {
      li.innerHTML = `
      <span class="item-name">${history}</span>
      <span class="item-cost out">${priceValue}</span>
    `;
    }
    ul.append(li);
    historyWrap.prepend(ul);
  });
}  

// 슬라이드 이벤트
const btn = document.querySelector('.up-button'); 
const bg = document.querySelector('.transaction'); 
const wrap = document.querySelector('.transaction-histories');

btn.addEventListener('click', () => {
  bg.classList.toggle('up');
  wrap.style.maxHeight = 'none';
});