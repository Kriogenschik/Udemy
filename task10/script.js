const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
    languages: ["ru", "eng"],
    programmingLangs: {
      js: "20%",
      php: "10%",
    },
    exp: "1 month",
  },
  showAgeAndLangs: function (plan) {
    const lang = plan.skills.languages.join(" ");
    console.log(`Мне ${plan.age} и я владею языками: ${lang.toUpperCase()}`);
  },
};

function showExperience(plan) {
  const skills = plan.skills;
  return skills.exp;
}

function showProgrammingLangs(plan) {
  const progLang = plan.skills.programmingLangs;
  let result = "";
  for (let key in progLang) {
    result += `Язык ${key} изучен на ${progLang[key]}\n`;
  }
  console.log(result);
}
