const path = require("path");
const XLSX = require("xlsx");
const workbook = XLSX.readFile(path.join("./public/files/products.xlsx"));
const cb = workbook.Sheets[workbook.SheetNames[0]];
const cb_data = XLSX.utils.sheet_to_json(cb);
const evf = workbook.Sheets[workbook.SheetNames[1]];
const evf_data = XLSX.utils.sheet_to_json(evf);
const cnfj = workbook.Sheets[workbook.SheetNames[2]];
const cnfj_data = XLSX.utils.sheet_to_json(cnfj);
const fa = workbook.Sheets[workbook.SheetNames[3]];
const fa_data = XLSX.utils.sheet_to_json(fa);
const gel = workbook.Sheets[workbook.SheetNames[4]];
const gel_data = XLSX.utils.sheet_to_json(gel);
const gfm = workbook.Sheets[workbook.SheetNames[5]];
const gfm_data = XLSX.utils.sheet_to_json(gfm);
const hr = workbook.Sheets[workbook.SheetNames[6]];
const hr_data = XLSX.utils.sheet_to_json(hr);
//console.log(data);

module.exports = {
    cb_data,
    evf_data,
    cnfj_data,
    fa_data,
    gel_data,
    gfm_data,
    hr_data
};
