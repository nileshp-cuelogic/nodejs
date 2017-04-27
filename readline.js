var readline = require('readline');

var rl = readline.createInterface(process.stdin, process.stdout);
var realPerson = {
    "name": '',
    "wants": []
}
rl.question("who are you?\n", (answer) => {
    realPerson.name = answer;
    if (answer.toLowerCase() == "exit") {
        rl.close();
    } else {
        rl.setPrompt(`what ${answer} wants?\n`);

        rl.prompt();

        rl.on('line', (a) => {
            if (a.toLowerCase() == "exit") {
                rl.close();
            } else {
                rl.setPrompt(`what else ${answer} wants? (exit to leave)\n`);
                rl.prompt();
            }
            realPerson.wants.push(a);
        });
    }
});

rl.on('close', () => {
    console.log("Hi %s you wants %j", realPerson.name, realPerson.wants);
});