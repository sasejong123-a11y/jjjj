document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const numbersContainer = document.querySelector('.lotto-numbers');

    const getNumberColor = (number) => {
        if (number <= 10) return 'linear-gradient(135deg, #FFD700, #FFA500)'; // Gold
        if (number <= 20) return 'linear-gradient(135deg, #87CEEB, #4682B4)'; // Sky Blue
        if (number <= 30) return 'linear-gradient(135deg, #F08080, #CD5C5C)'; // Light Coral
        if (number <= 40) return 'linear-gradient(135deg, #98FB98, #3CB371)'; // Pale Green
        return 'linear-gradient(135deg, #DDA0DD, #BA55D3)'; // Plum
    };

    generateBtn.addEventListener('click', () => {
        // 기존 번호들 제거
        numbersContainer.innerHTML = '';

        // 1~45 사이의 유니크한 숫자 6개 생성
        const numbers = new Set();
        while (numbers.size < 6) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            numbers.add(randomNumber);
        }

        // 정렬된 배열로 변환
        const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

        // 화면에 번호 표시
        sortedNumbers.forEach((number, index) => {
            const numberElement = document.createElement('div');
            numberElement.classList.add('lotto-number');
            numberElement.textContent = number;
            numberElement.style.background = getNumberColor(number);
            numberElement.style.animationDelay = `${index * 0.1}s`; // 순차적 애니메이션
            numbersContainer.appendChild(numberElement);
        });
    });
});