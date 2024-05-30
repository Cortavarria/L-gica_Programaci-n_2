function conversorTemperatura () {
    const temperaturaCelsiusInput = document.getElementById("temperaturaCelsius");
    const tempCelsius = parseFloat(temperaturaCelsiusInput.value);
    
    if (isNaN(tempCelsius)) {
        alert("Error: La temperatura ingresada no es un número. Intente nuevamente.");
        return;
      }
    
      let tempFahrenheit = (tempCelsius * 9/5) + 32;
    let tempKelvin = tempCelsius + 273.15;

    document.getElementById("fahrenheit").textContent = tempFahrenheit.toFixed(2) + "°F";
    document.getElementById("kelvin").textContent = tempKelvin.toFixed(2) + "K";

}

const boton= document.getElementById ("boton")
boton.addEventListener('click',conversorTemperatura)

