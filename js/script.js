window.onload = init;
var box, thumbs, button1, button2, allImages, indx;

let myPicturesArray = [
{
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://lizzdvorsky.com/images/activity32/00.jpg",
    "thumbnailUrl": "https://lizzdvorsky.com/images/activity32/thumbs/00.jpg"
},
{
    "albumId": 1,
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "https://lizzdvorsky.com/images/activity32/01.jpg",
    "thumbnailUrl": "https://lizzdvorsky.com/images/activity32/thumbs/01.jpg"
},
{
    "albumId": 1,
    "id": 51,
    "title": "non sunt voluptatem placeat consequuntur rem incidunt",
    "url": "https://lizzdvorsky.com/images/activity32/02.jpg",
    "thumbnailUrl": "https://lizzdvorsky.com/images/activity32/thumbs/02.jpg"
},
{
    "albumId": 1,
    "id": 52,
    "title": "eveniet pariatur quia nobis reiciendis laboriosam ea",
    "url": "https://lizzdvorsky.com/images/activity32/03.jpg",
    "thumbnailUrl": "https://lizzdvorsky.com/images/activity32/thumbs/03.jpg"
},
{
    "albumId": 1,
    "id": 127,
    "title": "magnam quia sed aspernatur",
    "url": "https://lizzdvorsky.com/images/activity32/04.jpg",
    "thumbnailUrl": "https://lizzdvorsky.com/images/activity32/thumbs/04.jpg"
},
{
    "albumId": 1,
    "id": 128,
    "title": "est facere ut nam repellat numquam quia quia eos",
    "url": "https://lizzdvorsky.com/images/activity32/05.jpg",
    "thumbnailUrl": "https://lizzdvorsky.com/images/activity32/thumbs/05.jpg"
},
{
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://lizzdvorsky.com/images/activity32/06.jpg",
    "thumbnailUrl": "https://lizzdvorsky.com/images/activity32/thumbs/06.jpg"
},
{
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://lizzdvorsky.com/images/activity32/07.jpg",
    "thumbnailUrl": "https://lizzdvorsky.com/images/activity32/thumbs/07.jpg"
},
{
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://lizzdvorsky.com/images/activity32/08.jpg",
    "thumbnailUrl": "https://lizzdvorsky.com/images/activity32/thumbs/08.jpg"
},
{
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://lizzdvorsky.com/images/activity32/09.jpg",
    "thumbnailUrl": "https://lizzdvorsky.com/images/activity32/thumbs/09.jpg"
},
{
    "albumId": 2,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://lizzdvorsky.com/images/activity32/15.jpg",
    "thumbnailUrl": "https://lizzdvorsky.com/images/activity32/thumbs/15.jpg"
},
{
    "albumId": 2,
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "https://lizzdvorsky.com/images/activity32/16.jpg",
    "thumbnailUrl": "https://lizzdvorsky.com/images/activity32/thumbs/16.jpg"
},
{
    "albumId": 2,
    "id": 51,
    "title": "non sunt voluptatem placeat consequuntur rem incidunt",
    "url": "https://lizzdvorsky.com/images/activity32/17.jpg",
    "thumbnailUrl": "https://lizzdvorsky.com/images/activity32/thumbs/17.jpg"
},
{
    "albumId": 2,
    "id": 52,
    "title": "eveniet pariatur quia nobis reiciendis laboriosam ea",
    "url": "https://lizzdvorsky.com/images/activity32/18.jpg",
    "thumbnailUrl": "https://lizzdvorsky.com/images/activity32/thumbs/18.jpg"
},
{
    "albumId": 2,
    "id": 127,
    "title": "magnam quia sed aspernatur",
    "url": "https://lizzdvorsky.com/images/activity32/19.jpg",
    "thumbnailUrl": "https://lizzdvorsky.com/images/activity32/thumbs/19.jpg"
},
{
    "albumId": 2,
    "id": 128,
    "title": "est facere ut nam repellat numquam quia quia eos",
    "url": "https://lizzdvorsky.com/images/activity32/20.jpg",
    "thumbnailUrl": "https://lizzdvorsky.com/images/activity32/thumbs/20.jpg"
},
{
    "albumId": 2,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://lizzdvorsky.com/images/activity32/21.jpg",
    "thumbnailUrl": "https://lizzdvorsky.com/images/activity32/thumbs/21.jpg"
},
{
    "albumId": 2,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://lizzdvorsky.com/images/activity32/22.jpg",
    "thumbnailUrl": "https://lizzdvorsky.com/images/activity32/thumbs/22.jpg"
},
{
    "albumId": 2,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://lizzdvorsky.com/images/activity32/23.jpg",
    "thumbnailUrl": "https://lizzdvorsky.com/images/activity32/23.jpg"
}
];

// Display picures
function init(){
	
	  box = document.getElementById('large');
	  thumbs = document.getElementById('images');
		button1 = document.getElementById('button1');
		button2 = document.getElementById('button2');
		button1.addEventListener('click', loadAlbum1);
		button2.addEventListener('click', loadAlbum2);
	  loadAlbum1();
}

function loadAlbum1() {
	removeImages();
	indx = -1;
myPicturesArray.forEach(function(currentImage) {
	if (currentImage.albumId === 1){
		  indx++;
			let image = document.createElement("img");
			image.src = currentImage.thumbnailUrl;
			image.alt = currentImage.title;
			image.id = currentImage.id;
			image.url = currentImage.url;
			thumbs.append(image);
		  image.addEventListener('click', function(){box.innerHTML = '<img src="'+image.url+'" alt="'+image.alt+'">';});
		  image.addEventListener('dblclick', function(){image.remove(); myPicturesArray.splice(indx,1);});
	}
});
}

function loadAlbum2() {
	removeImages();
	indx = -1;
myPicturesArray.forEach(function(currentImage) {
	if (currentImage.albumId === 2){
		  indx++;
			let image = document.createElement("img");
			image.src = currentImage.thumbnailUrl;
			image.alt = currentImage.title;
			image.id = currentImage.id;
			image.url = currentImage.url;
			thumbs.append(image);
		  image.addEventListener('click', function(){box.innerHTML = '<img src="'+image.url+'" alt="'+image.alt+'">';});
		  image.addEventListener('dblclick', function(){image.remove(); myPicturesArray.splice(indx,1);});
	}
});
}

function removeImages(){
	allImages = document.getElementsByTagName('IMG');
	while (allImages[0]) allImages[0].parentNode.removeChild(allImages[0]);
}