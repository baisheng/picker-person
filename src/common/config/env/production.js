'use strict';

export default {
    db: {
        type: 'mysql',
        adapter: {
            mysql: {
                host: '114.55.230.6',
                // port: '3310',
                port: '3309',
                // database: 'picker',
                // database: 'yolanda',
                // database: 'mengling',
                database: 'picker_resume',
                user: 'root',
                password: 'ub08JASJQy9s',
                prefix: 'picker_',
                encoding: 'UTF8MB4_GENERAL_CI'
            }
        }
    },
    // resource_on: false
    resource_on: true
};

