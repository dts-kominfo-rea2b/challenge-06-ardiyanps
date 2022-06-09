// TODO: import module bila dibutuhkan di sini
const fs = require('fs');

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData1 = (nextStep) => {
  fs.readFile(file1, 'utf-8', (err, data) => {
    if (err) {
      return console.log(err);  
    }
      let isiData1 = JSON.parse(data).message.slice(5);
      let data1 = [];
      data1.push(isiData1);
      nextStep(data1);
  })};
  const bacaData2 = (data1, nextStep) => {
      fs.readFile(file2, 'utf-8', (err, data) => {
        if (err) {
          return console.log(err);  
        }
          let isiData2 = JSON.parse(data)[0].message.slice(5);
          let data2 = data1;
          data2.push(isiData2);
          nextStep(data2);
          
      })};
  const bacaData3 = (data2, nextStep) => {
      fs.readFile(file3, 'utf-8', (err, data) => {
        if (err) {
          return console.log(err);  
        }
          let isiData3 = JSON.parse(data)[0].data.message.slice(5);
          let data3 = data2;
          data3.push(isiData3);
          nextStep(data3);
      })};
  const fnCallback = (err, data) => {
      if (err) {
          return console.log(err);  
        }
      return data;
  }
const bacaData = (fnCallback) => {
      bacaData1((data1) => {
          bacaData2(data1, (data2) => {
              bacaData3(data2, (data3) => {
                  fnCallback(data3);
              });
          });
      });
}


// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
