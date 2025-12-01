const sql = require('mssql')

const dbConfig = {
    user: "sa",
    password: "sa123456",
    server: "DESKTOP-E29TQD8",
    database: "RestaurantDB",
    options: {
        trustServerCertificate: true,
        trustedConnection: true,
        enableArithAbort: true
    },
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    port: 1433
}

let pool

const getPool = async () => {
    if(!pool) {
        pool = new sql.ConnectionPool(dbConfig)
        await pool.connect()
    }
    return pool
}

const closePool = async () => {
    if(pool){
        await pool.close()
        pool = null
    }
}

module.exports = {
    sql,
    dbConfig,
    getPool,
    closePool
}