module.exports = {
    development: {
        port: 3001,
        host: '192.168.0.31',
        database: {
            host: 'mongo',
            port: 27017,
            name: 'jwt-auth'
        }
    },
    production: {
        port: process.env.PORT,
        host: process.env.EV_HOST,
        database: {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            name: process.env.DB_NAME
        }
    }
};
