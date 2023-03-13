function start(inputData) {
    let gladiators = new Map();
    let index = 0;
    let command = inputData[index];

    while (command !== "Ave Cesar") {
        let action = command.split(" -> ");

        if (action.length === 3) {
            let [name, technique, skill] = action;
            if (!gladiators.has(name)) {
                gladiators.set(name, new Map());
            }


            if (
                !gladiators.get(name).has(technique) ||
                gladiators.get(name).get(technique) < Number.parseInt(skill)
            ) {
                gladiators.get(name).set(technique, Number.parseInt(skill));
            }
        } else {
            action = command.split(" vs ");
            let [gladiator1, gladiator2] = action;


            let gladiator1Techniques = gladiators.get(gladiator1);
            let gladiator2Techniques = gladiators.get(gladiator2);

            let haveCommonTechniques = false;


            if (gladiator1Techniques && gladiator2Techniques) {
                for (let technique of gladiator1Techniques.keys()) {
                    if (gladiator2Techniques.has(technique)) {
                        haveCommonTechniques = true;
                        break;
                    }
                }
            }

            if (gladiators.has(gladiator1) &&
                gladiators.has(gladiator2) &&
                haveCommonTechniques
            ) {
                let gladiator1TotalSkill = 0;

                for (let skill of gladiator1Techniques.values()) {
                    gladiator1TotalSkill += skill;
                }

                let gladiator2TotalSkill = 0;

                for (let skill of gladiator2Techniques.values()) {
                    gladiator2TotalSkill += skill;
                }

                if (gladiator1TotalSkill > gladiator2TotalSkill) {
                    gladiators.delete(gladiator2);
                } else if (gladiator2TotalSkill > gladiator1TotalSkill) {
                    gladiators.delete(gladiator1);
                }
            }
        }

        command = inputData[++index];
    }

    let sortedGladiators = Array.from(gladiators.keys()).sort((a, b) => {
        let gladiatorASkill = 0;
        let gladiatorBSkill = 0;

        for (let skill of gladiators.get(a).values()) {
            gladiatorASkill += skill;
        }

        for (let skill of gladiators.get(b).values()) {
            gladiatorBSkill += skill;
        }

        if (gladiatorASkill !== gladiatorBSkill) {
            return gladiatorBSkill - gladiatorASkill;
        } else {
            return a.localeCompare(b);
        }
    });

    for (let gladiator of sortedGladiators) {
        let techniques = Array.from(gladiators.get(gladiator).keys()).sort((a, b) => {
                let techniqueASkill = gladiators.get(gladiator).get(a);
                let techniqueBSkill = gladiators.get(gladiator).get(b);
                if (techniqueASkill !== techniqueBSkill) {
                    return techniqueBSkill - techniqueASkill;
                } else {
                    return a.localeCompare(b);
                }
            }

        )
        console.log(`${gladiator}: ${Array.from(gladiators.get(gladiator).values()).reduce((a, b) => a + b)} skill`);
        techniques.forEach((technique) => {
            console.log(`- ${technique} <!> ${gladiators.get(gladiator).get(technique)}`);
        });
    }

}



start([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
]);