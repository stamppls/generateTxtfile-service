const fs = require("fs");



let data = "";
let bank;

// writerTxtfile = () => {
//     console.log(data);

// }

modifyTxtfile = (fields) => {
    let dataRow = "";
    fields.forEach(field => {
        switch (field.fieldtype) {
            case "char":
                dataRow += `${field.example}`.padEnd(field.fieldlength, " ");
                break;
            case "number":
                dataRow += `${field.example}`.padStart(field.fieldlength, "0");
                break;
            case "date":
                dataRow += `${field.example}`.padStart(field.fieldlength, " ");
                break;
            case "string":
                dataRow += `${field.example}`.padEnd(field.fieldlength, " ");
                break;
            case "time":
                dataRow += `${field.example}`.padEnd(field.fieldlength, " ");
                break;
            default:
                break;
        }
    })
    data += dataRow + "\n";
}

editTxtfile = () => {
    bank.rows.forEach(row => {
        switch (row.rowtype) {
            case "header":
                modifyTxtfile(row.fields);
                break;
            case "product":
                modifyTxtfile(row.fields);
                break;
            case "transection":
                modifyTxtfile(row.fields);
                break;
            case "footer":
                modifyTxtfile(row.fields);
                break;
        }
    })
}

// exports.buildTxtfile = function() {
//     editTxtfile();
//     fs.writeFile("test.txt", data, "utf8", () => {
//         console.log(data)
//     })
// }
module.exports = {
    execute: (json, outputPath) => {
        bank = json;
        editTxtfile();
        return data;
    }
}