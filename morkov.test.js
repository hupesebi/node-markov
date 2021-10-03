const { MarkovMachine } = require("./markov");

describe("MarkovMachine", function () {
  let m = new MarkovMachine(
    "the cat in the hat is in the hat"
  );

  test("m should be instance of MarkovMachine", function () {
    expect(m).toBeInstanceOf(MarkovMachine);
  });

  test("m.chains properties and values", function () {
    expect(m.chains).toBeInstanceOf(Object);
    expect(m.chains).toHaveProperty("hat");
    expect(m.chains).toHaveProperty("cat");
  });

  describe("makeText method", function () {
    let text = m.makeText();
    test("m.makeText should return a string", function () {
      expect(text).toBeInstanceOf(String);
    });
  });
});