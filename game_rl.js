
 

console.clear();


const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

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
        };
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
    { name: 'Player 1', points: 0 },
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
      //namen vergeben
     rl.question('Spieler 1, wie ist dein Name? ', (answer) => 
     {
      players[0].name = answer;
      console.log(`Willkommen ${players[0].name}`);
      
      rl.question('Spieler 2, wie ist dein Name? ', (answer) => 
      {
        players[1].name = answer;
        console.log(`Willkommen ${players[1].name}`);
        // Duell beginnt
        console.log();
        console.log(`Das Duell beginnt!`);
        console.log();
        //karten anzeigen
        console.log(`Karten von ${players[0].name}`);
        console.log('---------------------')
        for (let i = 0; i < cards_player1.length; i++) {
          console.log(cards_player1[i].name);
        }
        console.log();
        console.log(`Karten von ${players[1].name}`);
        console.log('---------------------')
        for (let i = 0; i < cards_player2.length; i++) {
          console.log(cards_player2[i].name);
        }

        console.log();
        // Info zum mischen
        console.log('Eure Karten werden gemischt. Ihr spielt mit der obersten Karte auf euren Deck!');

        console.log();
        //zufällige karte wählen spieler 1
        const rdmIndex = Math.floor(Math.random() * cards_player1.length);
        const selectedCard = cards_player1.splice(rdmIndex, 1)[0];
        console.log(`${players[0].name} spielt mit ${selectedCard.name}`);

        //zufällige karte wählen spieler 2
        const rdmIndex2 = Math.floor(Math.random() * cards_player2.length);
        const selectedCard2 = cards_player2.splice(rdmIndex2, 1)[0];
        console.log(`${players[1].name} spielt mit ${selectedCard2.name}`);

        let eigenschaftSp1, eigenschaftSp2;
        getEigenschaft = () =>
        {
          rl.question(`${players[0].name} du startest. Mit welcher Eigenschaft gehst du ins Duell? `, (answer) => {
            const choosenEigenschaft = answer;
  
            eigenschaftSp1 = selectedCard[choosenEigenschaft];
            eigenschaftSp2 = selectedCard2[choosenEigenschaft];
            rl.close();
          })
        }
        
          
          const kampf = () => {
            if (eigenschaftSp1 < eigenschaftSp2) 
              {
                players[1].points ++;
                console.log(`Diese Runde gewinnt ${players[1].name} mit ${selectedCard2.name}. Das Haus ${selectedCard2.haus} erhält einen Punkt`);
              } else if (eigenschaftSp1 > eigenschaftSp2) 
              {
                players[0].points ++;
                console.log(`Diese Runde gewinnt ${players[0].name} mit ${selectedCard.name}. Das Haus ${selectedCard.haus} erhält einen Punkt`);
            }; 
          };
          kampfRunde = () =>
          {
            while (cards_player1.length > 0) 
            {
              getEigenschaft();
              kampf();
            }
          };
          
        });
        });
        
    
    