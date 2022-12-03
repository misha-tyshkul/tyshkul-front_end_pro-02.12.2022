const value = prompt(
  "Какую арифметическую операцию вы хотите выполнить:\n 1. add - добавление;\n 2. sub - вычитание;\n 3. mult - умножение;\n 4. div - деление."
);

const num1 = parseInt(prompt("Введите первое число"));
const num2 = parseInt(prompt("Введите второе число"));

if (value === "add") {
  alert(`${num1} - ${num2} = ${num1 + num2}`);
} else if (value === "sub") {
  alert(`${num1} + ${num2} = ${num1 - num2}`);
} else if (value === "mult") {
  alert(`${num1} / ${num2} = ${num1 * num2}`);
} else if (value === "div") {
  alert(`${num1} * ${num2} = ${num1 / num2}`);
} else {
  alert("Запишите запрос операции внимательнее");
}
