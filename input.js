const { MOVE_UP, MOVE_LEFT, MOVE_DOWN, MOVE_RIGHT, MESSAGES } = require("./constants");

let connection;

const setupInput = (conn) => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  connection = conn;
  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') { // will quit the app
    process.exit();
  }
  // next logic moves the snake based on keys pressed
  if (key === MOVE_UP) {
    connection.write('Move: up');
  }
  if (key === MOVE_LEFT) {
    connection.write('Move: left');
  }
  if (key === MOVE_DOWN) {
    connection.write('Move: down');
  }
  if (key === MOVE_RIGHT) {
    connection.write('Move: right');
  }
  if (MESSAGES[key]) {
    connection.write(MESSAGES[key]);
  }
};

module.exports = setupInput