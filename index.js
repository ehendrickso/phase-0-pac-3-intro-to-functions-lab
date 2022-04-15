const string = "Hello";

function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    return console.log(string.toUpperCase())
}

function logWhisper(string) {
    return console.log(string.toLowerCase())
}

function sayHiToHeadphonedRoommate(string) {
    if  (string == "Let's have dinner together!")
    {
        return "I would love to!"
    }
    if (string == string.toLowerCase())
    {
        return "I can't hear you!"
    }
    if (string == string.toUpperCase())
    {
        return "YES INDEED!"
    }
}



/*If the string that is passed into the function is all lowercase, the function should return "I can't hear you!"
If the string that is passed into the function is all uppercase, the function should return "YES INDEED!"
If the string that is passed into the function is equal to "Let's have dinner together!", the function should return "I would love to!" */