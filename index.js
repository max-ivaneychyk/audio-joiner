let outputFileName = process.argv[2] || 'output';
let mp3Duration = require('mp3-duration');
let fs = require('fs');


const silentAudioUrl = './silent.mp3';
let files = fs.readdirSync('./files').map(url => './files/' + url).join(` ${silentAudioUrl} `).split(' ');
let countFiles = files.length;

function getDuration(urlFile) {
    return new Promise((resolve, reject) => {
        mp3Duration(urlFile, function (err, duration) {
            if (err) return reject(err.message);
            resolve({url: urlFile, dur: duration});
        });
    })
}

Promise.all(files.map(getDuration)).then(dataArr => {
    let infoSounds = {};
    let startTime = 0;

    dataArr.forEach(function (soundInfo) {
       let url = soundInfo.url;
       let nameSoundData = url.replace(/\./g, '/').split('/');
       let durSec = soundInfo.dur;

       infoSounds[nameSoundData[nameSoundData.length -2]] = [startTime, startTime +=(durSec * 1000) ];
    });
    console.log(infoSounds);
}, reason => {
    console.log(reason)
});


let clips = [].concat(files),
    stream,
    currentfile,
    outStream = fs.createWriteStream(`./result/${outputFileName}.mp3`);

// recursive function
function join() {
    if (!clips.length) {
        outStream.end("Done");
        console.log('');
        console.log('Output file >> ', outputFileName + '.mp3');
        console.log('');
        return;
    }

    currentfile = clips.shift();
    stream = fs.createReadStream(currentfile);

    stream.pipe(outStream, {end: false});
    stream.on("end", function() {
        join();
    });
}

join();

