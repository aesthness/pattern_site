console.log('Script loaded successfully');


const canvas = document.getElementById('patternCanvas');
    const overlayCanvas = document.getElementById('overlayCanvas');
    const ctx = canvas.getContext('2d');
    const seasonSelect = document.getElementById('seasonSelect');
    const generateButton = document.getElementById('generatePattern');
    const overlayCtx = overlayCanvas.getContext('2d');

    

    function cropAndScale() {
      const scale = 0.36;
      const sourceCanvas = document.getElementById('patternCanvas');
      const destCanvas = document.getElementById('overlayCanvas');
      const sourceCtx = sourceCanvas.getContext('2d');
      const destCtx = destCanvas.getContext('2d');

      const cropX = 0;
      const cropY = 0;
      const cropWidth = sourceCanvas.width;
      const cropHeight = sourceCanvas.height - 20;

      const destWidth = cropWidth * scale;
      const destHeight = cropHeight * scale;

      destCanvas.width = destWidth;
      destCanvas.height = destHeight;

      destCtx.clearRect(0, 0, destCanvas.width, destCanvas.height);
      

      destCtx.drawImage(
        sourceCanvas, 
        cropX, cropY, cropWidth, cropHeight,
        0, 0, destWidth, destHeight
      );
    }



    function getRandomColor() {
      var r, g, b, color;
      r = Math.floor(Math.random() * 156) + 100;
      g = Math.floor(Math.random() * 156) + 100;
      b = Math.floor(Math.random() * 156) + 100;
      color = "rgb(" + r + "," + g + "," + b + ")";
      return color;
    }

    function setRandomBackground() {
      const bgColor = getRandomColor();
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }


    function getRandomColorforsummer() {
      var r, g, b, color;
      r = Math.floor(Math.random() * 40);
      g = Math.floor(Math.random() * 50) + 160;
      b = Math.floor(Math.random() * 70) + 200;
      color = "rgb(" + r + "," + g + "," + b + ")";
      return color;
    }

    function setRandomBackgroundforsummer() {
      const bgColor = getRandomColorforsummer();
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }


    function getRandomColorforWinter() {
      var r, g, b, color;
      r = Math.floor(Math.random() * 56) + 200;
      g = Math.floor(Math.random() * 56) + 200;
      b = Math.floor(Math.random() * 56) + 200;
      color = "rgb(" + r + "," + g + "," + b + ")";
      return color;
    }

    function setRandomBackgroundforwinter() {
      const bgColor = getRandomColorforWinter();
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }


    function getRandomColorforSpring() {
      var r, g, b, color;
      r = Math.floor(Math.random() * 100) + 150;
      g = Math.floor(Math.random() * 100) + 150;
      b = Math.floor(Math.random() * 100) + 150;
      color = "rgb(" + r + "," + g + "," + b + ")";
      return color;
    }

    function setRandomBackgroundforspring() {
      const bgColor = getRandomColorforSpring();
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function drawPattern(season) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (season === 'spring') {
        drawSpringPattern();
      } else if (season === 'summer') {
        drawSummerPattern();
      } else if (season === 'autumn') {
        drawAutumnPattern();
      } else if (season === 'winter') {
        drawWinterPattern();
      }
    }

    function drawSpringPattern() {
      const width = canvas.width;
      const height = canvas.height;

  // 랜덤 배경 설정 (봄의 파스텔 톤 배경)
      setRandomBackgroundforspring();

    function getRandom(min, max) {
        return Math.random() * (max - min) + min;
    }

    function getRandomFlowerColor() {
      const colors = [
        'rgba(255, 182, 193, 0.8)', // 연분홍
        'rgba(216, 191, 216, 0.8)', // 연보라
        'rgba(255, 255, 153, 0.8)'  // 연노랑
        ];
      return colors[Math.floor(getRandom(0, colors.length))];
    }

    function drawFlower(x, y, size, petalColor) {
      const petalCount = 6; // 꽃잎 개수
      const angleStep = (Math.PI * 2) / petalCount;

        // 꽃잎 그리기
        ctx.fillStyle = petalColor;
        for (let i = 0; i < petalCount; i++) {
          const angle = i * angleStep;
          const petalX = x + Math.cos(angle) * size;
          const petalY = y + Math.sin(angle) * size;

          ctx.beginPath();
          ctx.arc(petalX, petalY, size / 2, 0, Math.PI * 2);
          ctx.fill();
        }

        // 꽃의 중심부
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(x, y, size / 3, 0, Math.PI * 2);
        ctx.fill();
      }

      // 봄 패턴 생성
      for (let i = 0; i < 50; i++) {
        const x = getRandom(0, width);
        const y = getRandom(0, height);
        const size = getRandom(15, 25); // 꽃 크기
        const color = getRandomFlowerColor();

        drawFlower(x, y, size, color);
      }
    }


    function drawSummerPattern() {
      setRandomBackgroundforsummer();
      const waveHeight = Math.random() * 40 + 10;
      const waveSpacing = 30;
      const width = canvas.width;
      const height = canvas.height;

      for (let y = 0; y < height; y += waveSpacing) {
        const r = Math.floor(Math.random() * 40);
        const g = Math.floor(Math.random() * 50) + 160;
        const b = Math.floor(Math.random() * 56) + 200;

        ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
        ctx.beginPath();
        ctx.moveTo(0, y);

        for (let x = 0; x <= width; x += 5) {
          const wave = Math.sin((x / 50) + (y / 30)) * waveHeight;
          ctx.lineTo(x, y + wave);
        }

        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();
        ctx.fill();
      }
    }

    function getRandomColorforAutumn() {
      var r, g, b, color;
      r = Math.floor(Math.random() * 50) + 150;
      g = Math.floor(Math.random() * 50) + 80;
      b = Math.floor(Math.random() * 40) + 10;
      color = "rgb(" + r + "," + g + "," + b + ")";
      return color;
    }

    function setRandomBackgroundforautumn() {
      const bgColor = getRandomColorforAutumn();
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function drawAutumnPattern() {
      setRandomBackgroundforautumn();

      for (let i = 0; i < 80; i++) { 
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 20 + 10;

        ctx.save();
        ctx.translate(x, y);

    
        const r = Math.floor(Math.random() * 90) + 150; // 빨간색
        const g = Math.floor(Math.random() * 100) + 90;  // 주황색
        const b = Math.floor(Math.random() * 50) + 10;   // 노란색
        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;

        // 낙엽 모양 그리기
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(size / 2, -size, size, 0, size / 2, size); // 낙엽 형태 만들기
        ctx.bezierCurveTo(-size / 2, 0, -size, -size, 0, 0); // 낙엽 완성
        ctx.fill();

        ctx.restore();
      }
    }

    function drawWinterPattern() {
      setRandomBackgroundforwinter()
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < 100; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 10 + 5;
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    generateButton.addEventListener('click', () => {
      const selectedSeason = seasonSelect.value;
      drawPattern(selectedSeason);
      cropAndScale();
    });


    function saveCanvasAsImage() {
      const canvas = document.getElementById('patternCanvas');
      const link = document.createElement('a');
      link.download = 'pattern.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    }


    document.getElementById('savebtn').addEventListener('click', saveCanvasAsImage);


    let browserPoint = (event)=>{
            console.log(`브라우저 좌표 : (${event.pageX}, ${event.pageY})`);
        }
        let clientPoint = (event) =>{
            console.log(`화면 좌표 : (${event.clientX}, ${event.clientY})`);
        }
        window.addEventListener('click',e=>{
            browserPoint(e);
            clientPoint(e);
        });