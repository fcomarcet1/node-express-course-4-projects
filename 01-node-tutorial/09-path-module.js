const path = require('path');

// return specific separator --> \
console.log(path.sep); 

// C:\xampp\htdocs\node-express-course-freecodecamp-4projects\01-node-tutorial
console.log(__dirname); 

// C:\xampp\htdocs\node-express-course-freecodecamp-4projects\01-node-tutorial\09-path-module.js
console.log(__filename);

const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath); // \content\subfolder\test.txt

const base = path.basename(filePath);
console.log(base); // test.txt


const absolutePath = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolutePath); 
// C:\xampp\htdocs\node-express-course-freecodecamp-4projects\01-node-tutorial\content\subfolder\test.txt
