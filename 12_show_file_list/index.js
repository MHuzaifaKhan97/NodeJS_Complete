// Make file in folder
// Use Path module
// Get File Name & Print

const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname,"files");
//console.log(dirPath);

// for(i=1;i<=5;i++){
//     //fs.writeFileSync(dirPath+"/text"+i+".txt","This is a simple text file number "+i+"");
//     // Or we can use template literals
//    fs.writeFileSync(`${dirPath}/text${i}.txt`,`This is a simple text file number ${i}.`)
// }

fs.readdir(dirPath,(error,files)=>{
    // console.warn(files);
    // Or
    files.forEach((item) => {
        console.log(`File Name is : ${item}`);
    });
});

// We can not access folder outside the folder or any other drive. because our folder act as a server when we run our command.
// In our case our folder is 12_show_file_list so we can not access any other folder or files outside this.