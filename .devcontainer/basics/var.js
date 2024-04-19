const accountId = 12345
let accountEmail = "ak12@gmail.com"
var password = "987456"

city = "pune"

console.log(accountId);
accountEmail = "ak123@gmail.com"
password = "9874568"

// prefer to noy used var beacause issue in block scope and functional scope.

console.table([accountId, accountEmail, password, city]);