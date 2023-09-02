// Obtener el color picker
const colorPicker = document.getElementById('colorPicker');

// Obtener el elemento para mostrar el valor HEX
const hexValue = document.createElement('span');
hexValue.textContent = colorPicker.value;
const colorPickerLabel = document.querySelector('label[for="colorPicker"]');
colorPickerLabel.appendChild(hexValue);

// Función para actualizar el valor HEX y calcular combinaciones de colores
function updateColorInfo() {
    const color = colorPicker.value;
    hexValue.textContent = color;

    // Calcula combinaciones de colores
    const complementaryColor = getComplementaryColor(color);
    const splitComplementaryColors = getSplitComplementaryColors(color);
    const analogousColors = getAnalogousColors(color);

    // Muestra las combinaciones en el DOM
    showColorCombination("Complementario", complementaryColor);
    showColorCombination("Complementarios Divididos", splitComplementaryColors);
    showColorCombination("Análogos", analogousColors);
}

// Función para calcular el color complementario
function getComplementaryColor(color) {
    // Implementa aquí la lógica para calcular el color complementario
    // Por ejemplo, invertir los valores RGB o convertir a HSL y ajustar la tonalidad
}

// Función para calcular los colores complementarios divididos
function getSplitComplementaryColors(color) {
    // Implementa aquí la lógica para calcular los colores complementarios divididos
    // Puedes calcular dos colores adicionales basados en el complementario
}

// Función para calcular colores análogos
function getAnalogousColors(color) {
    // Implementa aquí la lógica para calcular colores análogos
    // Puedes calcular colores que están cerca en el círculo de colores (por ejemplo, modificando la tonalidad)
}

// Función para mostrar una combinación de color en el DOM
function showColorCombination(label, color) {
    const combinationsList = document.getElementById('color-combinations');
    const combinationItem = document.createElement('p');
    combinationItem.innerHTML = `${label}: <span style="background-color:${color}">${color}</span>`;
    combinationsList.appendChild(combinationItem);
}

// Agregar un evento de cambio al color picker
colorPicker.addEventListener('input', updateColorInfo);

// Inicializar la información de color al cargar la página
updateColorInfo();
