// 인터랙티브 플레이그라운드 JavaScript

// ========== 🎨 스타일 실험실 ==========

// 버튼 스타일 업데이트
function updateButton() {
  const button = document.getElementById('demo-button');
  const text = document.getElementById('btn-text').value;
  const bgColor = document.getElementById('btn-bg').value;
  const textColor = document.getElementById('btn-color').value;
  const size = document.getElementById('btn-size').value;
  const radius = document.getElementById('btn-radius').value;
  const shadow = document.getElementById('btn-shadow').value;
  
  // 값 표시 업데이트
  document.getElementById('btn-size-val').textContent = size;
  document.getElementById('btn-radius-val').textContent = radius;
  document.getElementById('btn-shadow-val').textContent = shadow;
  
  // 스타일 적용
  button.textContent = text;
  button.style.background = bgColor;
  button.style.color = textColor;
  button.style.fontSize = size + 'px';
  button.style.borderRadius = radius + 'px';
  button.style.boxShadow = `0 ${shadow}px ${shadow * 2}px rgba(0,0,0,0.3)`;
  button.style.padding = '12px 30px';
}

// 카드 스타일 업데이트
function updateCard() {
  const card = document.getElementById('demo-card');
  const title = document.getElementById('card-title').value;
  const desc = document.getElementById('card-desc').value;
  const bgColor = document.getElementById('card-bg').value;
  const borderColor = document.getElementById('card-border').value;
  const shadow = document.getElementById('card-shadow').value;
  const radius = document.getElementById('card-radius').value;
  
  // 값 표시 업데이트
  document.getElementById('card-shadow-val').textContent = shadow;
  document.getElementById('card-radius-val').textContent = radius;
  
  // 내용 업데이트
  card.querySelector('h4').textContent = title;
  card.querySelector('p').textContent = desc;
  
  // 스타일 적용
  card.style.background = bgColor;
  card.style.border = `2px solid ${borderColor}`;
  card.style.boxShadow = `0 ${shadow}px ${shadow * 2}px rgba(0,0,0,0.2)`;
  card.style.borderRadius = radius + 'px';
}

// ========== ✨ 애니메이션 체험 ==========

let animationRunning = true;

// 애니메이션 업데이트
function updateAnimation() {
  const box = document.getElementById('anim-box');
  const speed = document.getElementById('anim-speed').value;
  const color = document.getElementById('anim-color').value;
  const size = document.getElementById('anim-size').value;
  const type = document.getElementById('anim-type').value;
  
  // 값 표시 업데이트
  document.getElementById('anim-speed-val').textContent = speed;
  document.getElementById('anim-size-val').textContent = size;
  
  // 모든 애니메이션 클래스 제거
  box.className = 'anim-box';
  
  // 스타일 적용
  box.style.background = color;
  box.style.width = size + 'px';
  box.style.height = size + 'px';
  box.style.setProperty('--anim-duration', speed + 's');
  
  // 애니메이션 타입 적용
  if(animationRunning) {
    box.classList.add('anim-' + type);
  }
}

// 애니메이션 시작/정지
function toggleAnimation() {
  const box = document.getElementById('anim-box');
  const type = document.getElementById('anim-type').value;
  
  animationRunning = !animationRunning;
  
  if(animationRunning) {
    box.classList.add('anim-' + type);
  } else {
    box.className = 'anim-box';
  }
}

// 페이드 효과 업데이트
function updateFade() {
  const box = document.getElementById('fade-box');
  const opacity = document.getElementById('fade-opacity').value;
  const speed = document.getElementById('fade-speed').value;
  
  // 값 표시 업데이트
  document.getElementById('fade-val').textContent = opacity;
  document.getElementById('fade-speed-val').textContent = speed;
  
  // 스타일 적용
  box.style.opacity = opacity / 100;
  box.style.setProperty('--fade-duration', speed + 's');
}

// 페이드 효과 실행
function triggerFade() {
  const box = document.getElementById('fade-box');
  const speed = document.getElementById('fade-speed').value;
  
  box.style.opacity = '0';
  
  setTimeout(() => {
    box.style.opacity = '1';
  }, parseFloat(speed) * 1000);
}

// ========== 🎮 인터랙션 놀이터 ==========

// 랜덤 색상 변경
function randomColorChange() {
  const box = document.getElementById('random-color-box');
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
  box.style.background = randomColor;
}

// 카운터
let counterValue = 0;

function incrementCounter() {
  const step = parseInt(document.getElementById('counter-step').value) || 1;
  counterValue += step;
  document.getElementById('counter-display').textContent = counterValue;
}

function decrementCounter() {
  const step = parseInt(document.getElementById('counter-step').value) || 1;
  counterValue -= step;
  document.getElementById('counter-display').textContent = counterValue;
}

function resetCounter() {
  counterValue = 0;
  document.getElementById('counter-display').textContent = counterValue;
}

// 계산기
function calculate() {
  const num1 = parseFloat(document.getElementById('calc-num1').value) || 0;
  const num2 = parseFloat(document.getElementById('calc-num2').value) || 0;
  const operator = document.getElementById('calc-operator').value;
  let result = 0;
  
  switch(operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num2 !== 0 ? num1 / num2 : '오류';
      break;
  }
  
  document.getElementById('calc-result').textContent = '결과: ' + (typeof result === 'number' ? result.toFixed(2) : result);
}

// ========== 🌈 색상 놀이터 ==========

// 그라디언트 업데이트
function updateGradient() {
  const box = document.getElementById('gradient-box');
  const color1 = document.getElementById('grad-color1').value;
  const color2 = document.getElementById('grad-color2').value;
  const direction = document.getElementById('grad-direction').value;
  
  box.style.background = `linear-gradient(${direction}, ${color1}, ${color2})`;
}

// 랜덤 그라디언트
function randomGradient() {
  const randomColor1 = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
  const randomColor2 = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
  
  document.getElementById('grad-color1').value = randomColor1;
  document.getElementById('grad-color2').value = randomColor2;
  
  updateGradient();
}

// 색상 팔레트 생성
function generatePalette() {
  const container = document.getElementById('palette-container');
  container.innerHTML = '';
  
  for(let i = 0; i < 5; i++) {
    const color = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    const colorDiv = document.createElement('div');
    colorDiv.className = 'palette-color';
    colorDiv.style.background = color;
    colorDiv.textContent = color;
    colorDiv.onclick = () => {
      navigator.clipboard.writeText(color);
      alert(`${color} 복사됨!`);
    };
    container.appendChild(colorDiv);
  }
}

// 텍스트 스타일 업데이트
function updateText() {
  const demo = document.getElementById('text-demo');
  const text = document.getElementById('text-input').value;
  const size = document.getElementById('text-size').value;
  const color = document.getElementById('text-color').value;
  const font = document.getElementById('text-font').value;
  const bold = document.getElementById('text-bold').checked;
  const italic = document.getElementById('text-italic').checked;
  
  // 값 표시 업데이트
  document.getElementById('text-size-val').textContent = size;
  
  // 스타일 적용
  demo.textContent = text;
  demo.style.fontSize = size + 'px';
  demo.style.color = color;
  demo.style.fontFamily = font;
  demo.style.fontWeight = bold ? 'bold' : 'normal';
  demo.style.fontStyle = italic ? 'italic' : 'normal';
}

// ========== 초기화 ==========

// 페이지 로드 시 초기값 설정
window.addEventListener('load', () => {
  // 버튼 초기화
  updateButton();
  
  // 카드 초기화
  updateCard();
  
  // 애니메이션 초기화
  updateAnimation();
  
  // 페이드 초기화
  updateFade();
  
  // 그라디언트 초기화
  updateGradient();
  
  // 텍스트 초기화
  updateText();
  
  // 랜덤 색상 박스 초기색
  randomColorChange();
  
  // 초기 팔레트 생성
  generatePalette();
});