const request = require("supertest")("http://localhost:3001");
const expect = require("chai").expect;

describe("GET /", function () {
  it("returns Hello World", async function () {
    expect(2).to.equal(2);
  });
});

describe("GET /about", function () {
  it("returns About", async function () {
    expect(2).to.equal(2);
  });
});

describe("A", function () {
  it("returns test", async function () {
    expect(5).to.equal(4);
  });
});
