const display = document.getElementById("display");

function add(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Erro";
  }
}

// 👇 NOVO: suporte ao teclado
document.addEventListener("keydown", (event) => {
  const key = event.key;

  // Números
  if (!isNaN(key)) {
    add(key);
  }

  // Operadores
  if (["+", "-", "*", "/"].includes(key)) {
    add(key);
  }

  // Enter = calcular
  if (key === "Enter") {
    calculate();
  }

  // Backspace = apagar último
  if (key === "Backspace") {
    display.value = display.value.slice(0, -1);
  }

  // Escape = limpar tudo
  if (key === "Escape") {
    clearDisplay();
  }

  // Ponto decimal
  if (key === "." || key === ",") {
    add(".");
  }
});