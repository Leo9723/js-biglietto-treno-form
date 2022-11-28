const button = document.getElementById('get_date')

button.addEventListener('click', function(){
    let nome = document.getElementById('nome').value;

    let distanza = document.getElementById('distanza').value;

    let eta = document.getElementById('eta').value;

    let prezzo = distanza * 0.21

    console.log(eta)

    if (eta.value = 'minorenne'){
        prezzo_finale = parseFloat(prezzo * 0.8).toFixed(2)
        tipo_biglietto = 'biglietto per minorenne'
    }
    else if (eta.value = 'over_65'){
        prezzo_finale = parseFloat(prezzo * 0.6).toFixed(2)
        tipo_biglietto = 'biglietto per over 65'
    }
    else{
        prezzo_finale = parseFloat(prezzo).toFixed(2)
        tipo_biglietto = 'biglietto regolare'
    }
    
    document.getElementById("numero_carrozza").innerHTML = parseInt(Math.random()*10);

    document.getElementById("numero_biglietto").innerHTML = parseInt(Math.random()*1000);

    console.log(eta)

    document.getElementById('nome_passeggero').innerHTML = nome;

    document.getElementById('tipo_biglietto').innerHTML = tipo_biglietto;

    document.getElementById('prezzo_finale').innerHTML = prezzo_finale;
})