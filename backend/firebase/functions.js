const fs = require('fs');

/**
 * Grab the file extension from the file that was uploaded.
 * @param {files} files File object array(?) that contains the file mimetype.
 * @returns {string[]} Array of file extensions.
 */
function getFileExtensions(files) {
    let fileExtensions = [];
    for (let file of files) {
        if (file.mimetype === "image/png") {
            fileExtensions.push("png");
        } else if (file.mimetype === "image/jpeg") {
            fileExtensions.push("jpg");
        } else {
            res.status(400).send({
                message: "A file was neither jpeg nor png.",
            });
            return null;
        }
    }
    return fileExtensions;
}

/**
 * Write multiple images to system inside the directory, 'image-files'
 * @param {Files} files An object of files that has been processed by the middleware multer
 * @param {string[]} fileExtensions Contains the extensions for all the files
 * @returns {Promise} Promise object returns undefined
 */
async function writeImages(files, fileExtensions) {
    return new Promise((resolve, reject) => {
        // i increments when writeFile has been start
        // j increments when writeFile has been completed
        let i = 0,
            j = 0;
        let size = files.length;

        console.log("Writing images...");
        // Begin writing files...
        for (let file of files) {
            fs.writeFile(
                `./image-buffer/image${i}.${fileExtensions[i]}`,
                file.buffer,
                () => {
                    j++;
                    // When all files has been written, return
                    if (j >= size) {
                        console.log("Writing images complete");
                        resolve();
                    }
                }
            );
            i++;
        }
    });
}

module.exports = {
    getFileExtensions: getFileExtensions,
    writeImages: writeImages,
}