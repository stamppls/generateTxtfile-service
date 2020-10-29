var os = require('os'); os.EOL

let data = "";
let bank;

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
                dataRow += `${field.example}`.padEnd(field.fieldlength, " ");
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
    data += dataRow + "\r\n";
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

module.exports = {
    execute: (req, res) => {
        bank = req.body;
        editTxtfile();
        res.setHeader('Content-type', "application/octet-stream");
        res.setHeader('Content-disposition', 'attachment; filename=file.txt');
        res.jsonp({
            data: data
        });
        data = "";
    }
}