const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 3000,
  });

  conn.on('connect', (data) => {
    console.log("Succesfully connected to game server");
  });

  conn.on('connect', (data) => {
    console.log("Name: JHM");
    // console.log("Move: up");
    // console.log("Move: up");
  });
  
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // const handleUserInput = function (key) {
  //   if (key === '\u0003') {
  //     process.exit();
  //   }
  // };

  return conn;
};

module.exports = connect;