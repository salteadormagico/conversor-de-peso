document.addEventListener('DOMContentLoaded', function () {
    output = document.getElementById('output');
    output.style.visibility = 'hidden';
    const unidad = document.getElementById('unidad');
    const peso = document.getElementById('peso');
    const gramos = document.getElementById('gramos_output');
    const kilog = document.getElementById('kilog_output');
    const hectog = document.getElementById('hectog_output');
    const decag = document.getElementById('decag_output');
    const decig = document.getElementById('decig_output');
    const milig = document.getElementById('milig_output');
    const centig = document.getElementById('centig_output');

    peso.addEventListener('input', function (e) {
        if (peso.value === '') {
            output.style.visibility = 'hidden';
        } else {
            console.log(unidad.value);
            output.style.visibility = 'visible';
            var g = e.target.value;
            console.log(g);
            if (unidad.value === 'kilogramos') {
                kilog.innerHTML = g;
                hectog.innerHTML = g*10;
                decag.innerHTML = g*100;
                gramos.innerHTML = g*1000;
                decig.innerHTML = g*10000;
                centig.innerHTML = g*100000;
                milig.innerHTML = g*1000000;
            } else if (unidad.value === 'hectogramos') {
                kilog.innerHTML = g/10;
                hectog.innerHTML = g;
                decag.innerHTML = g*10;
                gramos.innerHTML = g*100;
                decig.innerHTML = g*1000;
                centig.innerHTML = g*10000;
                milig.innerHTML = g*100000;
            } else if (unidad.value === 'decagramos') {
                kilog.innerHTML = g/100;
                hectog.innerHTML = g/10;
                decag.innerHTML = g;
                gramos.innerHTML = g*10;
                decig.innerHTML = g*100;
                centig.innerHTML = g*1000;
                milig.innerHTML = g*10000;
            } else if (unidad.value === 'gramos') {
                kilog.innerHTML = g/1000;
                hectog.innerHTML = g/100;
                decag.innerHTML = g/10;
                gramos.innerHTML = g;
                decig.innerHTML = g*10;
                centig.innerHTML = g*100;
                milig.innerHTML = g*1000;
            } else if (unidad.value === 'decigramos') {
                kilog.innerHTML = g/10000;
                hectog.innerHTML = g/1000;
                decag.innerHTML = g/100;
                gramos.innerHTML = g/10;
                decig.innerHTML = g;
                centig.innerHTML = g*10;
                milig.innerHTML = g*100;
            } else if (unidad.value ==='centigramos') {
                kilog.innerHTML = g/100000;
                hectog.innerHTML = g/10000;
                decag.innerHTML = g/1000;
                gramos.innerHTML = g/100;
                decig.innerHTML = g/10;
                centig.innerHTML = g;
                milig.innerHTML = g*10;
            } else if (unidad.value === 'miligramos') {
                kilog.innerHTML = g/1000000;
                hectog.innerHTML = g/100000;
                decag.innerHTML = g/10000;
                gramos.innerHTML = g/1000;
                decig.innerHTML = g/100;
                centig.innerHTML = g/10;
                milig.innerHTML = g;
            }
        }
    });
});