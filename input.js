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
  if (key === 'w') {
    connection.write('Move: up');
  }
  if (key === 'a') {
    connection.write('Move: left')
  }
  if (key === 's') {
    connection.write('Move: down') 
  }
  if (key === 'd') {
    connection.write('Move: right');
  }
  if (key === 'q') {
    connection.write('Say: come on!')
  }
};

module.exports = setupInput