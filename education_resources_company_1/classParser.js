// ## Prompt
// This company received most of their web traffic in the form of of queries generated by user inputs. These queries were generated in order to find text books based upon the following traits.
// * department
// * class number
// * semester
// * year

// However, valid queries could come in several different formats.  Here are some examples of valid queries.

// ```
// CS101 FALL 2017
// CS 101 FALL 2017
// CS 101 2017 FALL
// CS101 FALL17
// CS101 F2017
// ```
// All queries listed above are valid.  Given one of the inputs above, render the following object
// ```
// {
//   department: "CS",
//   class: 101,
//   semester: "FALL",
//   year: 2017"
// }
// ```

function parseClass(query) {
  const inputs = query.split(" ");
  if (inputs.length === 2) return parseTwoInputClassQuery(inputs);
  if (inputs.length === 3) return parseThreeInputClassQuery(inputs);
  if (inputs.length === 4) return parseFourInputClassQuery(inputs);
}

function parseFourInputClassQuery(inputs) {
  let result = {};
  if (inputContainsLetters(inputs[0])) {
    result.department = inputs[0];
    result.class = Number(inputs[1]);
  } else {
    result.department = inputs[1];
    result.class = Number(inputs[0]);
  }

  if (inputContainsLetters(inputs[2])) {
    result.semester = checkSemester(inputs[2]);
    result.year = checkYear(inputs[3]);
  } else {
    result.semester = checkSemester(inputs[3]);
    result.year = checkYear(inputs[2]);
  }
  return result;
}

function parseThreeInputClassQuery(inputs) {
  const result = {};
  parseDepartmentAndClass(inputs[0], result);

  if (inputContainsLetters(inputs[1])) {
    result.semester = checkSemester(inputs[1]);
    result.year = checkYear(inputs[2]);
  } else {
    result.semester = checkSemester(inputs[2]);
    result.year = checkYear(inputs[1]);
  }
  return result;
}

function parseTwoInputClassQuery(inputs) {
  const result = {};
  parseDepartmentAndClass(inputs[0], result);
  parseSemesterAndYear(inputs[1], result);
  return result;
}

function parseDepartmentAndClass(input, result) {
  for (let i = 0; i < input.length; i++) {
    if (!inputContainsLetters(input[i])) {
      result.department = input.slice(0, i);
      result.class = Number(input.slice(i));
      break;
    }
  }
}

function parseSemesterAndYear(input, result) {
  for (let i = 0; i < input.length; i++) {
    if (!inputContainsLetters(input[i])) {
      result.semester = checkSemester(input.slice(0, i));
      result.year = checkYear(input.slice(i));
      break;
    }
  }
}

function inputContainsLetters(input) {
  for (let char of input) {
    if (char >= "A" && char <= "Z") return true;
  }
  return false;
}

function checkSemester(input) {
  if (input[0] === "F") return "FALL";
  if (input[0] === "S") return "SPRING";
  //summer?
}

function checkYear(input) {
  if (input.length === 2) {
    return Number("20" + input);
  }
  return Number(input);
}

module.exports = {
  parseClass,
  parseFourInputClassQuery,
  parseThreeInputClassQuery,
  parseTwoInputClassQuery
};
