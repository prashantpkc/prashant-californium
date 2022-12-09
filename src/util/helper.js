const d = new Date();
const printDate = function () {
  console.log(d);
};
const printMonth = function () {
  console.log(d.getMonth() + 1);
};
const getBatchInfo = function (name, week, day, topic) {
  console.log(
    ` batch ${name}, ${week}, ${day}, the topic being taught today is ${topic}.`
  );
};

module.exports.printDate = printDate;
module.exports.printMonth = printMonth;
module.exports.getBatchInfo = getBatchInfo;
