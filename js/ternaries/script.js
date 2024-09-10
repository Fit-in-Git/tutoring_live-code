// Ternary Operator
// Ist eine kurze Version von If Else statements

// Syntax: condition ? expression1 : expression2
//                       true          false

// Wenn die Bedingung wahr ist, wird expression1 ausgeführt, wenn nicht, wird expression2 ausgeführt

// Beispiel mit Zahl:

let number = 5;
let result = number > 3 ? "Greater than 3" : "Smaller than 3";

// ist das gleiche wie
/*

 if (number > 3) {
  result = "Greater than 3";   <--- Kannst hier reinschreiben was du möchtest (Code)
} else {
  result = "Smaller than 3";
}

 */

console.log(result); // Ausgabe: Greater than 3

// Beispiel mit negativer Zahl:

let negNumber = -2;
let checkNegative = negNumber < 0 ? "Negative" : "Positive";

console.log(checkNegative); // Ausgabe: Negative

// Verkettung von Ternary Operatoren (mehrere Bedingungen)
// Mehrere ternary operators hintereinander verwenden, um mehr Bedingungen abzudecken

let age = 20;
let ageGroup = age < 13 ? "Child" : age < 18 ? "Teen" : "Adult";

console.log(ageGroup); // Ausgabe: Adult

// Wenn age kleiner als 13 ist, ist das Ergebnis "Kind",
// wenn age kleiner als 18, aber größer oder gleich 13 ist, ist das Ergebnis "Jugendlicher",
// sonst ist es "Erwachsener".

// Ternary Operator mit boolschen Werten (true oder false)

let isRaining = true;

let weather = isRaining ? "Take an umbrella" : "Leave umbrella at home";

console.log(weather); // Ausgabe: Take an umbrella

// Wenn man mehrere ternaries in einer Zeile verwendet kann das schwer lesbar werden

let temperature = 20;
// let tempCheck = (temperture > 30) ? "Hot" : (temperture > 20) ? "Warm" : (temperture > 10) ? "Cool" : (temperture > 0) ? "even colder" : (temperature < 0) ? "Freezing" : (temperature < -10) ? "Super cold" : "I don't know";

let tempCheck =
  temperature > 30
    ? "Hot"
    : temperature > 20
    ? "Warm"
    : temperature > 10
    ? "Cool"
    : temperature > 0
    ? "even colder"
    : temperature < 0
    ? "Freezing"
    : temperature < -10
    ? "Super cold"
    : `I don't know what ${temperature} means`;

console.log(tempCheck); // Ausgabe: Cool


// Ternary ohne Zuweisung an eine Variable

let loginStatus = true;
let msg;

loginStatus ? msg = "Logged in" : msg = "Logged out";

console.log(msg); // Ausgabe: Logged in


// "React"-Reallife Beispiel

// let isDarkMode = true;
// <DivContainer className={isDarkMode ? "dark" : "light"} />

// Ternary wie einen gesprochenen Satz lesen

// (ist) loginStatus (true) ? (wenn ja, dann) msg = "Logged in" : (wenn nicht, dann) msg = "Logged out";

