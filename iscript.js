audio=new Audio('music.mp3');
audio.play()
score = 100;
cross = true;

 audiogo= new Audio('gameover.mp3');
    
   
document.onkeydown = function (e) {

    console.log("key code is :", e.key)
    if (e.key == 'ArrowUp') {

        boy = document.querySelector('.boy');
        boy.classList.add('animateBoy');

        setTimeout(() => {
            boy.classList.remove('animateBoy')
        }, 700);


    }
    if (e.key == 'ArrowRight') {

        boy = document.querySelector('.boy');
        boyX = parseInt(window.getComputedStyle(boy, null).getPropertyValue('left'));
        boy.style.left = boyX + 145 + 'px';

    }
    if (e.key == 'ArrowLeft') {

        boy = document.querySelector('.boy');
        boyX = parseInt(window.getComputedStyle(boy, null).getPropertyValue('left'));
        boy.style.left = (boyX - 145) + 'px';

    }


}
setInterval(() => {
    boy = document.querySelector('.boy');
    GameOver = document.querySelector('.GameOver');
    obstacal = document.querySelector('.obstacal');

    bx = parseInt(window.getComputedStyle(boy, null).getPropertyValue('left'));
    by = parseInt(window.getComputedStyle(boy, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacal, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacal, null).getPropertyValue('top'));
    offSetX = Math.abs(bx - ox);
    offSetY = Math.abs(by - oy);

    console.log(offSetX, offSetY)
    
    if (offSetX < 73 && offSetY < 52) {

        GameOver.innerHTML="Game Over - Reload to start over";
        obstacal.classList.remove('obsticalAni')
        audiogo.play();
        
        setTimeout(() => {
            audio.pause();
            audiogo.pause();
        }, 1000);
    }
    else if (offSetX < 145 && cross) {

        score += 100;
        updatescore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            anidur = parseFloat(window.getComputedStyle(obstacal, null).getPropertyValue('aniation-duration'));
            newdur = anidur - 0.1;
            obstacal.style.animationDuration = newdur = 's';
        }, 500);

    }

}, 10);
function updatescore(score) {

    ScoreContainer.innerHTML = "your score: " + score
}
