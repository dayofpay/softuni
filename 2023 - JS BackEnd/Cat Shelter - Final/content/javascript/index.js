// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    console.log('Loading data ...');
    
    // Your code here
    
    let mainData = document.getElementsByTagName('main')[0];

    mainData.style.visibility = 'hidden';
    let getContent = mainData.innerHTML;

    mainData.style.visibility = 'visible';
    mainData.innerHTML = '<p>Loading ...</p>';

    setTimeout(function () {
        mainData.style.visibility = 'visible';
        mainData.innerHTML = getContent;
    }, 1000); // 1000 milliseconds (1 second)
});
