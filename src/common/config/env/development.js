'use strict';

export default {
    db: {
        type: 'mysql',
        adapter: {
            mysql: {
                host: '127.0.0.1',
                port: '3308',
                database: 'picker_resume',
                user: 'root',
                password: 'abcd1234',
                prefix: 'picker_',
                encoding: 'UTF8MB4_GENERAL_CI'
            }
        }
    },
    resource_on: false
};