/*
*  PROMPT
*  Given a list of medication names and a search query, render a filtered
*  list of medications that match the search query.  For example given
*  the following inputs:
* - [ACETAMINOPHEN, ADDERALL, ALPRAZOLAM,AMITRIPTYLINE, AMLODIPINE, AMOXICILLIN, ATIVAN, ATORVASTATIN]
* - AM
* 
* render the following:
* AMITRIPTYLINE,
* AMLODIPINE,
* AMOXICILLIN
*
*/

function renderRelevantSearch(list, query) {
  const relevantMedications = [];
  for (let i = 0; i < list.length; i++) {
    const med = new Med(list[i]);
    if (med.containsAllCharsOf(query) === "GREATER") return relevantMedications;
    if (med.containsAllCharsOf(query) === true)
      relevantMedications.push(med.name);
  }
  return relevantMedications;
}

class Med {
  constructor(med) {
    this.name = !!med && typeof med === "string" ? med : null;
  }
  containsAllCharsOf(query) {
    for (let i = 0; i < query.length; i++) {
      if (this.name.charCodeAt(i) > query.charCodeAt(i)) return "GREATER";
      if (this.name.charCodeAt(i) < query.charCodeAt(i)) return "LESS";
    }
    return true;
  }
}

module.exports = { renderRelevantSearch, Med };
