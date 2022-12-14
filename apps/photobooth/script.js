const vid = document.querySelector('video');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

vid.srcObject = await navigator.mediaDevices.getUserMedia({ video: true });

function takeaPic() {
  [canvas.width, canvas.height] = [vid.videoWidth, vid.videoHeight];
  ctx.drawImage(vid, 0, 0, canvas.width, canvas.height);
  const image = document.createElement('img');
  image.src = canvas.toDataURL('image/jpg');
  image.style = `--rotate: ${Math.random() * 360}deg; --x:${Math.random() * 100}%; --y:${Math.random() * 100}%;`;
  document.body.appendChild(image);
}
vid.parentElement.addEventListener('click', takeaPic);
setInterval(takeaPic, 50);