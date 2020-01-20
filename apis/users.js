const mysql = require('mysql');
const config = require('../config/db.js');
const pool  = mysql.createPool(config.mysql);

exports.add = (req, res, next) => {
    const {name, age, sex} = req.query || {} 
    console.log(req)
    console.log(name, age, sex)
    pool.getConnection((err, connection) => {
        connection.query(config.add, [name, age, sex], (err, result) => {
            if (result) {
                res.json({
                    code: 200,
                    msg:'增加成功'
                })
            }
        })
    })
}