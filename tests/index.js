"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
var assert = require("assert");
var index_1 = require("../dist/index");
describe("index", function () {
    it("should say 'Hello World'", function () {
        index_1.SmokeTest.HelloWorld();
        assert.ok(true);
    });
});
//# sourceMappingURL=index.js.map