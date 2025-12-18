// 예시 템플릿
const templates = {
  hello: {
    html: `<div class="container">
  <h1>Hello World!</h1>
  <p>이것은 간단한 HTML 예제입니다.</p>
</div>`,
    css: `.container {
  text-align: center;
  padding: 50px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 10px;
}

h1 {
  font-size: 48px;
  margin: 0;
}

p {
  font-size: 20px;
}`,
    js: `// 콘솔에 메시지 출력
console.log('Hello World!');`
  },
  
  button: {
    html: `<div class="btn-container">
  <button id="myButton" class="fancy-btn">
    클릭하세요!
  </button>
  <p id="message"></p>
</div>`,
    css: `.btn-container {
  text-align: center;
  padding: 50px;
}

.fancy-btn {
  background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
  color: white;
  border: none;
  padding: 15px 40px;
  font-size: 20px;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.fancy-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.3);
}

#message {
  margin-top: 20px;
  font-size: 24px;
  color: #333;
  font-weight: bold;
}`,
    js: `const button = document.getElementById('myButton');
const message = document.getElementById('message');

button.addEventListener('click', () => {
  message.textContent = '버튼을 클릭했습니다!';
  button.textContent = '다시 클릭';
});`
  },
  
  card: {
    html: `<div class="card">
  <div class="card-header">
    <h2>프로필 카드</h2>
  </div>
  <div class="card-body">
    <h3>김예은</h3>
    <p>IT학부</p>
    <button class="contact-btn">연락하기</button>
  </div>
</div>`,
    css: `.card {
  max-width: 300px;
  margin: 50px auto;
  background: white;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  overflow: hidden;
}

.card-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
  text-align: center;
}

.card-body {
  padding: 30px;
  text-align: center;
}

.card-body img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 15px;
}

.contact-btn {
  background: #667eea;
  color: white;
  border: none;
  padding: 10px 30px;
  border-radius: 25px;
  cursor: pointer;
  margin-top: 15px;
}`,
    js: `const contactBtn = document.querySelector('.contact-btn');

contactBtn.addEventListener('click', () => {
  alert('연락처: ');
});`
  },
  
  gradient: {
    html: `<div class="gradient-box">
  <h1>그라데이션</h1>
  <p>색상이 이어지며 변합니다</p>
</div>`,
    css: `.gradient-box {
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(45deg, #FF6B6B, #4ECDC4, #45B7D1, #FFA07A);
  background-size: 400% 400%;
  animation: gradientShift 8s ease infinite;
  color: white;
  text-align: center;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

h1 {
  font-size: 48px;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

p {
  font-size: 24px;
}`,
    js: `// 그리데이션이 자동으로 애니메이션됩니다
console.log('그라데이션 애니메이션 실행 중');`
  },
  
  animation: {
    html: `<div class="animation-container">
  <div class="box"></div>
</div>`,
    css: `.animation-container {
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0f0f0;
}

.box {
  width: 100px;
  height: 100px;
  background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
  border-radius: 15px;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(-50px) rotate(90deg);
  }
  50% {
    transform: translateY(0) rotate(180deg);
  }
  75% {
    transform: translateY(-25px) rotate(270deg);
  }
}`,
    js: `// CSS 애니메이션으로 박스가 통통 튄다
const box = document.querySelector('.box');

box.addEventListener('click', () => {
  box.style.animation = 'none';
  setTimeout(() => {
    box.style.animation = 'bounce 2s infinite';
  }, 10);
});`
  },
  
  calculator: {
    html: `<div class="calculator">
  <h2>간단한 계산기</h2>
  <input type="number" id="num1" placeholder="첫 번째 숫자">
  <select id="operator">
    <option value="+">+</option>
    <option value="-">-</option>
    <option value="*">×</option>
    <option value="/">÷</option>
  </select>
  <input type="number" id="num2" placeholder="두 번째 숫자">
  <button id="calcBtn">계산하기</button>
  <div id="result"></div>
</div>`,
    css: `.calculator {
  max-width: 400px;
  margin: 50px auto;
  padding: 30px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  text-align: center;
}

h2 {
  color: #667eea;
  margin-top: 0;
}

input, select {
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 15px;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;
  margin-top: 10px;
}

button:hover {
  background: #5568d3;
}

#result {
  margin-top: 20px;
  font-size: 28px;
  font-weight: bold;
  color: #333;
}`,
    js: `const calcBtn = document.getElementById('calcBtn');
const result = document.getElementById('result');

calcBtn.addEventListener('click', () => {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const operator = document.getElementById('operator').value;
  
  let answer;
  
  switch(operator) {
    case '+': answer = num1 + num2; break;
    case '-': answer = num1 - num2; break;
    case '*': answer = num1 * num2; break;
    case '/': answer = num1 / num2; break;
  }
  
  result.textContent = '결과: ' + answer;
});`
  }
};

// 템플릿 로드
function loadTemplate(templateName) {
  const template = templates[templateName];
  if (template) {
    document.getElementById('html-editor').value = template.html;
    document.getElementById('css-editor').value = template.css;
    document.getElementById('js-editor').value = template.js;
    runCode();
  }
}

// 코드 실행
function runCode() {
  const htmlCode = document.getElementById('html-editor').value;
  const cssCode = document.getElementById('css-editor').value;
  const jsCode = document.getElementById('js-editor').value;
  
  const previewFrame = document.getElementById('preview-frame');
  const preview = previewFrame.contentDocument || previewFrame.contentWindow.document;
  
  preview.open();
  preview.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          margin: 0;
          padding: 20px;
          font-family: 'Segoe UI', sans-serif;
        }
        ${cssCode}
      </style>
    </head>
    <body>
      ${htmlCode}
      <script>
        try {
          ${jsCode}
        } catch(e) {
          document.body.innerHTML += '<div style="color: red; padding: 20px; background: #fee; border: 2px solid red; margin-top: 20px;">오류: ' + e.message + '</div>';
        }
      <\/script>
    </body>
    </html>
  `);
  preview.close();
}

// 미리보기 새로고침
function refreshPreview() {
  runCode();
}

// 전체 초기화
function clearAll() {
  if (confirm('모든 코드를 지우시겠습니까 ?')) {
    document.getElementById('html-editor').value = '';
    document.getElementById('css-editor').value = '';
    document.getElementById('js-editor').value = '';
    const previewFrame = document.getElementById('preview-frame');
    const preview = previewFrame.contentDocument || previewFrame.contentWindow.document;
    preview.open();
    preview.write('');
    preview.close();
  }
}

// 키보드 단축키: Ctrl + Enter로 실행
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.key === 'Enter') {
    runCode();
  }
});

// 페이지 로드 시 첫 번째 템플릿 로드
window.addEventListener('load', () => {
  const htmlEditor = document.getElementById('html-editor');
  if (htmlEditor) {
    // 코드 에디터 페이지
    loadTemplate('hello');
  } else {
    // 체험하기 페이지
    initInteractive();
  }
});

// ======================================
// 체험하기 페이지 함수들
// ======================================

// 초기화
function initInteractive() {
  // 초기 팔레트 생성
  if (document.getElementById('palette-container')) {
    generatePalette();
  }
}

// 버튼 업데이트
// 버튼 업데이트
function updateButton() {
  const btn = document.getElementById('demo-button');
  const bgColor = document.getElementById('btn-bg').value;
  const textColor = document.getElementById('btn-color').value;
  const fontSize = document.getElementById('btn-size').value;
  const radius = document.getElementById('btn-radius').value;
  const text = document.getElementById('btn-text').value;
  const textShadow = document.getElementById('btn-text-shadow').value;
  
  btn.style.backgroundColor = bgColor;
  btn.style.color = textColor;
  btn.style.fontSize = fontSize + 'px';
  btn.style.borderRadius = radius + 'px';
  btn.style.textShadow = `${textShadow}px ${textShadow}px ${textShadow * 2}px rgba(0,0,0,0.8)`;
  btn.textContent = text;
  
  // 값 표시 업데이트
  document.getElementById('btn-size-val').textContent = fontSize + 'px';
  document.getElementById('btn-radius-val').textContent = radius + 'px';
  document.getElementById('btn-text-shadow-val').textContent = textShadow + 'px';
}

// 카드 업데이트
function updateCard() {
  const card = document.getElementById('demo-card');
  const title = document.getElementById('card-title').value;
  const desc = document.getElementById('card-desc').value;
  const bgColor = document.getElementById('card-bg').value;
  const borderColor = document.getElementById('card-border').value;
  const radius = document.getElementById('card-radius').value;
  const textShadow = document.getElementById('card-text-shadow').value;
  
  card.style.backgroundColor = bgColor;
  card.style.border = `2px solid ${borderColor}`;
  card.style.borderRadius = radius + 'px';
  card.style.textShadow = `${textShadow}px ${textShadow}px ${textShadow * 2}px rgba(0,0,0,0.6)`;
  
  card.querySelector('h4').textContent = title;
  card.querySelector('p').textContent = desc;
  
  // 값 표시 업데이트
  document.getElementById('card-radius-val').textContent = radius + 'px';
  document.getElementById('card-text-shadow-val').textContent = textShadow + 'px';
}

// 애니메이션 업데이트
function updateAnimation() {
  const animBox = document.getElementById('anim-box');
  const type = document.getElementById('anim-type').value;
  const speed = document.getElementById('anim-speed').value;
  const color = document.getElementById('anim-color').value;
  const size = document.getElementById('anim-size').value;
  
  animBox.style.setProperty('--anim-duration', speed + 's');
  animBox.style.animationName = type;
  animBox.style.backgroundColor = color;
  animBox.style.width = size + 'px';
  animBox.style.height = size + 'px';
  
  document.getElementById('anim-speed-val').textContent = speed + 's';
  document.getElementById('anim-size-val').textContent = size + 'px';
}

// 애니메이션 토글
function toggleAnimation() {
  const animBox = document.getElementById('anim-box');
  animBox.classList.toggle('active');
}

// 페이드 업데이트
function updateFade() {
  const fadeBox = document.getElementById('fade-box');
  const opacity = document.getElementById('fade-opacity').value;
  const speed = document.getElementById('fade-speed').value;
  
  fadeBox.style.opacity = opacity / 100;
  fadeBox.style.setProperty('--fade-duration', speed + 's');
  
  document.getElementById('fade-val').textContent = opacity;
  document.getElementById('fade-speed-val').textContent = speed + 's';
}

// 페이드 트리거
function triggerFade() {
  const fadeBox = document.getElementById('fade-box');
  const speed = parseFloat(document.getElementById('fade-speed').value) || 1;
  
  fadeBox.style.opacity = '0';
  
  setTimeout(() => {
    fadeBox.style.opacity = document.getElementById('fade-opacity').value / 100;
  }, speed * 1000);
}

// 랜덤 색상 변경
function randomColorChange() {
  const colorBox = document.getElementById('random-color-box');
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
  colorBox.style.backgroundColor = randomColor;
  colorBox.textContent = randomColor.toUpperCase();
}

// 카운터
let count = 0;
let step = 1;

function updateStep() {
  step = parseInt(document.getElementById('counter-step').value) || 1;
}

function incrementCounter() {
  count += step;
  document.getElementById('counter-display').textContent = count;
}

function decrementCounter() {
  count -= step;
  document.getElementById('counter-display').textContent = count;
}

function resetCounter() {
  count = 0;
  document.getElementById('counter-display').textContent = count;
}

// 계산기
function calculate() {
  const num1 = parseFloat(document.getElementById('calc-num1').value) || 0;
  const num2 = parseFloat(document.getElementById('calc-num2').value) || 0;
  const operator = document.getElementById('calc-operator').value;
  
  let result;
  switch(operator) {
    case '+': result = num1 + num2; break;
    case '-': result = num1 - num2; break;
    case '*': result = num1 * num2; break;
    case '/': result = num2 !== 0 ? num1 / num2 : '0으로 나눌 수 없습니다'; break;
  }
  
  document.getElementById('calc-result').textContent = typeof result === 'number' ? result.toFixed(2) : result;
}

// 그라디언트 업데이트
function updateGradient() {
  const gradientBox = document.getElementById('gradient-box');
  const color1 = document.getElementById('grad-color1').value;
  const color2 = document.getElementById('grad-color2').value;
  const direction = document.getElementById('grad-direction').value;
  
  gradientBox.style.background = `linear-gradient(${direction}, ${color1}, ${color2})`;
}

// 랜덤 그라디언트
function randomGradient() {
  const randomColor1 = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
  const randomColor2 = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
  
  document.getElementById('grad-color1').value = randomColor1;
  document.getElementById('grad-color2').value = randomColor2;
  
  updateGradient();
}

// 팔레트 생성
function generatePalette() {
  const container = document.getElementById('palette-container');
  container.innerHTML = '';
  
  for (let i = 0; i < 6; i++) {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    const colorDiv = document.createElement('div');
    colorDiv.className = 'palette-color';
    colorDiv.style.backgroundColor = randomColor;
    colorDiv.textContent = randomColor.toUpperCase();
    colorDiv.onclick = () => {
      navigator.clipboard.writeText(randomColor);
      alert(`${randomColor} 복사됨!`);
    };
    container.appendChild(colorDiv);
  }
}

// 텍스트 업데이트
function updateText() {
  const textDemo = document.getElementById('text-demo');
  const text = document.getElementById('text-input').value;
  const fontSize = document.getElementById('text-size').value;
  const color = document.getElementById('text-color').value;
  const fontFamily = document.getElementById('text-font').value;
  const bold = document.getElementById('text-bold').checked;
  const italic = document.getElementById('text-italic').checked;
  
  textDemo.textContent = text;
  textDemo.style.fontSize = fontSize + 'px';
  textDemo.style.color = color;
  textDemo.style.fontFamily = fontFamily;
  textDemo.style.fontWeight = bold ? 'bold' : 'normal';
  textDemo.style.fontStyle = italic ? 'italic' : 'normal';
  
  document.getElementById('text-size-val').textContent = fontSize + 'px';
}