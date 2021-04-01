const form = document.querySelector('.form');
const screenshotButton = document.querySelector("#screenshotButton");
const img = document.querySelector("#screenshot-img");
const video = document.querySelector("#webcam");
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




//Take screenshots

screenshotButton.addEventListener('click', () => {



    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d").drawImage(video, 0, 0);
    const dataUrl = canvas.toDataURL("image/jpeg");

    localStorage.setItem('photo', dataUrl);




    video.style.visibility = 'hidden';
    video.style.height = '0';
    screenshotButton.innerHTML = `
    <img src="images/identify.svg" onerror="this.onerror=null; this.src='images/identify.png'">
   `;


    videoDiv.style.visibility = 'hidden';


    // setTimeout(() => {
    //     stopVideo();
    // }, 1000);

});


// function stopVideo() {
//     if (this.localStream)
//         this.localStream.getTracks().forEach(track => track.stop());
//     this.video.srcObject = null;





// }