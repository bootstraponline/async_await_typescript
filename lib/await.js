var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, Promise, generator) {
    return new Promise(function (resolve, reject) {
        generator = generator.call(thisArg, _arguments);
        function cast(value) { return value instanceof Promise && value.constructor === Promise ? value : new Promise(function (resolve) { resolve(value); }); }
        function onfulfill(value) { try { step("next", value); } catch (e) { reject(e); } }
        function onreject(value) { try { step("throw", value); } catch (e) { reject(e); } }
        function step(verb, value) {
            var result = generator[verb](value);
            result.done ? resolve(result.value) : cast(result.value).then(onfulfill, onreject);
        }
        step("next", void 0);
    });
};
require('source-map-support/register');
function sleep(milliseconds) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
}
/* // node.js can't handle the spread operator
function puts(...optionalParams: any[]): void {
  console.log.apply(this, arguments);
}
*/
function puts(arg) {
    console.log(arg);
}
function sleepOneSecond() {
    return __awaiter(this, void 0, Promise, function* () {
        yield sleep(1000);
    });
}
function printSleepAndError() {
    return __awaiter(this, void 0, Promise, function* () {
        puts('1');
        yield sleepOneSecond();
        puts('2');
        yield sleepOneSecond();
        puts('3');
        throw new Error('throw error to showcase source map support.');
    });
}
printSleepAndError().catch(err => console.log(err.stack || err));

//# sourceMappingURL=await.js.map
