// An object to store the messages.
const fortuneGeneratorMessages = {
    health: ['drink more water', 'get better sleeps', 'eat healthier food', 'exercise more', 'avoid crowded places'],
    gacha: ['Go for it', 'Now is not the time', "Now or never", "Don't spend all your resources in one go", 'Wait a bit longer'],
    longTermGoal: ['Continue to work hard on it', 'Try to remember why you want to do it in the first place', 'Try a different approach if stuck', 'Share your progress with a friend', 'consistency is the key'],
    overallLuck: ['Good', 'Very good', 'Normal', 'Bad', 'Very bad']
};

// Returns a random index number based on the argument array.
const selectRandomMessage = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
};

// Displays the message in a fixed format. The result of each fortune category is randomised. Also displays an additional message based on the result of "Overall luck".
const displayMessage = () => {
    const overallLuck = selectRandomMessage(fortuneGeneratorMessages.overallLuck);

    console.log('Hello user, here is your predicted fortune for the day:\n');
    console.log('Health: You should ' + selectRandomMessage(fortuneGeneratorMessages.health) + '.');
    console.log('Gacha: ' + selectRandomMessage(fortuneGeneratorMessages.gacha) + '.');
    console.log('Long-term goal: ' + selectRandomMessage(fortuneGeneratorMessages.longTermGoal) + '.');
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
            console.log("Try not to act recklessly!");
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