const raisinAlarm = function(cookie) {
  const raisin = "🍇";
  let result = false;
  //console.log (cookie[2] === raisin)
  cookie.forEach(element => {
    //console.log(element);
    if (element == "🍇") {
      result = true;
    }
  });

  return result ? "Raisin alert!" : "All good.";
};

const raisinAlarmArray = function(cookies) {
  let output = [];
  for (const row of cookies) {
    output.push(raisinAlarm(row));
  }
  return output;
};

console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
  ])
);