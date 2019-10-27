//////////Canvas drawing///////

const canv = document.getElementsByClassName('myCanvas')[0];
const ctx = canv.getContext("2d");
////////////////////////////////


const size4 = document.getElementsByClassName('size4')[0];
size4.addEventListener('click', function () {
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.addEventListener('load', getData);
  xmlhttp.open("GET", './data/4x4.json');
xmlhttp.send();
});

  function getData() {
    const myData = this.response;
    const myObj = JSON.parse(myData);
    const arr = Object.values(myObj);
    let color;
    let count = 0;
       for (let i=0; i<4; i++){
      for (let j=0; j<4; j++) {
        color = '#'+ arr[i][j];
        ctx.fillStyle = color;
        ctx.fillRect(i*128, j*128, 128, 128);
        count = count + 1;
       }
    }
  }

  function getData32() {
    const myData = this.response;
    const myObj = JSON.parse(myData);
    const arr = Object.values(myObj);
    let color;
    let count = 0;
       for (let i=0; i<32; i++){
      for (let j=0; j<32; j++) {
        color = 'RGBA('+arr[i][j]+')';
        ctx.fillStyle = color;
        ctx.fillRect(i*16, j*16, 16, 16);
        count = count + 1;
       }
    }
  }



const size32 = document.getElementsByClassName('size32')[0];
size32.addEventListener('click', function (event) {
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.addEventListener('load', getData32);

xmlhttp.open("GET", './data/32x32.json');
xmlhttp.send();
})


const image = document.getElementsByClassName('image')[0];
image.addEventListener('click', function () {
  let myImg = new Image();
  myImg.onload = function(){
    ctx.drawImage(myImg,0,0,512,512);
  };
  myImg.src ='./images/image.png';
})




