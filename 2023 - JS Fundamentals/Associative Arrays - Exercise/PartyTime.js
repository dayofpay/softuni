function start(inputData) {
    const guests = { vip: new Map(), regular: new Map() };
    const partyIndex = inputData.indexOf("PARTY");
  
    for (let i = 0; i < partyIndex; i++) {
      const guest = inputData[i];
      if (parseInt(guest[0])) {
        guests.vip.set(guest, true);
      } else {
        guests.regular.set(guest, true);
      }
    }
  
    const partyGuests = new Set(inputData.slice(partyIndex + 1));
    const dataGuests = [...guests.vip.keys(), ...guests.regular.keys()].filter(guest => !partyGuests.has(guest));
  
    console.log(dataGuests.length);
    console.log(dataGuests.join("\n"));
  }
  
  start(['m8rfQBvl',
  'fc1oZCE0',
  'UgffRkOn',
  '7ugX7bm0',
  '9CQBGUeJ',
  '2FQZT3uC',
  'dziNz78I',
  'mdSGyQCJ',
  'LjcVpmDL',
  'fPXNHpm1',
  'HTTbwRmM',
  'B5yTkMQi',
  '8N0FThqG',
  'xys2FYzn',
  'MDzcM9ZK',
  'PARTY',
  '2FQZT3uC',
  'dziNz78I',
  'mdSGyQCJ',
  'LjcVpmDL',
  'fPXNHpm1',
  'HTTbwRmM',
  'B5yTkMQi',
  '8N0FThqG',
  'm8rfQBvl',
  'fc1oZCE0',
  'UgffRkOn',
  '7ugX7bm0',
  '9CQBGUeJ'
  ]
  );
  