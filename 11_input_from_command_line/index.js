
//console.log(process.argv); // show all args value
//console.log(process.argv[2]); // node index.js Abc Efg => show Abc

// Creating a simple program which accept 3 params:
// 1 Param: Create or Delete File
// 2 Param: Name of File
// 3 Param: Text in File

const fs = require('fs');
const input = process.argv;

if(input[2] == "create"){
    fs.writeFileSync(input[3],input[4]);
    console.log("File Created with Name", input[3]);
}
else if(input[2] == "delete"){
    fs.unlinkSync(input[3]);
    console.log("File Deleted with Name", input[3]);

}else{
    console.log("Invalid Input");
}
// Input:
// node index.js create text.txt "Hello This is Huzaifa Khan"

// Output:
// [
//     'C:\\Program Files\\nodejs\\node.exe',
//     'D:\\My Learning\\NodeJS_Complete\\11_input_from_command_line\\index.js',
//     'create',
//     'text.txt',
//     'Hello This is Huzaifa Khan'
//   ]