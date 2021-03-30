const form = document.querySelector('.form');
const screenshotButton = document.querySelector("#screenshotButton");
const img = document.querySelector("#screenshot-img");
const video = document.querySelector("#video");
const videoDiv = document.querySelector(".videoDiv");

const canvas = document.createElement("canvas");


//Take photo

document.querySelector('.takePhotoDiv').addEventListener('click', () => {
    console.log(video);

    if (videoDiv.style.visibility === 'hidden') {
        videoDiv.style.visibility = 'visible';
        form.style.height = '0';
        form.style.visibility = 'hidden';
    }

    screenshotButton.style.visibility = 'visible';




})

screenshotButton.addEventListener('click', stopVideo())


//Take screenshots

screenshotButton.addEventListener('click', () => {

    stopVideo();

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d").drawImage(video, 0, 0);
    img.src = canvas.toDataURL("image/jpeg");


    video.style.visibility = 'hidden';
    video.style.height = '0';
    screenshotButton.innerHTML = `
    <img src="images/identify.svg" onerror="this.onerror=null; this.src='images/identify.png'">
   `;

    sendIdentification();

    videoDiv.style.visibility = 'hidden';


});


function stopVideo() {

    this.video.pause();
    this.video.src = "";
    this.video.srcObject = null;

    if (this.localStream)
        this.localStream.getTracks().forEach(track => track.stop());

}