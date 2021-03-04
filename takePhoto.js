
import { sendIdentification } from './uploadPhoto.js';

//Take photo

document.querySelector('.buttonTakePhoto').addEventListener('click', () => {
    const constraints = {
        video: true,
      };
      
      const video = document.querySelector("video");
      
      navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
          video.srcObject = stream;
          

       
      });
})


const screenshotButton = document.querySelector("#screenshot-button");
const img = document.querySelector("#screenshot-img");
const video = document.querySelector("#video");

const canvas = document.createElement("canvas");
    

//Take screenshots

screenshotButton.addEventListener('click', () => {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d").drawImage(video, 0, 0);
    img.src = canvas.toDataURL("image/jpeg");

});