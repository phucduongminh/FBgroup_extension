const data = [
    "https://cdn-media.sforum.vn/storage/app/media/wp-content/uploads/2023/09/thumbnail-youtube-thumb.jpg",
    "https://tophinhanhdep.com/wp-content/uploads/2021/11/YouTube-HD-Wallpapers.jpg",
    "https://phan.vn/wp-content/uploads/2021/01/cac-cong-cu-bao-ho-ban-quyen-youtube.jpg"
];

const imgs = document.getElementsByTagName("img");

for (image of imgs) {
    const index = Math.floor(Math.random() * data.length);
    image.src = data[index];
}

