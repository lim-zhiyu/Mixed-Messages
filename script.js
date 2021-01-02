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
    const overallLuck = selectRandomMessage(luckGeneratorMessages.overallLuck);

    console.log('Hello Lunar, here is your luck prediction for today:\n');
    console.log('Health: You should ' + selectRandomMessage(luckGeneratorMessages.health) + '.');
    console.log('Gacha: ' + selectRandomMessage(luckGeneratorMessages.gacha) + '.');
    console.log('Long-term goal: ' + selectRandomMessage(luckGeneratorMessages.longTermGoal) + '.');
    console.log(`Overall luck: ${overallLuck}.\n`);

    switch (overallLuck) {
        case 'Good':
            console.log("Everything will be fine, stay cool!");
            break;
        case 'Very good':
            console.log("It's a good day to try out something new!");
            break;
        case 'Normal':
            console.log("Do not fear the unforseen, just do it!");
            break;
        case "Bad":
            console.log("Try not to be reckless today!");
            break;
        case 'Very bad':
            console.log("Think twice before doing important things!");
            break;
        default:
            console.log("Error: Unexpected value of variable overallLuck.");
            break;
    }
};

displayMessage();