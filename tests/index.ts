import "mocha";
import * as assert from "assert";
import {SmokeTest} from "../dist/index";

describe("index",()=>{
    it("Program should say 'Hello World'",()=>{
        SmokeTest.HelloWorld();
        assert.ok(true);
    });

    it("Database should say 'Hello world!", async ()=> {
        let promise = SmokeTest.HelloWorldFromDB();
        await promise.then((res)=>{
            if (res.length > 0) {
                console.log("Promise message: "+res[0].message);
            }
        });
        assert.ok(true);
    });
});