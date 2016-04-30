"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
require('source-map-support/register');
function sleep(milliseconds) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
}
function puts(...optionalParams) {
    console.log.apply(this, arguments);
}
function sleepOneSecond() {
    return __awaiter(this, void 0, void 0, function* () {
        yield sleep(1000);
    });
}
function printSleepAndError() {
    return __awaiter(this, void 0, void 0, function* () {
        puts('1');
        yield sleepOneSecond();
        puts('2');
        yield sleepOneSecond();
        puts('3');
        throw new Error('throw error to showcase source map support.');
    });
}
printSleepAndError().catch(err => console.log(err.stack || err));
