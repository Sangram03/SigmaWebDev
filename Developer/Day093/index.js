// You have to write a Node.js program to clear clutter inside of a dictory and organize the contents of that dictory into different folders

// for example, these files becomes:


// 1. name.jpg
// 2. name.png
// 3. this.pdf
// 4. harry.zip
// 5. Rohan.zip
// 6. cat.jpg
// 7. harry.pdf


// this:
// jpg/name.jpg , jpg/cat.jpg


// png/name.png
//pdf/this.pdf  pdf/harry.pdf

// zip/harry.zip   zip/Rohan.zip

import fs from "fs/promises"
import fsn from "fs"
import path from "path"

const basepath =""

// console.log(fs);

let files = await fs.readdir(__dirname ) //basepath

console.log(files);




for (const item of files) {
    let ext = item.split(".")[item.split(".").length-1]
    console.log(ext);
    if(  ext != "js" && ext != "json" && item.split(".").length > 1){

    
    
    if (fsn.existsSync(path.join(basepath, ext))   ){
       // move the file to this directory if its not a js or json file
       fs.rename(path.join(basepath,item),path.join(basepath,ext,item))
    }
    else{
        fs.mkdir(ext)
    }
}
    console.log(item);
    
}




