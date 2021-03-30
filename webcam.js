const webcamElement = document.getElementById('video');
const canvasElement = document.getElementById('canvas');

const webcam = new Webcam(webcamElement, 'environment', canvasElement);

document.querySelector('#buttonTakePhoto').addEventListener('click', () => {

    //add constraints object
    var constraints = {
        video: true
    };

    navigator.mediaDevices.getUserMedia(constraints).then(function (mediaStream) {
        var video = document.querySelector('video');
        video.srcObject = mediaStream;
        video.play();



    }).catch(function (err) {
        console.log("Error!" + err.message);
    });

})

$('#cameraFlip').click(function () {
    webcam.flip();
    webcam.start();
});