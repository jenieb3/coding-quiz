// code for timer linked to start button
var timer = document.querySelector("#time");
var startBtn = document.querySelector("#start");
var count = 60;

// timer button counts down
startBtn.addEventListener("click", function() {
    var interval = setInterval(function(){
        count--;
        timer.textContent = count;
        if (count === 0) {
            clearInterval(interval);
        }
    }, 1000);
});
