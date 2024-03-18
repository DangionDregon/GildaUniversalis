const idSezioni = ['home', 'crea_una_missione', 'bacheca_missioni', 'risorse'];

function mostaSezioneIndex(indexSezione) {
	mostraSezione(idSezione[indexSezione]);
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
    const gold_rate = [0.033, 0.033, 0.033, 0.034, 0.035, 0.036, 0.036, 0.036, 0.037, 0.038, 0.04, 0.045, 0.05, 0.055, 0.06, 0.07, 0.08, 0.09, .1, .1];
    
    
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
}
