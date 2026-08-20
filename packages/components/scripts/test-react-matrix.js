const { execFileSync } = require('child_process');

const REACT_VERSIONS = ['16.14.0', '17.0.2', '18.3.1', '19.2.8'];

function run(command, args) {
  execFileSync(command, args, { stdio: 'inherit', cwd: __dirname + '/..', shell: true });
}

const results = [];

for (const version of REACT_VERSIONS) {
  console.log(`\n=== Testing against react@${version} / react-dom@${version} ===\n`);
  try {
    run('npm', ['install', '--no-save', '--legacy-peer-deps', `react@${version}`, `react-dom@${version}`]);
    run('npx', ['jest']);
    results.push({ version, pass: true });
  } catch (err) {
    console.error(err.message);
    results.push({ version, pass: false });
  }
}

console.log('\n=== React version matrix results ===');
results.forEach(({ version, pass }) => {
  console.log(`react@${version}: ${pass ? 'PASS' : 'FAIL'}`);
});

console.log('\nRestoring installed dependency versions...');
run('npm', ['install']);

if (results.some((r) => !r.pass)) {
  process.exit(1);
}
