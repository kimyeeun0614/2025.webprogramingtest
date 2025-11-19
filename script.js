// C 언어 체험 (가상 콘솔)
function runC() {
    const consoleC = document.getElementById('consoleC');
    consoleC.textContent = "실행 결과: Hello, World!";
    consoleC.style.color = "#58a6ff";
}

// HTML 체험
function showHTML() {
    const input = document.getElementById('htmlInput').value;
    document.getElementById('htmlOutput').innerHTML = input;
}

// CSS 색상 변경
function changeColor(color) {
    document.body.style.backgroundColor = color;
}

// JS 실행
function runJS() {
    alert("JavaScript 실행 성공!");
}