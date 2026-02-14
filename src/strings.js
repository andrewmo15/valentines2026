export function getTitle(count) {
    switch (count) {
        case 0:
            return "Hey Babies, wanna be my Valentine?";
        case 1:
            return "Haha real funny, but seriously, will you be my Valentine?";
        case 2:
            return "Let's try this again, will you be my Valentine?";
        case 3:
            return "It was funny the first few times...now you're just making me mad'";
        case 4:
            return "You're making me really mad now..."
        case 5:
            return "Don't make me revoke boyfriend privileges...";
        case 6:
            return "...";
        default:
            return "";
    }
}

export function getYesButtonLabel() {
    return "Yes";
}

export function getNoButtonLabel() {
    return "No";
}

export function getThatsWhatIThoughtLabel() {
    return "That's what I thought";
}

export function getJKlolLabel() {
    return "JK lol";
}

export function getFinalScreenContent() {
    return "Yay I love you so much baby, your gifts will come soon! <3";
}