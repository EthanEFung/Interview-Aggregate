const {
  parseClass,
  parseFourInputClassQuery,
  parseThreeInputClassQuery,
  parseTwoInputClassQuery
} = require("./classParser");

describe("classParser Function", function() {
  describe("should accept all valid inputs", function() {
    it("should accept a string with four words", function() {
      const actual = parseClass("CS 101 FALL 2017");
      const expected = {
        department: "CS",
        class: 101,
        semester: "FALL",
        year: 2017
      };
      expect(actual).toEqual(expected);
    });

    it("should not matter whether the semester comes before or after the year", function() {
      const actual = parseClass("CS 101 2017 FALL");
      const expected = {
        department: "CS",
        class: 101,
        semester: "FALL",
        year: 2017
      };
      expect(actual).toEqual(expected);
    });

    it("should support different kinds of semesters", function() {
      const actual = parseClass("CS 101 2017 SPRING");
      const expected = {
        department: "CS",
        class: 101,
        semester: "SPRING",
        year: 2017
      };
    });

    it("should render support years with only the suffix given", function() {
      const actual = parseClass("CS 101 SPRING 17");
      const expected = {
        department: "CS",
        class: 101,
        semester: "SPRING",
        year: 2017
      };
      expect(actual).toEqual(expected);
    });

    it("should accept three word inputs", function() {
      const actual = parseClass("CS101 FALL 2017");
      const expected = {
        department: "CS",
        class: 101,
        semester: "FALL",
        year: 2017
      };
      expect(actual).toEqual(expected);
    });

    it("should accept two word inputs", function() {
      const actual = parseClass("CS101 FALL2017");
      const expected = {
        department: "CS",
        class: 101,
        semester: "FALL",
        year: 2017
      };
      expect(actual).toEqual(expected);
    });

    it("should parse two word input with single letter semesters correctly", function() {
      const actual = parseClass("CS101 F2017");
      const expected = {
        department: "CS",
        class: 101,
        semester: "FALL",
        year: 2017
      };
      expect(actual).toEqual(expected);
    });
  });

  describe("parseFourInputClassQuery", function() {
    it("should work with valid input", function() {
      const actual = parseFourInputClassQuery(["CS", "101", "FALL", "2017"]);
      const expected = {
        department: "CS",
        class: 101,
        semester: "FALL",
        year: 2017
      };
      expect(actual).toEqual(expected);
    });
  });

  describe("parseThreeInputClassQuery", function() {
    it("should work with valid input", function() {
      const actual = parseThreeInputClassQuery(["CS101", "FALL", "2017"]);
      const expected = {
        department: "CS",
        class: 101,
        semester: "FALL",
        year: 2017
      };
      expect(actual).toEqual(expected);
    });
  });
});
