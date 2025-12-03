function copyCode(button) {
  const codeBlock = button.nextElementSibling.querySelector('code');
  const code = codeBlock.textContent;

  navigator.clipboard.writeText(code).then(() => {
    const originalText = button.textContent;
    button.textContent = '복사됨';
    button.style.background = '#181d23ff';

    setTimeout(() => {
      button.textContent = originalText;
      button.style.background = '';
    }, 5000);
  }).catch(err => {
    alert('복사 실패: ' + err);
  });
}

// 실시간 시계 업데이트
function updateLiveClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const clockEl = document.getElementById('live-clock');
  if (clockEl) {
    clockEl.textContent = `${hours}:${minutes}:${seconds}`;
  }
}
setInterval(updateLiveClock, 1000);
updateLiveClock();

// 랜덤 색상 변경
function demoChangeColor() {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  document.getElementById('demo-color-box').style.backgroundColor = randomColor;
  document.getElementById('demo-color-code').textContent = randomColor;
}
