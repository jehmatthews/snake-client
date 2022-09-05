const { MOVE_UP, MOVE_LEFT, MOVE_DOWN, MOVE_RIGHT, MESSAGES } = require("./constants");
// above is all of the constants being imported
let connection;

const setupInput = (conn) => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  connection = conn;

  const handleUserInput = function (key) { // where movements are read
    if (key === '\u0003') { // will quit app
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

  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = setupInput