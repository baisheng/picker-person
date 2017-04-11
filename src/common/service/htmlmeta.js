'use strict';
import axios from 'axios';
import cheerio from 'cheerio';

const htmlparser = require(`htmlparser2`)
const rhttp = /^https?:\/\//i
const whitelist = /(^(charset|author|host|description|theme-color)$)|(^(twitter:|og:))/im

export default class extends think.service.base {
    /**
     * init
     * @return {}         []
     */
    init(uri) {
        this.url = uri;

        // super.init(http);
        // this.http = http;

        // this.dbConfig = dbConfig;
        // this.dbConfig.type = 'mysql';
        // this.accountConfig = accountConfig;
        // this.ip = ip;
    }

    async fetch(callback) {
        let options = {
            url: this.url,
            method: 'get',
            timeout: 5000
        }
        // let options = {
        //     url: uri,
        //     headers: {
        //         'User-Agent': 'request'
        //     }
        // };

        //  setup the args/user_options
        // let user_args = [];
        // for (let i = 0; i < arguments.length; i++) {
        //     user_args.push(arguments[i]);
        // }

        // remove these from arg array
        // uri = user_args.shift();
        // callback = user_args.pop();

        // get user_options if specified
        // if (user_args.length > 0) {
        //     user_options = user_args.shift();
        // } else {
        //     user_options = null;
        // }

        // override default headers
        // if (user_options) {
        //     options.headers = user_options.headers;
        // }


        // request.get(options, function (error, response, body) {
        //     if (!error && response.statusCode == 200) {
        //         let $ = cheerio.load(body);
        //         let meta = $('meta');
        //         let keys = Object.keys(meta);
        //         let meta_obj = {};
        //         keys.forEach(function (key) {
        //             if (meta[key].attribs != undefined) {
        //                 if (meta[key].attribs.property && meta[key].attribs.content) {
        //                     meta_obj[meta[key].attribs.property] = meta[key].attribs.content;
        //                 }
        //                 if (meta[key].attribs.name && meta[key].attribs.content) {
        //                     meta_obj[meta[key].attribs.name] = meta[key].attribs.content;
        //                 }
        //             }
        //         });
        //
        //         callback(null, meta_obj);
        //     } else {
        //         callback(new Error('Bad Request' + response.statusCode));
        //     }
        // });


        // try {
        //     const response = await axios.get('/sites');
        //     const data = response.data;
        //     dispatch({
        //         type: 'FETCH_SITES_SUCCESS',
        //         data
        //     });
        // } catch (error) {
        //     dispatch({
        //         type: 'FETCH_SITES_ERROR',
        //         error
        //     });
        // }
        return await axios(options).then((response) => {
            let $ = cheerio.load(response.data);

            // let twitter = this.parseTwitter($);

            // console.log(JSON.stringify(twitter))
            // console.log("twitter -----");
            let title = $("title").text();

            let meta = $('meta');
            let keys = Object.keys(meta);
            let meta_obj = {};
            if (!think.isEmpty(title)){
                meta_obj.title = title;
            }
            keys.forEach(function (key) {
                if (meta[key].attribs !== undefined) {
                    if (meta[key].attribs.property && meta[key].attribs.content) {
                        meta_obj[meta[key].attribs.property] = meta[key].attribs.content;
                    }
                    if (meta[key].attribs.name && meta[key].attribs.content) {
                        meta_obj[meta[key].attribs.name] = meta[key].attribs.content;
                    }
                }
            });


            return meta_obj;
            // callback(null, meta_obj);

            // console.log(JSON.stringify(meta_obj))
            // console.log(response.data)
            // console.log(response.data);
            // console.log(response.status);
            // console.log(response.statusText);
            // console.log(response.headers);
            // console.log(response.config);
        }).catch((error) => {
            if (error.response) {
                // The request was made, but the server responded with a status code
                // that falls out of the range of 2xx
                // callback(new Error('Bad Request' + error.response.status));

                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                // callback(new Error('Bad Request' + error.message));

            }
            console.log(error.config);

            return {};

        });


    }


    /**
     * Returns JSON-LD provided by page given HTML object
     * @param  {Object}   chtml html Cheerio object
     * @return {Object}   BBPromise for JSON-LD
     */
    parseJsonLd(chtml) {
        let json = [];
        let jsonLd = chtml('script[type="application/ld+json"]');

        jsonLd.each(function () {
            let contents = chtml(this).text().trim();
            try {
                contents = JSON.parse(contents);
            } catch (e) {
                // Fail silently, just in case there are valid tags
                return;
            }
            if (contents) {
                json.push(contents);
            } else {
                return;
            }
        });

        if (json.length === 0) {
            throw new Error("No JSON-LD valid script tags present on page");
        }

        return json.length > 1 ? json : json[0];
    };

    /**
     * Scrapes OpenGraph data given html object
     * @param  {Object}   chtml html Cheerio object
     * @return {Object}         promise of open graph metadata object
     */
    parseOpenGraph(chtml) {
        let itemType;
        let property;
        let node;
        let meta = {};
        let metaTags = chtml('meta');
        let namespace = ['og', 'fb'];
        let subProperty = {
            image: 'url',
            video: 'url',
            audio: 'url'
        };
        let roots = {}; // Object to store roots of different type i.e. image, audio
        let subProp; // Current subproperty of interest
        let reason = new Error('No openGraph metadata found in page');

        if (!metaTags || metaTags.length === 0) {
            throw reason;
        }

        metaTags.each(function () {
            let element = chtml(this);
            let propertyValue = element.attr('property');
            let content = element.attr('content');

            if (!propertyValue || !content) {
                return;
            } else {
                propertyValue = propertyValue.toLowerCase().split(':');
            }

            // If the property isn't in namespace, exit
            if (namespace.indexOf(propertyValue[0]) < 0) {
                return;
            }

            if (propertyValue.length === 2) {
                property = propertyValue[1]; // Set property to value after namespace
                if (property in subProperty) { // If has valid subproperty
                    node = {};
                    node[subProperty[property]] = content;
                    roots[property] = node;
                } else {
                    node = content;
                }
                // If the property already exists, make the array of contents
                if (meta[property]) {
                    if (meta[property] instanceof Array) {
                        meta[property].push(node);
                    } else {
                        meta[property] = [meta[property], node];
                    }
                } else {
                    meta[property] = node;
                }
            } else if (propertyValue.length === 3) { // Property part of a vertical
                subProp = propertyValue[1].toLowerCase(); // i.e. image, audio - as properties, not values, these should be lower case
                property = propertyValue[2].toLowerCase(); // i.e. height, width - as properties, not values, these should be lower case
                // If root for subproperty exists, and there isn't already a property
                // called that in there already i.e. height, add property and content.
                if (roots[subProp] && !roots[subProp][property]) {
                    roots[subProp][property] = content.toLowerCase(); // As properties, not values, these should be lower case
                }
            } else {
                return; // Discard values with length <2 and >3 as invalid
            }

            // Check for "type" property and add to namespace if so
            // If any of these type occur in order before the type attribute is defined,
            // they'll be skipped; spec requires they be placed below type definition.
            // For nested types (e.g. video.movie) the OG protocol uses the super type
            // (e.g. movie) as the new namespace.
            if (property === 'type') {
                namespace.push(content.split('.')[0].toLowerCase()); // Add the type to the acceptable namespace list - as a property, should be lower case
            }
        });
        if (Object.keys(meta).length === 0) {
            throw reason;
        }
        if (meta.type) {
            meta.type = meta.type.toLowerCase(); // Make type case insensitive as this may be used programmatically
        }
        return meta;
    };

    /**
     * Scrapes Highwire Press metadata given html object
     * @param  {Object}   chtml html Cheerio object
     * @return {Object}   promise of highwire press metadata object
     */
    parseHighwirePress(chtml) {

        return exports.parseBase(
            chtml,
            ['meta'],
            'No Highwire Press metadata found in page',
            function (element) {
                let nameAttr = element.attr('name');
                let content = element.attr('content');

                // If the element isn't a Highwire Press property, skip it
                if (!nameAttr || !content || (nameAttr.substring(0, 9).toLowerCase() !== 'citation_')) {
                    return;
                }

                return nameAttr.substring(nameAttr.indexOf('_') + 1).toLowerCase();
            },
            function (element) {
                return element.attr('content');
            }
        );

    };

    /**
     * Scrapes general metadata terms given Cheerio loaded html object
     * @param  {Object}   chtml html Cheerio object
     * @return {Object}         BBPromise for general metadata
     */
    parseGeneral(chtml) {

        let clutteredMeta = {
            author: chtml('meta[name=author i]').first().attr('content'), //author <meta name="author" content="">
            authorlink: chtml('link[rel=author i]').first().attr('href'), //author link <link rel="author" href="">
            canonical: chtml('link[rel=canonical i]').first().attr('href'), //canonical link <link rel="canonical" href="">
            description: chtml('meta[name=description i]').attr('content'), //meta description <meta name ="description" content="">
            publisher: chtml('link[rel=publisher i]').first().attr('href'), //publisher link <link rel="publisher" href="">
            robots: chtml('meta[name=robots i]').first().attr('content'), //robots <meta name ="robots" content="">
            shortlink: chtml('link[rel=shortlink i]').first().attr('href'), //short link <link rel="shortlink" href="">
            title: chtml('title').first().text(), //title tag <title>
            lang: chtml('html').first().attr('lang') //lang <html lang="">
        };

        // Copy key-value pairs with defined values to meta
        let meta = {};
        let value;
        Object.keys(clutteredMeta).forEach(function (key) {
            value = clutteredMeta[key];
            if (value) { // Only add if has value
                meta[key] = value;
            }
        });

        // Reject promise if meta is empty
        if (Object.keys(meta).length === 0) {
            throw new Error('No general metadata found in page');
        }

        // Resolve on meta
        return meta;
    };


    parseTwitter(chtml) {
        if (!chtml) {
            throw new Error('Undefined argument');
        }

        let meta = {};
        let metaTags = chtml('meta');

        // These properties can either be strings or objects
        let dualStateSubProperties = {
            image: 'url',
            player: 'url',
            creator: '@username'
        };

        metaTags.each(function () {
            let element = chtml(this);
            let name = element.attr('property');

            let property;
            let content = element.attr('content');
            let node;

            // Exit if not a twitter tag or content is missing
            if (!name || !content) {
                return;
            } else {
                name = name.toLowerCase().split(':');
                property = name[1];
            }

            // Exit if tag not twitter metadata
            if (name[0] !== 'twitter') {
                return;
            }

            // Handle nested properties
            if (name.length > 2) {
                let subProperty = name[2];

                // Upgrade the property to an object if it needs to be
                if (property in dualStateSubProperties && !(meta[property] instanceof Object)) {
                    node = {};
                    node[dualStateSubProperties[property]] = meta[property];
                    meta[property] = []; // Clear out the existing string as we just placed it into our new node
                } else {
                    node = meta[property] ? meta[property] : {}; // Either create a new node or ammend the existing one
                }

                // Differentiate betweeen twice and thrice nested properties
                // Not the prettiest solution, but twitter metadata guidelines are fairly strict so it's not nessesary
                // to anticipate strange data.
                if (name.length === 3) {
                    node[subProperty] = content;
                } else if (name.length === 4) {
                    // Solve the very specific twitter:player:stream:content_type case where stream needs to be upgraded to an object
                    if (subProperty.toLowerCase() === "stream") {
                        node[subProperty] = {url: node[subProperty]};
                    } else {
                        node[subProperty] = node[subProperty] ? node[subProperty] : {}; //Either create a new subnode or ammend the existing one
                    }
                    node[subProperty][name[3]] = content;
                } else {
                    // Something is malformed, so exit
                    return;
                }
            } else {
                node = content;
            }

            // Create array if property exists and is not a nested object
            if (meta[property] && !(meta[property] instanceof Object)) {
                if (meta[property] instanceof Array) {
                    meta[property].push(node);
                } else {
                    meta[property] = [meta[property], node];
                }
            } else {
                meta[property] = node;
            }
        });

        if (Object.keys(meta).length === 0) {
            throw new Error("No twitter metadata found on this page");
        }

        return meta;
    }
}