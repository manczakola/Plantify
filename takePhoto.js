//Take photo

document.querySelector('.takePhotoDiv').addEventListener('click', () => {
    console.log(video);

    videoDiv.style.visibility === 'hidden' ? videoDiv.style.visibility = 'visible' : startVideo();

    function startVideo() {

        navigator.mediaDevices.getUserMedia({
            video: true
        }).then(
            stream => (video.srcObject = stream),
            err => console.log(err)
        );

        form.style.height = '0';
        form.style.visibility = 'hidden';
    }


    startVideo();
})

const form = document.querySelector('.form');
const screenshotButton = document.querySelector("#screenshotButton");
const img = document.querySelector("#screenshot-img");
const video = document.querySelector("#video");
const videoDiv = document.querySelector(".videoDiv");

const canvas = document.createElement("canvas");


//Take screenshots

screenshotButton.addEventListener('click', () => {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d").drawImage(video, 0, 0);
    img.src = canvas.toDataURL("image/jpeg");

    video.style.visibility = 'hidden';
    video.style.height = '0';
    screenshotButton.innerHTML = `
    <img src="images/identify.svg" onerror="this.onerror=null; this.src='images/identify.png'">
   `
    sendIdentification();

    videoDiv.style.visibility = 'hidden';
});