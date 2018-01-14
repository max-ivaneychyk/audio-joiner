# audio-joiner
Generation audio sprite for lib Howler

## Installation
  First you need `FFMpeg` from https://www.ffmpeg.org/download.html and add binary file from directory `./bin` in system PATH
  Only after thet you need continue:
   
  Clone git repository:
```javascript
  git clone https://github.com/max-ivaneychyk/audio-joiner.git
```
Open directory:
```javascript
  cd audio-joiner
```
  Install dependencies:
```javascript
  npm install
```

## Usage

Clear and add sounds mp3 in folder `./files/`.

And execute command on console with name output file:
```javascript
npm run join <name> 
```  
  or without - default name 'output.mp3'
```javascript
npm run join 
```  
  
Output file you can see in folder `./result/` and data json for Howler in your console





