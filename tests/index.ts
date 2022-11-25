import "mocha";
import * as assert from "assert";
import {SmokeTest} from "../dist/index";

describe("index",()=>{
    it("should say 'Hello World'",()=>{
        SmokeTest.HelloWorld();
        assert.ok(true);
    });
});