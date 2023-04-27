# pb-final-project-HarryPotter_Melanie_Silies

## Harry Potter Top Trumps Spiel zum spielen im Terminal

### Spielregeln

- starte mit "nodemon game.js" ENTER

- du siehst in der konsole wem welche Karten gehören

- tippe am ende der Javascript Datei folgendes, um einen Kampf zu starten:
##### const round1 (round2, round3, ...) = kampf('Eigenschaft', witcher1, witcher2, players);

- Die Eigenschaft bestimmt welcher Wert verglichen wird.
  Die Eigenschaften, die verglichen werden können sind:
  zauberkraft, cleverness, mut, weisheit, temperament & zorn.

- witcher 1 und witcher2 sind die "Karten", die verschiedene Stärken besitzen.

- Der gewinner bekommt einen Punkt. Zeitgleich bekommt das Haus des Schülers ( Gryffindor, Slytherin, Huffelpuff, Ravenclaw) ebenfalls einen Hauspunkt.

- Sind die abgefragten Werte bei beiden Schülenrn gleich stark, gehen die Haustiere mit in den Kampf. 
  Hier gelten folgende Stärken:
  'Eule': 4
  'Katze': 3
  'Ratte': 2
  'Kröte': 1

- sind auch die Tiere gleich stark, gewinnt der Spieler mit den höheren Hauspunkten. Sollte auch dort der Wert gleich sein, ist die Runde unentschieden.

- hier die Karten, um sie immer sehen zu können:

| Name               | Zkr| Clev | Mut| Weis| Temp| Zorn | Haus| Tier |
| -------------------| ---|------| ---|-----|-----|------|-----|----- |
| Harry Potter       | 95 | 80   | 95 | 60  | 40  | 20   | Gryf| Eule |
| Ron Wheasly        | 50 | 30   | 30 | 50  | 70  | 10   | Gryf| Ratte|
| Hermine Granger    | 90 | 90   | 85 | 90  | 50  | 10   | Gryf| Katze|
| NevilleLongbottom  | 60 | 80   | 85 | 70  | 50  | 50   | Gryf| Kröte|
| Draco Malfoy       | 85 | 60   | 70 | 60  | 90  | 70   | Slyt| Eule |
| Vincent Crabbe     | 55 | 40   | 30 | 50  | 80  | 60   | Slyt| Kröte|
| Gregory Goyle      | 60 | 45   | 40 | 40  | 50  | 40   | Slyt| Katze|
| Millicent Bulstrode| 60 | 45   | 40 | 40  | 50  | 40   | Slyt| Katze|
| Cho Chang          | 80 | 65   | 80 | 90  | 30  | 30   | Rave| Katze|
| Padma Patil        | 40 | 75   | 50 | 70  | 25  | 10   | Rave| Ratte|
| Terry Boot         | 70 | 35   | 60 | 75  | 55  | 60   | Rave| Kröte|
| Luna Lovegood      | 70 | 80   | 70 | 95  | 20  | 10   | Rave| Katze|
| Hannah Abbott      | 80 | 80   | 70 | 65  | 10  | 30   | Huff| Eule |
| Susan Bones        | 40 | 60   | 30 | 65  | 70  | 50   | Huff| Ratte|
| Wayne Hopkins      | 50 | 30   | 55 | 55  | 30  | 60   | Huff| Ratte|
| Cedric Diggory     | 90 | 70   | 85 | 65  | 80  | 40   | Huff| Ratte|


#### Sammle 10 Punkte, um zu gewinnen!

beende indem du ctrl/str + C drückst!