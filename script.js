const luckGeneratorMessages = {
    health: ['drink more water', 'get better sleeps', 'eat healthier food', 'exercise more'],
    gacha: ['Go for it', 'Now is not the time', "Don't spend all resources in one go", 'Wait a bit longer'],
    longTermGoal: ['Continue to work hard on it', 'Try to remember why you want to do it in the first place', 'Try a different approach if stuck', 'Share your progress with a friend'],
    overallLuck: ['Good', 'Very good', 'Normal', 'Bad', 'Very bad']
};

const selectRandomMessage = (array) => {
    
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
};

const displayMessage = () => {
    console.log('Hello Lunar, here is your luck prediction for today:\n');
    console.log('Health: You should ' + selectRandomMessage(luckGeneratorMessages.health) + '.');
    console.log('Gacha: ' + selectRandomMessage(luckGeneratorMessages.gacha) + '.');
    console.log('Long-term goal: ' + selectRandomMessage(luckGeneratorMessages.longTermGoal) + '.');
    console.log('Overall luck: ' + selectRandomMessage(luckGeneratorMessages.overallLuck) + '.');
};



//TODO
//add additional comments based on overall luck

displayMessage();