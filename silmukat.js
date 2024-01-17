var puhelimet = ["One plus", "IPhone", "Samsung", "Nokia", "Huavei"]

for (let i = 0; i < puhelimet.length; i++) {
    console.log("Puhelin" + (i+1) + ":" + puhelimet [i])
}

puhelimet.forEach(p =>
    
    console.log("Puhelin :" + p)


)

puhelimet.map(p =>
    
    console.log("Puhelin :" + p)

)