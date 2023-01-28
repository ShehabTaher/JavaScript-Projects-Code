let startTime, endTime;
let imageSize = "";
let image = new Image();
let bitOutput = document.getElementById("bits");
let kbOutput = document.getElementById("kbs");
let mbOutput = document.getElementById("mbs");

// Get random image from unsplash
let imageLink = "https://source.unsplash.com/random?topics=nature";

// when image loads
image.onload = async function () {
  endTime = new Date().getTime();

  // Get image Size
  await fetch(imageLink).then((response) => {
    imageSize = response.headers.get("content-length");
    calculateSpeed();
  });
};

// function to calculate speed
function calculateSpeed() {
  // Time taken in seconds
  let timeDuration = (endTime - startTime) / 1000;
  // Total bits 
  let loadedBits = imageSize * 8
  let speedInBps = (loadedBits/ timeDuration).toFixed(2)
  let speedInKps = (speedInBps / 1024 ).toFixed(2)
  let speedInMbps = (speedInKps / 1024 ).toFixed(2)

  bitOutput.innerHTML += `${speedInBps}`
  kbOutput.innerHTML += `${speedInKps}`
  mbOutput.innerHTML += `${speedInMbps}`
}


// Initial
const init = async () => {
    startTime = new Date().getTime()
    image.src = imageLink
}

window.onload = () => init()