function getUserInfo(userId) {
    // Fake data
    const users = [
        { id: 1, name: "Alice", age: 25 },
        { id: 2, name: "Bob", age: 30 },
        { id: 3, name: "Charlie", age: 35 }
    ];

    let user;
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === userId) {
            user = users[i];
        }
    }

    // Trying to access properties of an undefined user
    console.log("User Info: " + user.name + ", Age: " + user.age);
    return user;
}

function validateUserInput(input) {
    // Incorrect logic for validation
    if (input === "" || input === null) {
        return false;  // Incorrectly returns false for a valid string input
    }

    return true;
}

// Attempting to use functions with incorrect parameters and assumptions
let inputId = "2";  // input should be a number, not a string
if (validateUserInput(inputId)) {
    let user = getUserInfo(inputId);
    if (!user) {
        console.log("User not found!");
    }
}
