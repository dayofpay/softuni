function start(names){
    let regex =/\b[A-Z][a-z]{1,}[ ][A-Z][a-z]{1,}\b/g;
    let result = names.match(regex);

    console.log(result.join(' '));
}
start("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");