/* Uppgift 2 - Variabler och scope */

/*console.log(flower). Fungerar inte då console.log() ligger före blocket, där inget är definierat */ 
let flower = 'Ros'; {
} 

const carName = 'Scania'; {
    console.log(carName)
}

var djur = 'Häst'; {
} 
console.log(djur)

/* Reflektion uppgift 2
1. Beskriver hur var, let och const skiljer sig gällande block.
Let och const deklarerar bara inom block för de är blockscoped. Var är inte blockscoped utan ett funktionscope och kan nås utanför blocket.

2. Reflekterar över vad som händer vid olika placering av console.log() (före blocket, i blocket, efter blocket). 
Lägger man console.log() före blocket så fungerar inte den kod-delen. Finns console.log() i blocket eller efter 
så fungerar den precis som den ska, att skriva ut i konsolen.
*/


/* Uppgift 3 - Jämförelser och specialvärden */
   
console.log('6' == 6)
console.log('6' === 6)

console.log(NaN === NaN)
console.log(null == undefined)
console.log(null === undefined)
console.log(undefined ? 'truthy' : 'falsy');

/* Reflektion uppgift 3
1. Förklarar output för de olika värdena som du testade med == och === och på vilket sätt de skiljer sig åt.
'6' == 6 -> true. Denna gör en typkonvertering, alltså gör strängen '6' till en siffra.
'6' === 6 -> false. Denna gör en strikt konvertering, alltså jämför sträng med tal och inser att de inte är lika.
NaN === NaN -> false. NaN kan aldrig vara lika med sig själv. 
null == undefined -> true. Båda betyder "inget värde" så med en typkonvertering så definieras de som lika.
null === undefined -> false. Med strikt konvertering läses dessa av som olika typer så då blir det false.
undefined ? 'truthy' : 'falsy' -> falsy. 

== är typkovertering och omvandlar alltid så datayperna är lika, medans === är mer strikt och ändrar inga datatyper.
Är datatyperna olika så returneras false.


2. Förklarar vad som händer när ett uttryck står för sig självt i exempelvis en tenerary operator eller inom parenteserna hos en if-sats.
När de står för sig själva så måste de anta true eller false. 

3. Förklarar vad NaN, undefined och null representerar. 
Null är ett primitivt värde som representerar objektets frånvaro. Undefined är en primitiv variabel utan tilldelat värde.
NaN står för "Not a Number" och är alltså inget tal.
*/


/* Uppgift 4 - Funktioner */

function greet(name) {
    return 'Hej ' +  name;
}
const greetValue = greet('Veronica')
console.log(greetValue)

let name = "Varg"
console.log(name)

/* Reflektion uppgift 4
1. Beskriver skillnaden mellan de olika sätten att skapa en funktion (funktionsdeklaration, funktionsuttryck och arrowfunktion), samt varför du valde den varianten som du valde.
Funktionsdeklaration kan anropas innan den definiserats i kod, funktionsuttryck kan enbart anropas efter skpande och arrowfunktion har en kort syntax och måste definieras innan
de används.

2. Reflekterar över vad du behöver tänka på gällande varifrån du kan anropa dina funktioner (innan/efter funktionerna har skapats).
Det går bara att anropa funktionen efter att den skapats. Försöker man göra det innan så finns det inget att anropa så det blir error. 

3. Förklararar vad som händer om du ändrar variabeln/parametern name i de olika situationerna och hur det påverkar utskrifterna på de olika ställena i koden.
Om jag byter ut name på alla ställen till t.ex. kaka så blir utskrifterna fortafarnde lika som innan då kaka bara är en parameter/variabel som har samma värde
som innan vilket är Veronica och banan i detta fall. 

4. Förklarar skillnaden mellan parameter, variabel och argument. 
Variabel är något som kan anta ett värde vad som helst. Parameter är namn på värden som blivit inskickade i en funktion. 
Värden som skickas inom paranteser vid anrop av funktion kallas för argument.*/