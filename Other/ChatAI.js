function initialize(text){
    let dataTypes = {
        initializedTopics : ["Chat Support","Technical Support","Orders Support"], // Example
        keyWords : ["cancel my order","i need help","doesnt work","error","is there any chat agents online"] // Example
    }
    if(dataTypes.keyWords.concat(text)){
        console.log(true)
    }else{
        console.log(false);
    }
}
initialize("");