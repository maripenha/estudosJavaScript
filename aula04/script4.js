// codigo para praticar switch case!!
// codigo para praticar switch case!!
// codigo para praticar switch case!!
// codigo para praticar switch case!!

document.addEventListener('DOMContentLoaded', function() {
document.getElementById('mes').addEventListener('change', function() {
    const mes = 
this.value.toLowerCase();
    let signo = "";

    switch(mes){

        case 'janeiro':
            signo = 'Capricórnio ou Aquário';
            break;

        case 'fevereiro':
            signo = 'Aquário ou Peixes';
            break;

        case 'março':
            signo = 'Peixes ou Áries';
            break;

        case 'abril':
            signo = 'Áries ou Touro';
            break;


        case 'maio':
            signo = 'Touro ou Gêmeos';
            break;

        case 'junho':
            signo = 'Gêmeos ou Câncer';
            break;

        case 'julho':
            signo = 'Câncer ou Leão';
            break;

        case 'agosto':
            signo = 'Leão ou Virgem';
            break;

        case 'setembro':
            signo = 'Virgem ou Libra';
            break;

        case 'outubro':
            signo = 'Libra ou Escorpião';
            break;

        case 'novembro':
            signo = 'Escorpião ou Sagitário';
            break;

        case 'dezembro':
            signo = 'Sagitário ou Capricórnio';
            break;
    
        default:
            signo = "Mês inválido";
    }

    document.getElementById('signo').textContent = `Seu signo é: ${signo}`;
});
});