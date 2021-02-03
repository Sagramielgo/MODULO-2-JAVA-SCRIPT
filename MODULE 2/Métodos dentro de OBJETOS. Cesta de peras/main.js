'user strict';

const pearsBasket = {
  initialValue: 2,
  currentValue: 4,
  maxValue: 10,
  minValue: 1,
  increment: () => (pearsBasket.currentValue += 1),
};
console.log(`El valor actual es ${pearsBasket.currentValue}`);

//método dentro de objeto
console.log(`El valor incrementado será ${pearsBasket.increment()}`);

// método fuera de objeto. Ésta es otra forma de hacerlo, pero es lo  mismo que arriba.
pearsBasket.substract = () => (pearsBasket.currentValue -= 1);
console.log(`La resta sería ${pearsBasket.substract()}`);

pearsBasket.reset = () => (pearsBasket.currentValue = pearsBasket.initialValue);
console.log(
  `volvemos al principio y tenemos de nuevo ${pearsBasket.reset()} peras`
);
