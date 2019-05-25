var counter = -1
var poprawna = ""
var alfa = ""
var header = [
  "Od którego roku przyznawana jest złota odznaka?",
  "Ile % obecności na zajęciach w pracowni macierzystej jest wymagane?",
  "Do którego roku życia można otrzymać małą odznakę?",
  "W co najmniej ilu imprezach trzeba uczestniczyć?",
  "Honorowy Wychowanek Pałacu Młodzieży nie ma prawa do:",
  "Ile osób max. wchodzi w skład Komisji Odznaki?",
  "Dyrektorem PM jest:",
  "W jakim dokumencie zapisuje się zdobywców złotej odznaki?",
  "Jak długi staż pałacowy jest wymagany?",
  "Ile jest stopni odznaki?",
  "Dyrektor,który stworzył odznakę, to:"
]
var answers = [
  ["1960", "1947", "1958", "1961", "1958"],
  ["100%", "80%", "85%", "60%", "80%"],
  ["10", "15", "14", "13", "14"],
  ["2", "1", "nie trzeba", "4", "4"],
  [
    "ulgi w porcie w pieczarkach",
    "wstępu na imprezy",
    "audiencji u dyrekcji",
    "pierwszeństwa w byciu asystentem",
    "audiencji u dyrekcji"
  ],
  ["7", "10", "8", "9", "8"],
  [
    "Urszula Wacowska",
    "Beata Szydło",
    "Ewa Kopacz",
    "Rafał Trzaskowski",
    "Urszula Wacowska"
  ],
  [
    "W złotej księdze odznaki",
    "W dzienniku ustaw RP",
    "W archiwach PM",
    "Na stronie PM",
    "W złotej księdze odznaki"
  ],
  ["1 rok", "2 lata", "3 lata", "5 lat", "3 lata"],
  ["1", "6", "5", "3", "3"],
  [
    "Bolesław Bierut",
    "Robert Mikita",
    "Jerzy Berek",
    "Urszula Wacowska",
    "Jerzy Berek"
  ]
]

function start() {
  document.getElementById("start").style.display = "none"
  counter++
  document.getElementById("query").style.display = "block"
  render(counter)
}
function render(numberOfC) {
  if (numberOfC < header.length) {
    document.getElementById("query-header").innerHTML = header[numberOfC]
    alfa = answers[numberOfC]
    document.getElementById("one").innerHTML = alfa[0]
    document.getElementById("two").innerHTML = alfa[1]
    document.getElementById("three").innerHTML = alfa[2]
    document.getElementById("four").innerHTML = alfa[3]
    poprawna = alfa[4]
  } else {
    document.getElementById("query").style.display = "none"
    document.getElementById("win").style.display = "block"
  }
}
function check(num) {
  if (alfa[num - 1] != poprawna) {
    document.getElementById("query").style.display = "none"
    document.getElementById("lose").style.display = "block"
  } else {
    counter++
    render(counter)
  }
}
