/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

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
        // var qr_svg = qr.image(data.inputURL, { type: 'svg' });
        // qr_svg.pipe(fs.createWriteStream('qr_img.png'));

        // var svg_string = qr.imageSync(data.inputURL, { type: 'svg' });
        const url = data.inputURL;
        let qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream('qr_img.png'));

        fs.writeFile('URL.txt', url, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
        console.log('Data: ', data.inputURL);
    })
    .catch((error) => {
        if (error) {
            // Promp couldn't be rendered in the current environment
            console.log('Error: ', error.message);
        } else {
            // Something else went wrong
            console.log('Success!');
        }
    });
