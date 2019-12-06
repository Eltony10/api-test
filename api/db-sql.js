//Database variables
let mysql = require('mysql2/promise');
const config = require('./db');
const connection = mysql.createConnection(config.mysql)

// Method gets name from db, returns 0 if not contained in db
module.exports.get = async (id) => {
  let con = await connection;
  let [data] = await con.query("SELECT id_number FROM register WHERE id_name = ? ",[id]);
  if(data.length == 0){
    return "0";
  }else{
    return data[0].id_number
  }
};

// Method to add register if its not on the db
module.exports.post = async (id,val) => {
  let con = await connection;
  let [data] = await con.query("SELECT id_number FROM register WHERE id_name = ? ",[id]);
  if(data.length == 0){
    await con.query("INSERT INTO register (id_name, id_number) VALUES (?,?)", [id, val]);
    return val;
  }else{
    let currentVal = data[0].id_number;
    let newVal = parseInt(currentVal) + parseInt(val);
    await con.query("UPDATE register SET id_number = ? WHERE id_name = ? ",[newVal, id]);
    return newVal.toString();
  }
};

// Method to delete a named register
module.exports.delete = async (id) => {
  let con = await connection;
  await con.query("DELETE FROM register WHERE id_name = ? ",[id]);
  return 204
};

// Method to update a named registers value
module.exports.put = async (id, newVal) => {
  let con = await connection;
  await con.query("UPDATE register SET id_number = ? WHERE id_name = ? ",[newVal, id])
  return newVal
};
