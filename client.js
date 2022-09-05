const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    ip: IP,
    port: PORT
  });

  conn.on('connect', () => {
    console.log("Succesfully connected to game server"); // shows when connected
  });

  conn.on('connect', () => {
    console.log("Name: JHM"); // logs player name
  });
  
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;