
// Palvelut sivun näyttäminen
function palvelut() {
let palvelut = `<h2>Palvelumme<h2>
<ul>
        <li>Eläinlääkäri</li>
        <li>Päivähoito</li>
        <li>Yöhoito</li>

</ul>
`
document.getElementById("sisältö").innerHTML = palvelut

}

  //yhteystiedot 
  function yhteystiedot () {

    document.getElementById("sisältö").innerHTML = ""
    var otsikko = document.createElement("h2");
    var teksti = document.createTextNode("Yhteystiedot")
    otsikko.appendChild(teksti)
   var sisältö = document.getElementById("sisältö")
   sisältö.appendChild(otsikko)

    var puhelin = document.createElement("h4");
    var puhTeksti = document.createTextNode("P. 0401237547")
    puhelin.appendChild(puhTeksti)
    sisältö.appendChild(puhelin)
  

}

function tumma() {

    document.getElementById("sivu").style.backgroundColor = "black"
    document.getElementById("sivu").style.color = "silver"
    localStorage.setItem("teema", "tumma")
}

function pinkki() {

    document.getElementById("sivu").style.backgroundColor = "pink"
    document.getElementById("sivu").style.color = "black"
    localStorage.setItem("teema", "pinkki")
}

//Suoritetaan aina alussa, kun sivu latautuu
if  (localStorage.getItem("teema") == "tumma") {
    tumma()
}
else {
    pinkki()
}
