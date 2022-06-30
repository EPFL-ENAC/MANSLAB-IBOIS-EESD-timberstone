#!/usr/bin/env bash
#  - create new temporary directory
#  - remove unused file (pdf/gif) (by not copying them)
#  - optimize m4v/mp4
#  - optimize jpg|JPEG|JPG
#  - optimize png|PNG
#  - upload to CDN

# should be copied to /tmp for those that have /tmp as tmpfs in memory/RAM

rm -rf /tmp/data; \
mkdir -p /tmp/data; \
cp -R $1/* /tmp/data; \
cd /tmp/data; \
echo "content at /tmp/data"; ls -vl /tmp/data; \
echo 'remove docx/pdf/gif' ;\
find . -depth -name '*.docx' -delete; \
find . -depth -name '*.pdf' -delete;  \
find . -depth -name '*.gif' -delete; \
echo 'convert png to webp and remove png'; \
find . -depth -type f -regex '.*\.\(png\)' \
     -exec bash -c 'magick convert "$1" -quality 15 "${1%.png}.webp"; rm "$1"' _ '{}' \;
echo 'convert PNG to webp and remove PNG'; \
find . -depth -type f -regex '.*\.\(PNG\)' \
     -exec bash -c 'magick convert "$1" -quality 15 "${1%.PNG}.webp"; rm "$1"' _ '{}' \;
echo 'convert jpg to webp and remove jpg'; \
find . -depth -type f -regex '.*\.\(jpg\)' \
     -exec bash -c 'magick convert "$1" -quality 15 "${1%.jpg}.webp"; rm "$1"' _ '{}' \;
echo 'convert mp4 to mp4 optimized' ;\
find . -depth -type f -regex '.*\.\(mp4\)' \
     -exec bash -c 'ffmpeg -y -i "$1" -crf 35 -c:v libx264 -b:v 2500k -profile:v high -pix_fmt yuv420p -color_primaries 1 -color_trc 1 -colorspace 1 -movflags +faststart -an "${1%.mp4}_2.mp4"; rm "$1"; mv "${1%.mp4}_2.mp4" $1;' _ '{}' \;
echo 'convert m4v to mv4 optimized' ; \
find . -depth -type f -regex '.*\.\(m4v\)' \
     -exec bash -c 'ffmpeg -y -i "$1" -crf 35 -c:v libx264 -b:v 2500k -profile:v high -pix_fmt yuv420p -color_primaries 1 -color_trc 1 -colorspace 1 -movflags +faststart -an "${1%.m4v}.mp4"; rm "$1";' _ '{}' \;
echo 'create thumbnails for every mp4'
find . -depth -type f -regex '.*\.\(mp4\)' \
     -exec bash -c 'ffmpeg -y -i "$1" -ss 10.0 -frames:v 1  -filter:v "yadif" -an "${1%.mp4}.png";' _ '{}' \;
echo 'convert png to webp and remove png thumbnail'; \
find . -depth -type f -regex '.*\.\(png\)' \
     -exec bash -c 'magick convert "$1" -quality 15 "${1%.png}.webp"; rm "$1"' _ '{}' \;
echo 'convert PNG to webp and remove PNG'; \
echo 'upload to cdn via s3cmd'; \
read -p 'enter version number: ' VERSION_NAME; \
read -p 'enter bucket_name: ' BUCKET_NAME; \
echo; \
echo $VERSION_NAME; \
echo $BUCKET_NAME; \
s3cmd put --recursive --acl-public --guess-mime-type /tmp/data/* s3://$BUCKET_NAME/Timberstone/$VERSION_NAME/
echo 'end of script';
# bucket 10208-fcd9acb029f419e6493edf97f4592b96
# version example: V03
