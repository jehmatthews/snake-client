const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    ip: IP,
    port: PORT
  });

  conn.on('connect', (data) => {
    console.log("Succesfully connected to game server");
  });

  conn.on('connect', (data) => {
    console.log("Name: JHM");
    // console.log("Move: up");
  });
  
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;