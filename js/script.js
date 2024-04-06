    document.getElementById('imcForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const weight = document.getElementById('weight').value;
        const height = document.getElementById('height').value;

        const imc = weight / (height / 100) ** 2;

        document.getElementById('imcResult').textContent = imc.toFixed(2);

        let category;
        if (imc < 18.5) {
            category = 'Bajo peso';
        } else if (imc < 24.9) {
            category = 'Peso normal';
        } else if (imc < 29.9) {
            category = 'Sobrepeso';
        } else if (imc < 34.9) {
            category = 'Obesidad grado I';
        } else if (imc < 39.9) {
            category = 'Obesidad grado II';
        } else if(imc <49.9 ){
            category = 'Obesidad grado III';
        } else{
            category = 'Obesidad grado IV';
        }

        document.getElementById('imcCategory').textContent = `Tu categoría de peso es: ${category}`;

        document.getElementById('resultContainer').style.display = 'block';
    });
