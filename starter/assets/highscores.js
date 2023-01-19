var highScoreList = document.getElementById('highscores');
var clearScoresBtn = document.getElementById('clear');
var savedScores = JSON.parse(localStorage.getItem("highscores")) || [];
// custom compare function
function compareUserScoresAndSort (userObj1, userObj2) {
    return (userObj1.score - userObj2.score) ? 1 : -1;
}
savedScores.sort(compareUserScoresAndSort);
console.log('Saved scores are', savedScores);

for(let i = 0; i < savedScores.length; i++) {
    if (!savedScores.length) {
        highScoreList.textContent = 'No saved scores to display';
        break;
    }
    var liEl = document.createElement('li'); // dynamically create your li element
    liEl.textContent = savedScores[i]['initials'] + ' - ' + savedScores[i]['score']; // James - 4
    highScoreList.appendChild(liEl); // append the li to the ol in the DOM
}

clearScoresBtn.addEventListener('click', function () {
    localStorage.clear();
    highScoreList.replaceChildren();

})