var images = document.querySelectorAll("img");
var imgUrls = [];
images.forEach(function (img) {
  imgUrls.push(img.src);
});
console.log(imgUrls);
