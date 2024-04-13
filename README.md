# Módulo de Generación y Validación de Tarjetas de Crédito

Este módulo proporciona funciones para generar y validar números de tarjetas de crédito aleatorios.

## Instalación

Para instalar y utilizar este módulo en tu proyecto, simplemente ejecuta el siguiente comando en tu terminal:

```bash
npm install tarjetas-de-credito
```

## Uso

Para comenzar a generar y validar números de tarjetas de crédito, primero debes importar las funciones necesarias en tu archivo de JavaScript:

```javascript
const {
  generateCreditCard,
  validateCreditCard,
} = require("tarjetas-de-credito");
```

### Generar una Tarjeta de Crédito Aleatoria

Puedes generar una tarjeta de crédito aleatoria utilizando la función `generateCreditCard()`. Esta función devuelve un objeto JSON que contiene el número de tarjeta, el código de verificación (VCC), la fecha de vencimiento y el nombre asociado a la tarjeta.

```javascript
const tarjeta = generateCreditCard();
console.log(tarjeta);
```

El resultado será un objeto similar al siguiente:

```json
{
  "cardNumber": 4539678973908970,
  "vcc": 765,
  "expirationDate": "05/2027",
  "name": "John Doe"
}
```

### Validar una Tarjeta de Crédito

Puedes validar una tarjeta de crédito utilizando la función `validateCreditCard()`. Esta función toma un objeto de tarjeta de crédito como argumento y devuelve `true` si la tarjeta es válida y `false` si no lo es.

```javascript
const tarjetaValida = validateCreditCard(tarjeta);
console.log(tarjetaValida);
```

El resultado será `true` o `false` dependiendo de la validez de la tarjeta.

## Ejemplo Completo

Aquí tienes un ejemplo completo de cómo utilizar las funciones de este módulo:

```javascript
const {
  generateCreditCard,
  validateCreditCard,
} = require("tarjetas-de-credito");

// Generar una tarjeta de crédito aleatoria
const tarjeta = generateCreditCard();
console.log("Tarjeta Generada:", tarjeta);

// Validar la tarjeta de crédito generada
const tarjetaValida = validateCreditCard(tarjeta);
console.log("Tarjeta Válida:", tarjetaValida);
```
