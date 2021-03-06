# MANSLAB-timberstone

## Cables integration

Cables' patch URL: [https://cables.gl/p/IPOl2Y](https://cables.gl/p/IPOl2Y).
To include it here, Export the Patch as a ZIP file and select Export ALL assets (not automatic). Leave the rest by default.

Copy `patch.js` in `/js`.
Then copy the `/assets/` files to the current `/assets/` folder.

- The current assets are loaded via the cdn at this cdn url
  - s3 bucket cdn enac-it4r private at -> /Timberstone/V01/assets/
  - https://enacit4r-cdn.epfl.ch/Timberstone/V01/assets/

```
/Timberstone/V01/assets/620ce31dcef9e411244c5e84_part_5_obj_1.glb
/Timberstone/V01/assets/620ce31dcef9e411244c5e84_part_5_obj_3.glb
/Timberstone/V01/assets/620ce31dcef9e411244c5e84_part_5_obj_4.glb
/Timberstone/V01/assets/Casio-MT-600-Piano-1-C3.wav
/Timberstone/V01/assets/GrndPnShrt_21_G_3_78_SP.wav
/Timberstone/V01/assets/lib_hdr_gravelpath.rgbe.png
/Timberstone/V01/assets/lib_matcaps_Chrome_Blue_Tint.png
/Timberstone/V01/assets/part_4_obj_1.ply
/Timberstone/V01/assets/part_4_obj_10.ply
/Timberstone/V01/assets/part_4_obj_2.ply
/Timberstone/V01/assets/part_4_obj_3.ply
/Timberstone/V01/assets/part_4_obj_4.ply
/Timberstone/V01/assets/part_4_obj_5.ply
/Timberstone/V01/assets/part_4_obj_6.ply
/Timberstone/V01/assets/part_4_obj_7.ply
/Timberstone/V01/assets/part_4_obj_8.ply
/Timberstone/V01/assets/part_4_obj_9.ply
/Timberstone/V01/assets/part_5_obj_1.glb
/Timberstone/V01/assets/part_5_obj_2.ply
/Timberstone/V01/assets/part_5_obj_3.glb
/Timberstone/V01/assets/part_5_obj_4.glb
/Timberstone/V01/assets/stone1.ply
/Timberstone/V01/assets/stone10.ply
/Timberstone/V01/assets/stone11.ply
/Timberstone/V01/assets/stone2.ply
/Timberstone/V01/assets/stone3.ply
/Timberstone/V01/assets/stone4.ply
/Timberstone/V01/assets/stone5.ply
/Timberstone/V01/assets/stone6.ply
/Timberstone/V01/assets/stone7.ply
/Timberstone/V01/assets/stone8.ply
/Timberstone/V01/assets/stone9.ply
```

## Point clouds preprocessing methods (draft)

Tools : MeshLab, Blender (latest version).

### 1. Geometry simplification

--> to ideally to 100 000 - 200 000 points.

### 2. Re-center

--> center scene to (0,0,0)
Process on Meshlab:
<img width="1278" alt="Screenshot 2022-03-29 at 15 04 37" src="https://user-images.githubusercontent.com/18381609/160621761-ef1f1adc-e9cb-4e02-b237-e7e331a3dbfe.png">
<img width="594" alt="Screenshot 2022-03-29 at 15 05 03" src="https://user-images.githubusercontent.com/18381609/160621817-a0888c87-ef4f-4ad8-a500-6f1071e6dc3b.png">

## Update images and videos in the CDN

You'll need to run the processImagesAndVideos.sh script (we tested with the below versions):

- make (GNU Make 3.81)
- bash (GNU bash, version 3.2.57)
- Image magick (Version: ImageMagick 7.1.0)
- ffmpeg (ffmpeg version 5.0.1 with all flags)
- Gnu find (findutils) for the script (find (GNU findutils) 4.9.0)
- Gnu sed (gnu-sed 4.8)
- s3cmd cli to upload to the epfl enac-it4r private cdn (s3cmd version 2.2.0)

1. Download the latest version of the data as zip: https://drive.google.com/drive/folders/1vNSggsQBvzDQY3b8ubMwwwHj0JLyNQKe

- Google Drive / ENAC-IT4R / Projects_Docs / MANSLAB-IBOIS-EESD-HybridTimberStoneStructure / Data for website / June2022_FinalText

2. Unzip the archive
3. Run 'Make' and copy paste the full path of the extracted zip file

- IT should work as is, if you encounter any problem please verify first:
  - you have properly configured s3cmd
  - you have the access right

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
