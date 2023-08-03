function start(stringArray){
    let split = stringArray[0].split(" ");
    for(let x = 0;x<split.length;x++){
        if(String(split[x]).startsWith("_")){
            // console.log(split[x]);
            let length = split[x].length;
            for(let findLength = 0;findLength < stringArray[1].length;findLength++){
                if(stringArray[1][findLength].length === length){
                    if(String(split[x]).startsWith("_") && String(split[x]).endsWith("_")){
                        split[x] = String(split[x]).replace("_".repeat(length),stringArray[1][findLength]);
                    }
                    // else if(endsWith(",")){
                    //     split[x] = String(split[x]).replace("_".repeat(length-3),stringArray[1][findLength]);
                    // }
                    // else if(endsWith(".")){
                    //     split[x] = String(split[x]).replace("_".repeat(length-3),stringArray[1][findLength]);
                    // }
                }
                else if(stringArray[1][findLength].length+1===length){
                    if(String(split[x]).startsWith("_") && String(split[x]).endsWith(".")){
                        split[x] = String(split[x]).replace("_".repeat(length-1)+".",stringArray[1][findLength]+".");
                    }
                    else if(String(split[x]).startsWith("_") && String(split[x]).endsWith(",")){
                        split[x] = String(split[x]).replace("_".repeat(length-1)+",",stringArray[1][findLength]+",");
                    }

                }
            }
        }
    }
    console.log(split.join(" "));
}
start(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
);