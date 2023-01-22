function type(data){
    if(typeof data !== null){
        console.log(typeof data);
        console.log(data);
    }
    else if(typeof data === null){
        console.log(typeof data);
        console.log('Parameter is not suitable for printing');
    }
}
type(null);