var tourist = prompt("Qual seu nome turista?");

var visitedCity = "";
var numOfCities = 0;
var response = prompt("Você visitou alguma cidade? (s/n)");

while (response === 's') {
    var city = prompt("Qual é o nome da cidade visitada?");
    
    if (numOfCities === 0) {
        visitedCity = "- " + city;
    } else {
        visitedCity += "\n- " + city;
    }
    
    numOfCities++;
    
    response = prompt("Você visitou alguma outra cidade? (s/n)");
}

console.log("Turista: " + tourist);
console.log("Quantidade de cidades visitadas: " + numOfCities);

if (numOfCities > 0) {
    console.log("Cidades visitadas:\n" + visitedCity);
} else {
    console.log("Nenhuma cidade visitada.");
}