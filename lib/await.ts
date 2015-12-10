import 'source-map-support/register'

function sleep(milliseconds: number): Promise<void> {
  return new Promise<void>((resolve) => setTimeout(resolve, milliseconds));
}

/* // node.js can't handle the spread operator
function puts(...optionalParams: any[]): void {
  console.log.apply(this, arguments);
}
*/

function puts(arg:String): void {
  console.log(arg);
}

async function sleepOneSecond(): Promise<void> {
  await sleep(1000);
}

async function printSleepAndError(): Promise<void> {
  puts('1');
  await sleepOneSecond();
  puts('2');
  await sleepOneSecond();
  puts('3');
  throw new Error('throw error to showcase source map support.');
}

printSleepAndError().catch(err => console.log(err.stack || err));
