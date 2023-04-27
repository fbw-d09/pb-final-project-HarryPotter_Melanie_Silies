console.clear();

class Witcher
{
    constructor(name, zauberkraft, cleverness, mut, weisheit, temperament, zorn, haus, tier)
    {
        this.name = name;
        this.zauberkraft = zauberkraft;
        this.cleverness = cleverness;
        this.mut = mut;
        this.weisheit = weisheit;
        this.temperament = temperament;
        this.zorn = zorn;
        this.haus = haus;
        this.tier = tier;

        this.tierStaerke = {
            'Eule': 4,
            'Katze': 3,
            'Ratte': 2,
            'Kröte': 1
        }
        this.hauspunkte = {
            'Gryffindor': 0,
            'Slytherin': 0,
            'Ravenclaw': 0,
            'Hufflepuff': 0
        }
    }
}

// Gryffindor Schüler
const harry = new Witcher('Harry Potter', 95, 80, 95, 60, 40, 20, 'Gryffindor', 'Eule');
const ron = new Witcher('Ron Wheasly', 50, 30, 30, 50, 70, 10, 'Gryffindor', 'Ratte');
const hermine = new Witcher('Hermine Granger', 90, 90, 85, 90, 50, 10, 'Gryffindor','Katze');
const neville = new Witcher('Neville Longbottom', 60, 80, 85, 70, 50, 50, 'Gryffindor','Kröte');

// Slytherin Schüler
const draco = new Witcher('Draco Malfoy', 85, 60, 70, 60, 90, 70, 'Slytherin', 'Eule');
const vincent = new Witcher('Vincent Crabbe', 55, 40, 30, 50, 80, 60, 'Slytherin', 'Kröte');
const gregory = new Witcher('Gregory Goyle', 60, 45, 40, 40, 50, 40, 'Slytherin', 'Katze');
const millicent = new Witcher('Millicent Bulstrode', 60, 45, 40, 40, 50, 40, 'Slytherin', 'Katze');

// Ravenclaw Schüler
const cho = new Witcher('Cho Chang', 80, 65, 80, 90, 30, 30, 'Ravenclaw', 'Katze');
const padma = new Witcher('Padma Patil', 40, 75, 50, 70, 25, 10, 'Ravenclaw', 'Ratte');
const terry = new Witcher('Terry Boot', 70, 35, 60, 75, 55, 60, 'Ravenclaw', 'Kröte');
const luna = new Witcher('Luna Lovegood', 70, 80, 70, 95, 20, 10, 'Ravenclaw', 'Katze');


// Huffelpuff Schüler
const hannah = new Witcher('Hannah Abbott', 80, 80, 70, 65, 10, 30, 'Hufflepuff', 'Eule');
const susan = new Witcher('Susan Bones', 40, 60, 30, 65, 70, 50, 'Hufflepuff', 'Ratte');
const wayne = new Witcher('Wayne Hopkins', 50, 30, 55, 55, 30, 60, 'Hufflepuff', 'Ratte');
const cedric = new Witcher('Cedric Diggory', 90, 70, 85, 65, 80, 40, 'Hufflepuff', 'Ratte');


const players = [
    { name: 'Melli', points: 0 },
    { name: 'Player 2', points: 0 },
  ];

  
   const cards = [harry, ron, hermine, neville, draco, vincent, gregory, millicent, cho, padma, terry, luna, hannah, susan, wayne, cedric];

   let cards_player1 = [];
   let cards_player2 = [];

   //Karte zufällig auswählen, bis alle verteilt sind
   while (cards.length > 0)
  {
    const rdmIndex = Math.floor(Math.random() * cards.length);
    //die zufällige karte herausnehmen
    const card = cards.splice(rdmIndex, 1)[0];
    //und abwechselnd aufteilen
    if (cards_player1.length < cards.length) {
        cards_player1.push(card);
      } else {
        cards_player2.push(card);
      }
      
  }
console.log();
console.log('========START========');
console.log();


// Namen der Karten von Spieler 1
console.log('Karten von Spieler 1:');
for (let i = 0; i < cards_player1.length; i++) {
  console.log(cards_player1[i].name);
}

console.log();

// Namen der Karten von Spieler 2
console.log('Karten von Spieler 2:');
for (let i = 0; i < cards_player2.length; i++) {
  console.log(cards_player2[i].name);
}

console.log();
  
  kampf = (eigenschaft, schueler1, schueler2, players) => {
    if (schueler1[eigenschaft] > schueler2[eigenschaft]) {
        players[0].points ++ && players[0].hauspunkte ++;
        return `Diese Runde gewinnt ${players[0].name} mit ${schueler1.name}. Das Haus ${schueler1.haus} erhält einen Punkt`;
    } 
    else if (schueler1[eigenschaft] < schueler2[eigenschaft]) {
        players[1].points ++;
        return `Diese Runde gewinnt${players[1].name} mit ${schueler2.name}. Das Haus ${schueler2.haus} erhält einen Punkt`;
    } 
    else if (schueler1[eigenschaft] === schueler2[eigenschaft]) {
        // Wenn die Werte gleich sind, vergleiche die Tierstärken
        if (schueler1.tierStaerke[schueler1.tier] > schueler2.tierStaerke[schueler2.tier]) {
        players[0].points++;
          return `Diese Runde gewinnt${players[0].name} mit ${schueler1.name} aufgrund des Tieres. Das Haus ${schueler1.haus} erhält einen Punkt`;
        } else if (schueler1.tierStaerke[schueler1.tier] < schueler2.tierStaerke[schueler2.tier]) {
        players[1].points++;
        return `Diese Runde gewinnt ${players[1].name} mit ${schueler2.name} aufgrund des Tieres. Das Haus ${schueler2.haus} erhält einen Punkt`;
        } // Wenn auch die Tierstärken gleich sind, vergleiche die Hauspunkte 
        else if (schueler1.tierStaerke[schueler1.tier] === schueler2.tierStaerke[schueler2.tier]){
            if (schueler1.hauspunkte[schueler1.haus] > schueler2.hauspunkte[schueler2.haus]) {
                players[0].points++;
                return `Diese Runde gewinnt ${players[0].name} mit ${schueler1.name} aufgrund der Hauspunkte`;
              } else if (schueler1.hauspunkte[schueler1.haus] < schueler2.hauspunkte[schueler2.haus]) {
                players[1].points++;
                return `Diese Runde gewinnt ${players[1].name} mit ${schueler2.name} aufgrund der Hauspunkte`;
              } else {return `Diese Runde endet unentschieden.`}
        }
        }
     
    else if(players[0].points =10) {
        return `Das Spiel ist vorbei. Spieler 1 hat gewonnen!!!`
    }
    else if(players[1].points =10) {
        return `Das Spiel ist vorbei. Spieler 2 hat gewonnen!!!`
    } 
} 
  


  // const round1 = kampf('zauberkraft', harry, draco, players);
  // console.log(round1);
  // console.log(players[0].name, players[0].points, players[1].points, players[1].name);

  // const round2 = kampf('?', ?, ?, players);
  // console.log(round2);
  // console.log(players[0].name, players[0].points, players[1].points, players[1].name);

  // const round3 = kampf('?', ?, ?, players);
  // console.log(round3);
  // console.log(players[0].name, players[0].points, players[1].points, players[1].name);

  // const round4 = kampf('?', ?, ?, players);
  // console.log(round4);
  // console.log(players[0].name, players[0].points, players[1].points, players[1].name);



 
  
  
 
  