// welcome message
var user = 'User';
var salutation =  'Hi, ';
var greeting = salutation + user + '! Welcome to synth home, here we will look at some synthesizers.';
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

// product price
var moogPrice = 1800,
    moogSaleDiscount = .10,
    moogSalePrice = moogPrice - (moogPrice * moogSaleDiscount),
    moogPriceEl = document.getElementById('price'),
    moogSalePriceEl = document.getElementById('sale-price');

moogPriceEl.textContent = moogPrice.toFixed(2);
moogSalePriceEl.textContent = moogSalePrice.toFixed(2);

//user scores
var userOneMoogScore = 89,
    userOneBScore = 84,
    userTwoMoogScore = 75,
    userTwoBScore = 57,
    userThreeMoogScore = 79,
    userThreeBScore = 59,
    userOneMoogScoreEl = document.getElementById('userOneMoogScore');
    userOneBScoreEl = document.getElementById('userOneBScore');
    userTwoMoogScoreEl = document.getElementById('userTwoMoogScore');
    userTwoBScoreEl = document.getElementById('userTwoBScore');
    userThreeMoogScoreEl = document.getElementById('userThreeMoogScore');
    userThreeBScoreEl = document.getElementById('userThreeBScore');

userOneMoogScoreEl.textContent = userOneMoogScore.toFixed(2);
userOneBScoreEl.textContent = userOneBScore.toFixed(2);
userTwoMoogScoreEl.textContent = userTwoMoogScore.toFixed(2);
userTwoBScoreEl.textContent = userTwoBScore.toFixed(2);
userThreeMoogScoreEl.textContent = userThreeMoogScore.toFixed(2);
userThreeBScoreEl.textContent = userThreeBScore.toFixed(2);

//score averages

var moogAverage = (userOneMoogScore + userTwoMoogScore + userThreeMoogScore) / 3,
    bAverage = (userOneBScore + userTwoBScore + userBMoogScore) / 3,
    moogAverageEl = document.getElementById('moogAverage');
    bAverageEl = document.getElementById('bAverage');

moogAverageEl.textContent = moogAverage.toFixed(2);
bAverageEl.textContent = bAverage.toFixed(2);