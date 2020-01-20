module.exports = {
    mysql: {
        host: '127.0.0.1',
        user: 'root',
        password: 'pa351801',
        database: 'test',
        port: 3306
    },
    add: "INSERT INTO 'user' (null, 'name', 'age', 'sex') VALUES(0, ?, ?, ?, ?)"
};