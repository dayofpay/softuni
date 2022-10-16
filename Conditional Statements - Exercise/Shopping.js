function start(input){

    let budget = Number(input[0]);


    let videoCard = Number(input[1]);


    let processor = Number(input[2]);


    let ram = Number(input[3]);


    let totalSum = 0;


    let discountSum = 0;


    let videoCardPrice = 0;


    let processorPrice = 0;


    let ramPrice = 0;


    if(videoCard > processor){

        videoCardPrice = videoCard * 250;

        
        processorPrice = processor * (videoCardPrice * 35) / 100;


        ramPrice = ram * (videoCardPrice * 10) / 100;


        totalSum = videoCardPrice + processorPrice + ramPrice;


        discountSum = (totalSum * 15) / 100;


        totalSum-=discountSum;

    }
    else{
        videoCardPrice = videoCard * 250;

        
        processorPrice = processor * (videoCardPrice * 35) / 100;


        ramPrice = ram * (videoCardPrice * 10) / 100;


        totalSum = videoCardPrice + processorPrice + ramPrice;
    }


    if(totalSum > budget){
        console.log(`Not enough money! You need ${(totalSum - budget).toFixed(2)} leva more!`);
    }


    else{
        console.log(`You have ${(budget - totalSum).toFixed(2)} leva left!`);
    }
}
start(["900",
"2",
"1",
"3"])