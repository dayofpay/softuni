function start(input){
    let inputData = input[0];
    let pointer = 0;
    while(input[pointer] != "Stop"){
        console.log(`${input[pointer]}`);
        pointer++;
    }
}
start((["Nakov",
"SoftUni",
"Sofia",
"Bulgaria",
"SomeText",
"Stop",
"AfterStop",
"Europe",
"HelloWorld"]));