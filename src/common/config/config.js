'use strict';
import fs from 'fs';
let port;
let portFile = think.ROOT_PATH + think.sep + 'port';
if (think.isFile(portFile)) {
    port = fs.readFileSync(portFile, 'utf8');
}
/**
 * config
 */
export default {
    //key: value
    port: port || 5000,
    http_: 1,
    // default_module: "home",
    route_on: true,
    resource_on: true,
    resource_reg: /^(upload\/|backup\/|static\/|components\/|themes\/|resume_themes\/|[^\/]+\.(?!js|html|xml)\w+$)/,
    // resource_reg: /^(static\/|theme\/|[^\/]+\.(?!js|html|xml)\w+$)

    log_error: true,
    log_request: false,
};