import jwt from 'jsonwebtoken';

const headers = {
    Accept: 'application/json',
    'Content-Type':'application/json',
};

const capp = {};
const cdevice = {};
const csession = {};
const server = {};

function transform(data)
{
    return Object.entries(data)
        .map(x => `${encodeURIComponent(x[0])}=${encodeURIComponent(x[1])}`)
        .join('&');
}

function resolveResponse(response) {
    if (response.ok) {
        return response.text()
            .then(text => {
                try {
                    let json = JSON.parse(text);
                    console.log({ json });

                    let { device, session, res, err, user } = json;

                    if (device) {
                        localStorage.setItem(cdevice.local, device);
                    }

                    if (session && csession.local) {
                        localStorage.setItem(csession.local, session);
                    }

                    // not saving user info on localStorage
                    if (user) {
                        if (user.id && user.id > 0) {
                            //do checkin
                            server.user = user;
                        } else {
                            delete server.user;
                            // do logout
                        }
                    }

                    return { res, err };

                } catch (ex) {
                    console.log({ ex, text });
                    return { err: 'not json'};
                }
            });
    } else {
        let err = `${response.status} ${response.statusText}`;
        console.log({ err });
        return { err };
    }
}

function initConfig(config) {
    capp.key = config.clientApp.key;
    capp.token = config.clientApp.token;
    capp.salt = config.salt;

    cdevice.header = config.device.header;
    cdevice.local = config.device.local;

    if (config.session) {
        csession.header = config.session.header;
        csession.local = config.session.local;
    }
}

function initOptions() {
    let options = { headers };

    options.method = 'GET';
    options.headers[capp.key] = capp.token;

    cdevice.token = localStorage.getItem(cdevice.local);
    if (cdevice.token) {
        options.headers[cdevice.header] = cdevice.token;
    }

    if (csession.local) {
        csession.token = localStorage.getItem(csession.local);
        if (csession.token && csession.header) {
            options.headers[csession.header] = csession.token;
        }
    }

    return options;
}

function sendRequest(url, options) {
    return fetch(url, options)
        .then(response => resolveResponse(response))
        .catch( err => {
            return { err };
        });
}

function init(api, config) {
    initConfig(config);
    let options = initOptions();
    let url = `${api}?synchronize`;

    return sendRequest(url, options)
        .then(result => {
            let retval = false;
            let { res } = result;
            let { time } = res || {};

            if (time > 0) {
                server.time = time;
                capp.api = api;
                retval = true;
            }

            return retval;
        });
}



function get(query) {
    let options = initOptions();
    let url = `${capp.api}?${query}`;
    return sendRequest(url, options);
}

function post(query, data) {
    if (cdevice.token && capp.salt) {
        let salt = `${capp.salt}${cdevice.token}${capp.salt}`;
        data = jwt.sign(data, salt, { algorithm: 'HS256' });
        let body = transform({ data });

        let options = initOptions();
        options.method = 'POST';
        options.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
        options.body = body;

        let url = `${capp.api}?${query}`;

        return sendRequest(url, options);
    } else {
        return { err: 'invalid credentials' };
    }
}


function getserver() {
    return server;
}

export default { init, get, post };
export { getserver };
