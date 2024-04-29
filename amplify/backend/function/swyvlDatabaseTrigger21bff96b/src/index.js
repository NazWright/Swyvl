exports.handler = function (event, context) {
  console.log(JSON.stringify(event, null, 2));
  event.Records.forEach((record) => {
    console.log(record.eventID);
    console.log(record.eventName);
    console.log("Swyvl User Record: %j", record.dynamodb);
  });
  context.done(null, "Successfully processed Swyvl user record");
};
