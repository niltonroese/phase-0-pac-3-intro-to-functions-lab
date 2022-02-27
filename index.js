function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(word) { 
    const cantAnswer = "I can't hear you!";
    const yesAnswer = "YES INDEED!";
    const loveAnswer = "I would love to!";
    if (word.toLowerCase() === word) {
        return cantAnswer;
    } else if (word.toUpperCase() === word) {
        return yesAnswer;
    } else if ("Let's have dinner together!" === word) {
        return loveAnswer;
    }
}