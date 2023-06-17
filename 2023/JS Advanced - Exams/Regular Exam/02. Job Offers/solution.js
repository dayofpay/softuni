class JobOffers {
    constructor(employer, position) {
      this.employer = employer;
      this.position = position;
      this.jobCandidates = [];
    }
  
    jobApplication(candidates) {
      for (const candidate of candidates) {
        const [name, education, yearsExperience] = candidate.split("-");
        const existingCandidate = this.jobCandidates.find(
          (c) => c.name === name
        );
  
        if (existingCandidate) {
          if (parseInt(yearsExperience) > existingCandidate.yearsExperience) {
            existingCandidate.yearsExperience = parseInt(yearsExperience);
          }
        } else {
          this.jobCandidates.push({
            name,
            education,
            yearsExperience: parseInt(yearsExperience),
          });
        }
      }
  
      const candidateNames = this.jobCandidates.map((c) => c.name).join(", ");
      return `You successfully added candidates: ${candidateNames}.`;
    }
  
    jobOffer(chosenPerson) {
      const [name, minimalExperience] = chosenPerson.split("-");
      const candidate = this.jobCandidates.find((c) => c.name === name);
  
      if (!candidate) {
        throw new Error(`${name} is not in the candidates list!`);
      }
  
      if (candidate.yearsExperience < parseInt(minimalExperience)) {
        throw new Error(
          `${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`
        );
      }
  
      candidate.yearsExperience = "hired";
      return `Welcome aboard, our newest employee is ${name}.`;
    }
  
    salaryBonus(name) {
      const candidate = this.jobCandidates.find((c) => c.name === name);
  
      if (!candidate) {
        throw new Error(`${name} is not in the candidates list!`);
      }
  
      let salary;
      if (candidate.education === "Bachelor") {
        salary = "$50,000";
      } else if (candidate.education === "Master") {
        salary = "$60,000";
      } else {
        salary = "$40,000";
      }
  
      return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of ${salary} per year!`;
    }
  
    candidatesDatabase() {
      if (this.jobCandidates.length === 0) {
        throw new Error("Candidate Database is empty!");
      }
  
      const sortedCandidates = this.jobCandidates
        .slice()
        .sort((a, b) => a.name.localeCompare(b.name));
  
      const candidateInfo = sortedCandidates
        .map((c) => `${c.name}-${c.yearsExperience}`)
        .join("\n");
  
      return `Candidates list:\n${candidateInfo}`;
    }
  }
  
  let Jobs = new JobOffers ("Google", "Strategy Analyst");
  console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));
  console.log(Jobs.jobOffer("John Doe-8"));
  console.log(Jobs.jobOffer("Peter Parker-4"));
  console.log(Jobs.salaryBonus("John Doe"));
  console.log(Jobs.salaryBonus("Peter Parker"));
 