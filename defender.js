const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'checkout.html');
const legitKey = 'pk_test_legit_key_123';

try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    if (content.includes(legitKey)) {
        console.log('🟢 SECURE: System intact.');
    } else {
        console.log('🔴 CRITICAL ALERT: UNAUTHORIZED KEY SWAP DETECTED!');
    }
} catch (error) {
    console.error('Error reading the file:', error.message);
}