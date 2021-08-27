            ///////////////
            // VARIABLES //
            ///////////////

// Cuadrado
const ladoDelCuadrado = document.getElementById("ladoDelCuadrado")

// Triangulo
const ladoDelTriangulo1 = document.getElementById("ladoDelTriangulo1")
const ladoDelTriangulo2 = document.getElementById("ladoDelTriangulo2")
const baseDelTriangulo = document.getElementById("baseDelTriangulo")
const alturaDelTriangulo = document.getElementById("alturaDelTriangulo")

// Triangulo Isósceles
const catetoA = document.getElementById("catetoA")
const catetoB = document.getElementById("catetoB")
const baseIsosceles = document.getElementById("baseIsosceles")

// Circulo
const radio = document.getElementById("radio")
const PI = Math.PI


            ///////////////
            // FUNCIONES //
            ///////////////

// CUADRADO
// Área del cuadrado
function areaDelCuadrado() {
    const lado = ladoDelCuadrado.value 
    const areaCuadrado = lado * lado
    console.log("El lado del cuadrado mide: " + lado + "cm")
    console.log("El área del cuadrado es: " + areaCuadrado + "cm")
    const outputCuadrado = document.querySelector(".outputCuadrado")
    // outputCuadrado = innerHTML
    return 
}

// Perímetro del cuadrado
function perimetroDelCuadrado() {
    const lado = ladoDelCuadrado.value 
    const perimetroCuadrado = lado * 4
    console.log("El lado del cuadrado mide: " + lado + "cm")
    console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm")
    return
}

// TRIANGULO
// Área del triangulo
function areaDelTriangulo() {
    const base = baseDelTriangulo.value
    const altura = alturaDelTriangulo.value
    areaTriangulo = ( base * altura ) / 2
    console.log("El área del triangulo es: " + areaTriangulo + "cm")
}

// Perímetro del triangulo
function perimetroDelTriangulo() {
    const lado1 = parseInt(ladoDelTriangulo1.value)
    const lado2 = parseInt( ladoDelTriangulo2.value )
    const base = parseInt( baseDelTriangulo.value )
    perimetroTriangulo = lado1 + lado2 + base 
    console.log("El perímetro del triangulo es: " + perimetroTriangulo + "cm")
    console.log(
        "Los lados del triangulo miden: " 
        + lado1 
        + "cm, "
        + lado2 
        + "cm, y su base es: " 
        + base + "cm."
        );
} 

// TRIANGULO ISOSCELES
// Altura del triangulo isosceles
function alturaDelTrianguloIsos() {
    catetoAin = parseInt(catetoA.value)
    catetoBin = parseInt(catetoB.value)
    baseIsoscelesIn = parseInt(baseIsosceles.value)
    if ((catetoAin === catetoBin) && (baseIsoscelesIn <= (catetoAin + catetoBin))) {
        const alturaIsosceles = Math.sqrt((catetoAin*catetoAin) - ((baseIsoscelesIn*baseIsoscelesIn) / 4))
        console.log(`La altura del triangulo isosceles es ${alturaIsosceles} cm.`)
    } else {
        console.log("El triangulo no es Isosceles. Asegurese que los catetos" 
            + "sean iguales y que la base no sea mayor a la suma de sus catetos")
    }
}

// CIRCULO
// Diámetro del circulo
function diametroX() {
    radioX2 = radio.value * 2
    console.log("El diámetro del circulo mide: " + radioX2 + " cm");
    return radioX2
} 

// Área del circulo
function areaDelCirculo() {
    areaCirculo = radio.value * radio.value * PI
    console.log("El área del circulo es: " + areaCirculo + "cm")
}

// Perímetro del circulo o Circunferencia
function perimetroDelCirculo() {
    perimetroCirculo = diametroX() * PI
    console.log("El perímetro del circulo es: " + perimetroCirculo + "cm")
    }






// var canvas = document.querySelector('.myCanvas');
// var width = canvas.width = window.innerWidth;
// var height = canvas.height = window.innerHeight-85;
// var ctx = canvas.getContext('2d');

// ctx.fillStyle = 'rgb(0,0,0)';
// ctx.fillRect(0,0,width,height);

// var colorPicker = document.querySelector('input[type="color"]');
// var sizePicker = document.querySelector('input[type="range"]');
// var output = document.querySelector('.output');
// var clearBtn = document.querySelector('input[type="button"]');

// // covert degrees to radians
// function degToRad(degrees) {
//   return degrees * Math.PI / 180;
// };

// // update sizepicker output value

// sizePicker.oninput = function() {
//   output.textContent = sizePicker.value;
// }

// // store mouse pointer coordinates, and whether the button is pressed
// var curX;
// var curY;
// var pressed = false;

// // update mouse pointer coordinates
// document.onmousemove = function(e) {
//   curX = (window.Event) ? e.pageX : e.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
//   curY = (window.Event) ? e.pageY : e.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
// }

// canvas.onmousedown = function() {
//   pressed = true;
// };

// canvas.onmouseup = function() {
//   pressed = false;
// }

// clearBtn.onclick = function() {
//   ctx.fillStyle = 'rgb(0,0,0)';
//   ctx.fillRect(0,0,width,height);
// }

// function draw() {
//   if(pressed) {
//     ctx.fillStyle = colorPicker.value;
//     ctx.beginPath();
//     ctx.arc(curX, curY-85, sizePicker.value, degToRad(0), degToRad(360), false);
//     ctx.fill();
//   }

//   requestAnimationFrame(draw);
// }

// draw();