const exec = require('child_process').execSync;
let [a, b, path] = process.argv;
if (!path) exit(1);
if (path[0] !== '"') {
	path = `"${path}"`;
}
exec(`pkg -t node12-win-x64 ${ path }`, {stdio: 'inherit'});
console.log('');
exec(`move ${ path.replace(/\.js"$/, '.exe"') } C:\\mybin\\`);