let outputFileName = process.argv[2] || 'output';
let audiosprite = require('audiosprite');
let fs = require('fs');

const DIR = './files';

let files = fs.readdirSync(DIR).map(url => DIR + '/' + url);

let opts = {
    export: 'ogg,mp3',
    format: 'howler',
    output: `result/${outputFileName}`
};

audiosprite(files, opts, function(err, obj) {
    if (err) return console.error(err);
    // time in sec

    console.log(JSON.stringify(obj, null, 2));
});

