const { execSync } = require('child_process');

console.log('Running npm install...');
execSync('npm install', { stdio: 'inherit' });

console.log('Running git submodule init...');
execSync('git submodule init', { stdio: 'inherit' });

console.log('Running git submodule update...');
execSync('git submodule update', { stdio: 'inherit' });
