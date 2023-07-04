const sharp = require('sharp');

sharp('path_image.extenstion')
    .resize(80)
    .grayscale()
    .toFile('resized.png')