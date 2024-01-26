const youtubedl = require('youtube-dl');

// YouTube video URL
const videoUrl = 'https://www.youtube.com/watch?v=VIDEO_ID';

// Options for youtube-dl
const options = ['--extract-audio', '--audio-format', 'mp3'];

// Create a youtube-dl instance with the provided options
const video = youtubedl(videoUrl, options);

// Set the download location
video.output('./downloads/%(title)s.%(ext)s');

// Event listeners for video information
video.on('info', function(info) {
  console.log('Download started');
  console.log('Title:', info.title);
  console.log('Size:', info.size);
});

// Event listener for download completion
video.on('end', function() {
  console.log('Download finished');
});

// Event listener for errors
video.on('error', function(err) {
  console.error('Error:', err);
});

// Start the download
video.pipe(process.stdout);