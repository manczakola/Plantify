const webcamElement = document.getElementById('video');
const canvasElement = document.getElementById('canvas');

const webcam = new Webcam(webcamElement, 'environment', canvasElement);

document.querySelector('#buttonTakePhoto').addEventListener('click', () => {
    webcam.start()
        .then(result => {
            console.log("webcam started");
        })
        .catch(err => {
            console.log(err);
        });
})

$('#cameraFlip').click(function () {
    webcam.flip();
    webcam.start();
});