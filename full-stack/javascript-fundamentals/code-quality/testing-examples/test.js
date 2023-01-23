describe("pow", () => {
  /* it("raises to n-th power", () => {
    assert.equal(pow(2, 3), 8);
  }); */

  /* One test checks one thing!! */
  /* it("any number raised to the power of 0 is 1", () => {
    assert.equal(pow(1, 0), 1);
  });

  it("2 raised to the power of 3 is 8", () => {
    assert.equal(pow(2, 3), 8);
  });

  it("3 raised to the power of 4 is 81", () => {
    assert.equal(pow(3, 4), 81);
  }); */

  /* ---------------------------------------------- */
  /* `it` block using for */
  /* function makeTest(x) {
    let expected = x * x * x;
    it(`${x} in the power of 3 is ${expected}`, () => {
      assert.equal(pow(x, 3), expected);
    });
  }

  for (let i = 1; i <= 5; i++) {
    makeTest(i);
  } */

  /* ---------------------------------------------- */
  /* Nested describe */
  describe("raises a number to the power of 3", () => {
    before(() => console.log("Testing started ..."));
    after(() => console.log("Testing finished ..."));

    beforeEach(() => console.log("Before a test ..."));
    afterEach(() => console.log("After a test ..."));

    function makeTest(x) {
      let expected = x * x * x;
      it(`${x} in the power of 3 is ${expected}`, () => {
        assert.equal(pow(x, 3), expected);
        console.log(x);
      });
    }

    for (let i = 1; i <= 10; i++) {
      makeTest(i);
    }
  });

  describe("raises NaN", () => {
    it("for negative n the result is NaN", () => {
      assert.isNaN(pow(2, -1));
    });

    it("for non-integer n the result is NaN", () => {
      assert.isNaN(pow(2, 1.5));
    });
  });

  // ...add more tests to follow here
});
