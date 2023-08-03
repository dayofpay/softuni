function start(inputData){

    let file = inputData.substring(inputData.lastIndexOf("\\") +1);

    let fileName = file.substring(0,file.lastIndexOf("."));
    
    let fileExtension = file.substring(file.lastIndexOf(".") + 1);

    console.log(`File name: ${fileName}`);

    console.log(`File extension: ${fileExtension}`);
}
start("C:\\Projects\\Data-Structures\\template.bak");

// Друго по-логично решение

function start(inputData){

    let file = inputData.substring(inputData.lastIndexOf("\\") +1);

    let fileData = file.split('.');

    console.log(`File name: ${fileData[0]}`);

    console.log(`File extension: ${fileData[fileData.length -1]}`);
}