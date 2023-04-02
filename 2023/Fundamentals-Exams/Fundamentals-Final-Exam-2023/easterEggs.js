function start(str) {
  const regex = /[@#]+[a-z]{3,}@*[^a-z\d]*\/\d+\//g;
  const matches = str[0].match(regex);
  if (!matches) return [];
  const eggs = matches.reduce((result, match) => {
    const color = match.match(/[a-z]+/)[0];
    const amount = match.match(/\d+/)[0];
    result.push({ color, amount });
    return result;
  }, []);
    eggs.forEach((egg) => {
      console.log(`You found ${egg.amount} ${egg.color} eggs!`);
    });
}


start(['@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/']);
