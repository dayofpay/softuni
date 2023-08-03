function check(country){
    const English = {
        languages : ['England','USA'],
    }
    const Spanish = {
        languages : ['Spain','Argentina','Mexico'],
    }
    const Unknown = {
        data : ['unknown'],
    }
    

    let responseData_English = English.languages.some(languageSpoken => languageSpoken === country);
    let responseData_Spanish = Spanish.languages.some(languageSpoken => languageSpoken === country);
    let responseData_Unknown = Unknown.data.some(languageSpoken => languageSpoken === country);

    if(responseData_English){
        console.log('English');
    }
    else if(responseData_Spanish){
        console.log('Spanish');
    }
    else if(!responseData_Unknown){
        console.log('unknown');
    }
}

check('Germany');