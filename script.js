const audio = new Audio('asset/confetti.mp3');
const musik = document.getElementById('musik');
const jsConfetti = new JSConfetti()

const starts = document.getElementById('start')
const content = document.getElementById('content')
const body = document.body

window.addEventListener('beforeunload', () => {
  window.scrollTo(0, 0);
});
function start() {
  
    let countdown = 5;

    for (let i = 0; i < countdown; i++) {
        setTimeout(() => {
            starts.textContent = countdown - i; // menampilkan 5, 4, 3, 2, 1
        }, i * 1000);
    }

    setTimeout(() => {
        starts.classList.add('hidden');
        // content.classList.remove('hidden');
        body.classList.remove('overflow-hidden');
        audio.play();
        jsConfetti.addConfetti();
        AOS.init();
        musik.play();

        
    }, countdown * 1000);
}

// document.addEventListener('DOMContentLoaded', function () {
//   const player = new MediaElementPlayer('musik', {
//     features: [
//         'playpause',
//         'current',
//         'progress',
//         'duration',
//         'volume',
//         'fullscreen',
//       ],
//       stretching: 'responsive',
//       success: function (mediaElement, originalNode, instance) {
//         console.log('MediaElement initialized');
//       }
//   });
// });

const slider = document.getElementById('draggable-scroll');
  let isDown = false;
  let startX;
  let scrollLeft;
  let velocity = 0;
  let targetScrollLeft;
  let animationFrame;

  slider.style.scrollBehavior = 'auto'; // matikan smooth CSS selama drag

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    targetScrollLeft = scrollLeft;
    velocity = 0;
    cancelAnimationFrame(animationFrame);
  });

  slider.addEventListener('mouseleave', () => {
    if (isDown) {
      isDown = false;
      slider.classList.remove('active');
      momentumScroll();
    }
  });

  slider.addEventListener('mouseup', () => {
    if (isDown) {
      isDown = false;
      slider.classList.remove('active');
      momentumScroll();
    }
  });

  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // scroll speed
    targetScrollLeft = scrollLeft - walk;
    velocity = targetScrollLeft - slider.scrollLeft; // hitung kecepatan
  });

  function momentumScroll() {
    // lerp function
    const lerp = (start, end, t) => start + (end - start) * t;

    velocity *= 0.95; // perlambat kecepatan

    targetScrollLeft -= velocity;

    // interpolasi posisi scroll ke targetScrollLeft
    slider.scrollLeft = lerp(slider.scrollLeft, targetScrollLeft, 0.1);

    if (Math.abs(velocity) > 0.5) {
      animationFrame = requestAnimationFrame(momentumScroll);
    }
  }
