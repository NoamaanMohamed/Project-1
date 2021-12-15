const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

global.fetch = require('jest-fetch-mock');
let app;

describe('app', () => { 
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
        app = require('../scripts.js')
    })

    afterEach(() => {
        fetch.resetMocks();
    })
});

