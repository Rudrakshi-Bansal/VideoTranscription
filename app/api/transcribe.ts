const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegPath);

const inputFile = './vid.mp4';
const outputFile = './output.mp3';

const converter = new ffmpeg(inputFile);
converter.output(outputFile);

converter.on('end', function() {
  console.log('Conversion complete');
});

converter.on('error', (err: Error) => {
    console.log('Error:', err);
  });
  
  
converter.run();