/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';

inquirer
    .prompt([
        {
            type: 'input',
            name: 'inputURL',
            message: 'Enter URL here (Required): ',
            validate: (urlInput) => {
                if (urlInput) {
                    return true;
                } else {
                    console.log('Enter URL here (Required): ');
                    return false;
                }
            },
        },
    ])
    .then((data) => {
        console.log('Data: ', data);
    })
    .catch((error) => {
        if (error) {
            // Promp couldn't be rendered in the current environment
            console.log('Error: ', error);
        } else {
            // Something else went wrong
            console.log('Success!');
        }
    });
