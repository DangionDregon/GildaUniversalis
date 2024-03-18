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
    
    var exp_session;
    switch (livello) {
        case 1: exp_session = 300; break;
        case 2: exp_session = 600; break;
        case 3: exp_session = 1200; break;
        case 4: exp_session = 1700; break;
        case 5: exp_session = 3500; break;
        case 6: exp_session = 4000; break;
        case 7: exp_session = 5000; break;
        case 8: exp_session = 6000; break;
        case 9: exp_session = 7500; break;
        case 10: exp_session = 9000; break;
        case 11: exp_session = 10500; break;
        case 12: exp_session = 11500; break;
        case 13: exp_session = 13500; break;
        case 14: exp_session = 15000; break;
        case 15: exp_session = 18000; break;
        case 16: exp_session = 20000; break;
        case 17: exp_session = 25000; break;
        case 18: exp_session = 27000; break;
        case 19: exp_session = 30000; break;
        case 20: exp_session = 40000; break;
        default: exp_session = 0;
    }
    
    var esperienza_max = avventurieri * sessioni * exp_session;
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
