install:
	@read -p "Enter data path :" path; \
	./processImagesAndVideos.sh $$path;