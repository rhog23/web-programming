"use strict";

describe("test", () => {
  before(() => console.log("Testing started - before all tests."));
  after(() => console.log("Testing finished - after all tests"));

  beforeEach(() => console.log("Before a test (it block) - enter a test"));
  afterEach(() => console.log("After a test (it block) - exit a test"));

  it("test 1", () => console.log(1));
  it("test 2", () => console.log(2));
});
