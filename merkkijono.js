const email = "akseli.vonkumula@yritysoy.fi"

var nimiOsat = email.split('@') [0].split('.')
var etunimi = nimiOsat [0]
var sukunimi = nimiOsat [1]

console.log("Etunimi: " + etunimi)
console.log("Sukunimi: " + sukunimi)

if (sukunimi.indexOf("von") > -1) {
    console.log("Käyttäjä on aatelinen.")
}