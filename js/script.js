const convTemp = () => {
    const inputTemp = document.getElementById('Temp').value;
    const Tempchange = document.getElementById('Temp_change');
    const outputTemp = Temp_change.options[Tempchange.selectedIndex].value;

    const CeltoFah = (Cel) => {
        let Fahrenheit = ((Cel * 9 / 5) + 32).toFixed(1);
        return Fahrenheit;
    }

    const FahtoCel = (Fah) => {
        let Celsius = ((Fah - 32) * 5 / 9).toFixed(1);
        return Celsius;
    }

    if(outputTemp == 'Cel') {
        document.getElementById('Result').innerHTML = CeltoFah(inputTemp) + "&#176; Fahrenheit";
    } else {
        document.getElementById('Result').innerHTML = FahtoCel(inputTemp) + "&#176; Celsius";
    }
}