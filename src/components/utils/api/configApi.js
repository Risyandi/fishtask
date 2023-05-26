// configuration to couchDB
export default {
    couchDBUrl: process.env.REACT_APP_COUCHCDB_URL,
    couchDBAuth: {
        username: process.env.REACT_APP_COUCHDB_USERNAME,
        password: process.env.REACT_APP_COUCHDB_PASSWORD,
    },
};