function start(inputData) {
    let players = new Map();

    let cardPowerEnum = {
        "2" : 2,
        "3" : 3,
        "4" : 4,
        "5" : 5,
        "6" : 6,
        "7" : 7,
        "8" : 8,
        "9" : 9,
        "10" : 10,
        "J" : 11,
        "Q" : 12,
        "K" : 13,
        "A" : 14,
    }

    let cardTypeEnum = {
        "S" : 4,
        "H" : 3,
        "D" : 2,
        "C" : 1,
    }
    for (let line of inputData) {
        let [playerName, cards] = line.split(": ");

        if (!players.has(playerName)) {
            players.set(playerName, new Set());
        }
        let theCards = cards.split(", ");

        for (let card of theCards) {
            players.get(playerName).add(card);
        }
    }


    for(let playerInfo of Array.from(players)){
        let sum = 0;

        for(let card of Array.from(playerInfo[1])){
            let cardInfo = card.split("");
            let powerAsString = cardInfo.splice(0,cardInfo.length - 1).join("");
            let typeAsString = cardInfo[cardInfo.length -1];
            let power = cardPowerEnum[powerAsString];
            let type = cardTypeEnum[typeAsString];
            sum+=Number(power * type);
        }
        console.log(playerInfo[0] + ": " + sum);
    }
}
start([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);