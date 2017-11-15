const { renderRelevantSearch, Med } = require("./pillFinder.js");

describe("PILL FINDER FUNCTION", function() {
  describe("The Med Javascript Class", function() {
    it("should not have more than one attribute", function() {
      const test = new Med("ASPIRIN");
      const expected = 1;
      const actual = Object.keys(test).length;
      expect(actual).toEqual(expected);
    });

    describe("name comparison function", function() {
      it("should return true if the query matches the medication name", function() {
        const test = new Med("ASPIRIN");
        const actual = test.containsAllCharsOf("AS");
        expect(actual).toBeTruthy();
      });

      it("should return GREATER if the query string comes prior in alphabetical order", function() {
        const test = new Med("ASPIRIN");
        const actual = test.containsAllCharsOf("ADVIL");
        const expected = "GREATER";
        expect(actual).toEqual(expected);
      });

      it("should return LESS if the query string comes after the medication name in alphabetical order", function() {
        const test = new Med("ASPIRIN");
        const actual = test.containsAllCharsOf("ATIVAN");
        const expected = "LESS";
        expect(actual).toEqual(expected);
      });

      it("should not accept non-string data types as its first argument", function() {
        const test = new Med(1);
        const actual = test.name;
        expect(actual).toBeNull();
      });
    });
  });

  describe("Relevant search function", function() {
    it("should render only the relevant medications", function() {
      const testList = [
        "ACETAMINOPHEN",
        "ADDERALL",
        "ALPRAZOLAM",
        "AMITRIPTYLINE",
        "AMLODIPINE",
        "AMOXICILLIN",
        "ATIVAN",
        "ATORVASTATIN"
      ];
      const expected = ["AMITRIPTYLINE", "AMLODIPINE", "AMOXICILLIN"];
      const actual = renderRelevantSearch(testList, "AM");

      expect(actual).toEqual(expected);
    });
    it("should not print any medications that are irrelevant", function() {
      const testList = [
        "ACETAMINOPHEN",
        "ADDERALL",
        "ALPRAZOLAM",
        "AMITRIPTYLINE",
        "AMLODIPINE",
        "AMOXICILLIN",
        "ATIVAN",
        "ATORVASTATIN"
      ];

      const expected = [
        "ALPRAZOLAM",
        "AMITRIPTYLINE",
        "AMLODIPINE",
        "AMOXICILLIN",
        "ATIVAN"
      ];
      const actual = renderRelevantSearch(testList, "AM");

      expect(actual).not.toEqual(expected);
    });
  });
});
