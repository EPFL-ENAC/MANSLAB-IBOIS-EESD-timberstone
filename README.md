# MANSLAB-timberstone

## Cables integration

Cables' patch URL: [https://cables.gl/p/IPOl2Y](https://cables.gl/p/IPOl2Y).
To include it here, Export the Patch as a ZIP file and select Export ALL assets (not automatic). Leave the rest by default.

Copy `patch.js` in `/js`.
Then copy the `/assets/` files to the current `/assets/` folder.

## Point clouds preprocessing methods (draft)

Tools : MeshLab, Blender (latest version).

### 1. Geometry simplification

--> to ideally to 100 000 - 200 000 points.

### 2. Re-center

--> center scene to (0,0,0)
Process on Meshlab:
<img width="1278" alt="Screenshot 2022-03-29 at 15 04 37" src="https://user-images.githubusercontent.com/18381609/160621761-ef1f1adc-e9cb-4e02-b237-e7e331a3dbfe.png">
<img width="594" alt="Screenshot 2022-03-29 at 15 05 03" src="https://user-images.githubusercontent.com/18381609/160621817-a0888c87-ef4f-4ad8-a500-6f1071e6dc3b.png">

## Image and Video optimization

- Image are converted using image magick to webp: `magick convert {}png -quality 10 {}webp`
- Gif from video are generated using:
  ```
  ffmpeg -ss 10.0 -t 2.5 -i output.mp4 -filter_complex "[0:v] fps=12,scale=480:-1,split [a][b];[a] palettegen [p];[b][p] paletteuse"  -b:v 2500k -pix_fmt yuv420p -movflags +faststart -f gif output.gif
  ```
- Create thumbnail: ffmpeg -i Figure02.mp4 -s 420x270 -frames:v 1 -filter:v 'yadif' Figure02Thumbnail.png

  - please have a look at https://engineering.giphy.com/how-to-make-gifs-with-ffmpeg/
  - and https://avpres.net/FFmpeg/im_H264 for more information

- Gif are optimized using lossygif: gifsicle -O3 --lossy=80 -o compressed.gif Section07_Figure02_LowRes.gif
- Videos are optimized using ffmpeg using: ffmpeg -y -i input.mp4 -c:v libx264 -b:v 2500k -profile:v high -pix_fmt yuv420p -color_primaries 1 -color_trc 1 -colorspace 1 -movflags +faststart -an output.mp4
  - have a look at: https://trac.ffmpeg.org/wiki/Encode/H.264#twopass We favor crf as it is more
    straightforward
  - we use a crf of 35 to go from 6mb to 1.2mb
  - we use a crf of 30 to go from 6mb to 2.1mb
  - use two pass if you need to target a specified size
