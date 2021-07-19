let i = 0;
let button = document.querySelector('#button').addEventListener('click', function() {
    if(!i) {
        document.getElementById('readMore').style.display = 'inline';
        document.getElementById('button').innerHTML = 'Leer menos';
        i = 1;
    }
    else {
        document.getElementById('readMore').style.display = 'none';
        document.getElementById('button').innerHTML = 'Leer más';
        i = 0;
    }

})