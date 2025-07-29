const firstName: string = 'Cristian';
const lastName: string = "O'neal \"  this is a name for someone\"";


const fullName: string = `${firstName} ${lastName}`;

const fullNameWithTemplate: string = `
this is a template string
${firstName} ${lastName}
${ 10 + 20 } // This is an expression inside a template string
${ 10 + 20 === 30 ? 'This is true' : 'This is false' }
This is a multiline string
with template strings
`

;

console.log(fullName);
console.log(fullNameWithTemplate);  


const user = 'Fer';
const repo = 42;
const uri  = `https://api.github.com/users/${user}/repos/${repo}`;