import * as fs from 'fs';

function authenticateUser(username: string, password: string): boolean {
    // Insecure: Plain text passwords stored in a file, no hashing or encryption
    const storedUsers = fs.readFileSync('users.txt', 'utf8').split('\n');

    for (let user of storedUsers) {
        const [storedUsername, storedPassword] = user.split(':');
        
        if (storedUsername === username && storedPassword === password) {
            return true;
        }
    }
    return false;
}

function executeQuery(query: string): any {
    // Insecure: Directly executing user-provided SQL query without sanitization
    const dbConnection = getDatabaseConnection();
    const result = dbConnection.query(query);
    return result;
}

function logSensitiveData(userId: string, password: string): void {
    // Insecure: Logging sensitive data (passwords) to a file
    fs.appendFileSync('sensitive-log.txt', `User: ${userId}, Password: ${password}\n`);
}

function unsafeFileUpload(file: any): void {
    // Insecure: Uploading files without proper validation or sanitization
    const uploadDir = '/uploads';
    const filePath = `${uploadDir}/${file.name}`;
    fs.writeFileSync(filePath, file.content);
}

// Example usage
const username = 'user1';
const password = 'password123';  // Plaintext password
if (authenticateUser(username, password)) {
    console.log('Authenticated!');
}

const sqlQuery = "SELECT * FROM users WHERE username = 'admin'";  // Unsanitized user input
const queryResult = executeQuery(sqlQuery);

logSensitiveData(username, password);  // Logging passwords to file

const uploadedFile = { name: 'file.txt', content: 'some file content' };  // File upload without validation
unsafeFileUpload(uploadedFile);
