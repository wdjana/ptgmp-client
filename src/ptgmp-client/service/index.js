const headers = {
    Accept: 'application/json',
    'Content-Type':'application/json',
};

const capp = {};
const cdevice = {};
const csession = {};
const server = {};

function resolveResponse(response) {
    if (response.ok) {
        return response.text()
            .then(text => {
                try {
                    let json = JSON.parse(text);
                    console.log({ json });

                    let { device, session, res, err } = json;

                    if (device) {
                        cdevice.token = device;
                        localStorage.setItem(cdevice.local, cdevice.token);
                    }

                    if (session) {
                        csession.token = session;
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

    cdevice.header = config.device.header;
    cdevice.local = config.device.local;
}

function initOptions() {
    let options = { headers };

    options.method = 'GET';
    options.headers[capp.key] = capp.token;

    cdevice.token = localStorage.getItem(cdevice.local);
    if (cdevice.token) {
        options.headers[cdevice.header] = cdevice.token;
    }

    return options;
}

function init(api, config) {
    initConfig(config);
    let options = initOptions();

    let url = `${api}?synchronize`;

    return fetch(url, options)
        .then(response => resolveResponse(response))
        .then(result => {
            let retval = false;
            let { res } = result;
            let { time } = res || {};

            if (time > 0) {
                server.time = time;
                retval = true;
            }

            return retval;
        });

}

export default { init };
