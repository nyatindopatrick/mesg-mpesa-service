const https = require('https')

const fetchData = url =>{
  let result;
  https.get(url, res => {
    res.setEncoding("utf8");
    let body = "";
    res.on("data", data => {
      body += data;
    });
    res.on("end", () => {
      const parseData= JSON.parse(body)
      // console.log(parseData.data[1].content)
      console.log(JSON.parse(parseData.data[1].content))
      parsedData = JSON.parse(parseData.data[1].content)
      result = parsedData
    });
  });
  return result;
}

module.exports = fetchData;
