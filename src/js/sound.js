const watchedBtns = document.querySelectorAll('#btn');
const track1 = document.getElementById('1');

watchedBtns.forEach(function (watchedBtn) {
  watchedBtn.addEventListener('click', function () {
    // track2.pause();
    track1.currentTime = 0;
    track1.play();
  });
});
