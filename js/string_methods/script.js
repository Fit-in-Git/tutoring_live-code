// In diesem Beispiel beginnen wir mit einer einfachen Zeichenkette
let str = "Hello"; // Die Variable 'str' enthält den String "Hello".

// Einzelne Zeichen im String können wie ein Array von Zeichen betrachtet werden:
// H e l l o   (Die Zeichen)
// 1 2 3 4 5   (Die Positionen, wenn man von 1 aus zählt - dies entspricht der Länge)
// 0 1 2 3 4   (Die Indexe - wenn man von 0 zählt, da JavaScript Array-Indexe bei 0 beginnen)

// 1. Länge eines Strings (String.length)

// Die Eigenschaft '.length' gibt die Anzahl der Zeichen in einem String zurück.
console.log(str.length); // Ausgabe: 5, weil "Hello" 5 Zeichen hat.

// Zugriff auf das letzte Zeichen eines Strings
// Da der Index eines Arrays bei 0 beginnt, ist das letzte Zeichen bei str.length - 1
const lastChar = str[str.length - 1]; // Greift auf das letzte Zeichen des Strings zu, indem die Länge des Strings minus 1 verwendet wird.
console.log(lastChar); // Ausgabe: "o", das letzte Zeichen von "Hello".

// Umwandlung von Buchstaben in Groß- und Kleinschreibung

// Die Methode .toUpperCase() wandelt alle Zeichen eines Strings in Großbuchstaben um.
const str1 = "hello"; // Ein neuer String "hello" in Kleinbuchstaben.
console.log(str1.toUpperCase()); // Ausgabe: "HELLO" - alle Buchstaben werden in Großbuchstaben konvertiert.

// Die Methode .toLowerCase() wandelt alle Zeichen eines Strings in Kleinbuchstaben um.
const str2 = "HelLO"; // Ein gemischter Fall von Groß- und Kleinbuchstaben.
console.log(str2.toLowerCase()); // Ausgabe: "hello" - alle Buchstaben werden in Kleinbuchstaben konvertiert.

// Extrahieren von Teilen eines Strings mit .slice()

// Die Methode .slice() extrahiert einen Teil eines Strings, basierend auf dem Start- und Endindex.
const str3 = "Guten Tag"; // Ein String "Guten Tag".
console.log(str3.slice(3, 7)); // Ausgabe: "en T", die Zeichen von Index 3 bis 7 (nicht inklusive 7).

// Überprüfen, ob ein String eine Teilzeichenkette enthält, mit .includes()

// Die Methode .includes() überprüft, ob eine bestimmte Zeichenfolge in einem String enthalten ist, und gibt true oder false zurück.
const str4 = "Hola!"; // Ein String "Hola!".
console.log(str4.includes("ol")); // Ausgabe: true, da "ol" in "Hola!" enthalten ist.

// Arbeiten mit Objekten und Arrays

// Hier haben wir ein Array von Objekten, das Karten in einem Deck repräsentiert.
const deck = [
  {
    value: 1, // Die erste Karte hat den Wert 1.
    farbe: "Herz", // Ihre Farbe ist "Herz".
  },
  { value: 2, farbe: "Pik" }, // Die zweite Karte hat den Wert 2 und die Farbe "Pik".
];

// Überprüfen, ob ein bestimmtes Objekt im Deck enthalten ist

// Beachte: deck.includes({ value: 1, farbe: "Herz" }) wird false zurückgeben, weil includes auf Objekte nur funktioniert, wenn sie genau dasselbe Objekt sind. 
// Hier vergleichen wir aber ein neues Objekt mit einem vorhandenen, das intern nicht als gleich betrachtet wird.
let message = "Game Over"; // Eine Nachricht "Game Over", die später verwendet wird.

if (!deck.includes({ value: 1, farbe: "Herz" })) {
  // Dieser if-Block wird ausgeführt, weil includes bei Objekten nicht wie erwartet funktioniert.
  console.log(
    `${deck[0].farbe} ${deck[0].value} ist nicht mehr im Spiel! ${message}`
    // Der Ausdruck gibt die Nachricht aus, wenn die Herz 1 Karte nicht gefunden wird.
    // Ausgabe: "Herz 1 ist nicht mehr im Spiel! Game Over"
  );
}
