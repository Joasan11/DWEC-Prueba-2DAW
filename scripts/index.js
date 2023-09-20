//EVENTO BOTON (Cambiar color de fondo)

// Función para generar un color aleatorio en formato hexadecimal
function generarColorAleatorio() {
    const letrasHexadecimales = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letrasHexadecimales[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Evento para cambiar el fondo al hacer clic en el botón
document.getElementById('cambiarFondo').addEventListener('click', function() {
    const colorAleatorio = generarColorAleatorio();
    document.body.style.backgroundColor = colorAleatorio;
    //Enseñar en consola frase, con el número Hexadecimal generado aleatoriamente
    console.log(`El color al que se ha cambiado es: ${colorAleatorio}`);
});

//EVENTO BOTON (Cambiar color de fondo)