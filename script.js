function mostraSezione(idSezione) {
    // Nascondi tutte le sezioni
    document.querySelectorAll('.sezione').forEach(sezione => sezione.style.display = 'none');

    // Mostra solo la sezione selezionata
    document.getElementById(idSezione).style.display = 'block';
}

function calcolaDifficolta(avventurieri, sessioni, livello) {
    return avventurieri*sessioni*livello;
}

function calculateExperience() {
    var avventurieri = parseInt(document.getElementById('avventurieri').value);
    var sessioni = parseInt(document.getElementById('sessioni').value);
    var livello = parseInt(document.getElementById('livello').value);
    
    const exp_session = [300,600,1200,1700,3500,4000,5000,6000,7500,9000,10500,11500,13500,15000,18000,20000,25000,27000,30000,40000];
    
    var esperienza_max = avventurieri * sessioni * exp_session[livello-1];
    document.getElementById('result').innerHTML = `
        <label for="esperienzaMissione">Esperienza missione:</label>
        <input type="number" id="esperienzaMissione" name="esperienzaMissione" required>
        <label for="divider">/</label>
        <span id="esperienzaMax">${esperienza_max}</span><br><br>
        <input type="submit" value="Procedi" onclick="calculatePercentage();">
    `;
}

function calculatePercentage() {
    var sessioni = parseInt(document.getElementById('sessioni').value);
    var avventurieri = parseInt(document.getElementById('avventurieri').value);
    var livello = parseInt(document.getElementById('livello').value);
    var esperienzaMissione = parseInt(document.getElementById('esperienzaMissione').value);
    var esperienzaMax = parseInt(document.getElementById('esperienzaMax').innerHTML);
    var percentage = (esperienzaMissione / esperienzaMax) * 100;
    var exp_session;
    const gold_rate = [0.01, 0.015, 0.02, 0.025, 0.03, 0.04, 0.05, 0.06, 0.075, 0.1, 0.125, 0.15, 0.175, 0.2, 0.25, 0.3, 0.4, 0.5, .75, .1];
    
    const rowHTML = `
        <table>
            <tr>
                <th>Percentuale difficoltà</th>
                <th>Rating Oggetti</th>
                <th>Oro</th>
            </tr>
            <tr>
                <td>${percentage.toFixed(2)}%</td>
                <td>${(sessioni * livello * percentage / 100).toFixed(0)}</td>
                <td>${gold_rate[livello - 1] * avventurieri * esperienzaMissione}</td>
            </tr>
        </table>
    `;
    document.getElementById('statistiche').innerHTML = rowHTML;
    /*document.getElementById('statistiche').innerHTML = `
        <label for="row"> Percentuale difficoltà | Rating Oggetti | Oro </label><br>
        <label for="values"> ${percentage}% | ${sessioni*livello*percentage/100}    | ${gold_rate[livello-1]*avventurieri*esperienzaMissione} </label>
    `;*/
}