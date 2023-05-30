const status = document.getElementById("status");
const video = document.getElementById("webcam");
const enableCamBtn = document.getElementById("enableCam");
const predictBtn = document.getElementById("predict");
const input_size = 224;
let yolov8 = undefined;
let efficientNet = undefined;
let videoPlaying = false;
let predict = false;

status.innerText = "Loaded TensorFlow.js - version: " + tf.version.tfjs;

enableCamBtn.addEventListener("click", enableCam);
predictBtn.addEventListener("click", predictVideo);

loadModel();

async function loadModel() {
  // yolov8 = await tf.loadGraphModel(
  //   "http://127.0.0.1:5500/v6_web_model/model.json"
  // );
  yolov8 = await tflite.loadTFLiteModel("v5_float32.tflite");
  status.innerText = "Model loaded successfully";
}

function hasGetUserMedia() {
  return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
}

function enableCam() {
  if (hasGetUserMedia()) {
    const constraints = {
      video: true,
      width: 640,
      height: 640,
    };

    navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
      video.srcObject = stream;
      video.addEventListener("loadeddata", function () {
        (videoPlaying = true), enableCamBtn.classList.add("removed");
      });
    });
  } else {
    console.warn("getUserMedia() is not supported by your browser");
  }
}

function predictVideo() {
  predict = true;
  predictLoop();
}

function predictLoop() {
  if (predict) {
    tf.tidy(function () {
      video.width = 640;
      video.height = 640;

      let videoFrameAsTensor = tf.browser.fromPixels(video);
      let resizedTensorFrame = tf.image.resizeBilinear(
        videoFrameAsTensor,
        [640, 640],
        true
      );
      //   let t4d = tf.tensor4d(resizedTensorFrame.expandDims(), [1, 640, 640, 3]);
      //   let imageFeatures = yolov8.predict(resizedTensorFrame.expandDims());
      let prediction = yolov8.predict(resizedTensorFrame.expandDims());
      console.log(prediction);
      //   let highestIndex = prediction.argMax().arraySync();
      //   status.innerText = prediction.arraySync();
      //   console.log(prediction.arraySync());
    });

    window.requestAnimationFrame(predictLoop);
  }
}
