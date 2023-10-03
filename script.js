const codeElement = document.getElementById('code');
const codeBox = document.querySelector('.code-box');
const codeText = `
    // Exemplo de algoritmo de processamento
    function calcularMedia(valores) {
        let soma = 0;
        for (let i = 0; i < valores.length; i++) {
            soma += valores[i];
        }
        return soma / valores.length;
    }

    const notas = [8, 7, 9, 10, 6];
    const media = calcularMedia(notas);
    console.log('A média das notas é: ' + media.toFixed(2));
`;

let typing = true;

function typeCode() {
    if (typing) {
        let charIndex = 0;
        typing = false;

        function typeChar() {
            if (charIndex < codeText.length) {
                codeElement.textContent += codeText.charAt(charIndex);
                charIndex++;
                codeBox.scrollTop = codeBox.scrollHeight;
                setTimeout(typeChar, 50);
            } else {
                typing = true;
                codeElement.textContent = '';
                codeBox.scrollTop = 0;
                setTimeout(typeCode, 1000);
            }
        }

        typeChar();
    }
}

typeCode();



const carouselItems = [
    "Texto 1 do Carrossel",
    "Texto 2 do Carrossel",
    "Texto 3 do Carrossel",
    // Adicione mais itens conforme necessário
];

let currentItemIndex = 0;
const carouselElement = document.querySelector(".carousel");

function updateCarousel() {
    carouselElement.textContent = carouselItems[currentItemIndex];
}

function nextCarouselItem() {
    currentItemIndex = (currentItemIndex + 1) % carouselItems.length;
    updateCarousel();
}

// Inicie o carrossel
updateCarousel();
setInterval(nextCarouselItem, 3000); // Altere a cada 3 segundos (3000 milissegundos)

