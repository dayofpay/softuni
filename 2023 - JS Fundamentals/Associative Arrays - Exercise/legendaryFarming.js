function start(input) {
    const materials = {
        shards: 0,
        fragments: 0,
        motes: 0,
    };
    const legendaryItems = {
        Shadowmourne: "shards",
        Valanyr: "fragments",
        Dragonwrath: "motes",
    };
    const junkItems = {};

    const inputItems = input.split(" ");
    for (let i = 0; i < inputItems.length; i += 2) {
        const quantity = Number(inputItems[i]);
        const item = inputItems[i + 1].toLowerCase();

        if (materials.hasOwnProperty(item)) {
            materials[item] += quantity;
            if (materials[item] >= 250) {
                materials[item] -= 250;
                let legendaryItem = "";
                for (let itemData of Object.entries(legendaryItems)) {
                    if (item === itemData[1]) {
                        ;
                        legendaryItem = itemData[0];
                    }
                }
                console.log(`${legendaryItem} obtained!`);
                const sortedMaterials = Object.entries(materials)
                    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
                sortedMaterials.forEach((material) => {
                    console.log(`${material[0]}: ${material[1]}`);
                });
                Object.keys(junkItems)
                    .sort((a, b) => a.localeCompare(b))
                    .forEach((key) => {
                        console.log(`${key}: ${junkItems[key]}`);
                    });
                return;
            }
        } else {
            if (!junkItems.hasOwnProperty(item)) {
                junkItems[item] = 0;
            }
            junkItems[item] += quantity;
        }
    }

    return;
}

start('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');