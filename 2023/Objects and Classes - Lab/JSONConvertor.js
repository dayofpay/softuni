function jsonConvert(name,lastName,hairColor){

    let personData = {name : name,lastName:lastName,hairColor: hairColor}

    console.log(JSON.stringify(personData));
}
jsonConvert('George', 'Jones', 'Brown');