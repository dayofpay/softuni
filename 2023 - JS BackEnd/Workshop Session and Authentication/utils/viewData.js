exports.difficultyLevelOptionsViewData = (difficultyLevel) => {
    const titles = [
      "Very Easy",
      "Easy",
      "Medium (Standard 3x3)",
      "Intermediate",
      "Expert",
      "Hardcore",
    ];
  
    const options = titles.map((title, index) => {
      const value = index + 1;
      return {
        title: `${value} - ${title}`,
        value,
        selected: Number(difficultyLevel) === value,
      };
    });
  
    return options;
  };