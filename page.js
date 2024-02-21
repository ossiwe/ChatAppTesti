

function palvelut(){
    let palvelut = `<h2>Palvelumme</h2>   
            <p>Palvelimet</p>
            <p>Kotisivut</p>
            <p>Chat</p>
    `
    document.getElementById("sisältö").innerHTML = palvelut
}




function yhteystiedot(){
    document.getElementById("sisältö").innerHTML = ""
    var otsikko = document.createElement("h2")
    var teksti = document.createTextNode("Yhteystiedot")
    otsikko.appendChild(teksti)
    var sisältö = document.getElementById("sisältö")
    sisältö.appendChild(otsikko)

    var puhelin = document.createElement("p");
    var puhTeksti = document.createTextNode("Puhelin: 066606969")
    puhelin.appendChild(puhTeksti);
    sisältö.appendChild(puhelin)

    var osoite = document.createElement("p");
    var osoiteTeksti = document.createTextNode("Osoite: Kalmankatu 6, 06660 Tuonela");
    osoite.appendChild(osoiteTeksti);
    sisältö.appendChild(osoite);

    var sahkoposti = document.createElement("p");
    var sahkopostiTeksti = document.createTextNode("Sähköposti: asiakaspalvelu@asd.fi");
    sahkoposti.appendChild(sahkopostiTeksti);
    sisältö.appendChild(sahkoposti);

}


function henkilosto() {
    fetch('/henkilosto.json')  // Hakee henkilöstötiedot JSON-tiedostosta
        .then(response => response.json())
        .then(data => {
            let henkilostoHTML = '<h2>Henkilöstö</h2><ul style="list-style-type:none;">';
            data.forEach(person => {
                henkilostoHTML += `<li>${person.tehtava}: <br> ${person.nimi} - ${person.Sähköpostiosoite}</li><br>`;
            });
            henkilostoHTML += '</ul>';
            document.getElementById("sisältö").innerHTML = henkilostoHTML;
        })
        .catch(error => {
            console.error('Virhe henkilöstötietoja haettaessa:', error);
        });
}




