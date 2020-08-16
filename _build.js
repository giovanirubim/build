const exec = require('child_process').execSync;
let [a, b, path] = process.argv;
if (!path) exit(1);
if (path[0] === '"') {
	path = path.replace(/^"|"$/g, '');
}
const dst = path.replace(/^([^\\]*\\)*((.+)(\.\w+)|(.*))$/, 'C:\\mybin\\$3$5.exe');
exec(`pkg -t node12-win-x64 "${ path }" -o "${ dst }"`, {stdio: 'inherit'});
