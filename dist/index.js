"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmokeTest = void 0;
var SmokeTest;
(function (SmokeTest) {
    var Pool = require('pg').Pool;
    var AvailableCharsets;
    (function (AvailableCharsets) {
        AvailableCharsets[AvailableCharsets["UTF8"] = 0] = "UTF8";
        AvailableCharsets[AvailableCharsets["ISO8859_2"] = 1] = "ISO8859_2";
    })(AvailableCharsets || (AvailableCharsets = {}));
    var person = {
        name: "Zoltan Papp",
        age: 45,
        hobbies: ['developing', 'chess'],
        role: [[0, "user", "comment", true]],
        userCharset: AvailableCharsets.UTF8
    };
    function HelloWorldFromDB() {
        return __awaiter(this, void 0, void 0, function () {
            var pool, promise;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pool = new Pool({
                            user: 'testuser',
                            host: 'localhost',
                            database: 'filemap',
                            password: 'test1234',
                            port: 5432,
                        });
                        return [4 /*yield*/, pool.query('SELECT $1::text as message', ['Hello world from DB!']).then(function (res) {
                                console.log(res.rows[0].message);
                            })];
                    case 1:
                        _a.sent();
                        promise = new Promise(function (resolve, reject) {
                            pool.query('SELECT $1::text as message', ['Promise selected!']).then(function (res) {
                                resolve(res.rows);
                            });
                        });
                        return [2 /*return*/, promise];
                }
            });
        });
    }
    SmokeTest.HelloWorldFromDB = HelloWorldFromDB;
    function HelloWorld() {
        person.role.push([1, "admin", "ready state", false]);
        console.log("Hello World: " + person.name);
        for (var _i = 0, _a = person.role; _i < _a.length; _i++) {
            var role = _a[_i];
            console.log(role[0] + ":" + role[1] + ":" + role[2]);
        }
    }
    SmokeTest.HelloWorld = HelloWorld;
})(SmokeTest = exports.SmokeTest || (exports.SmokeTest = {}));
//# sourceMappingURL=index.js.map