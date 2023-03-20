import auth from './auth.config';
import demoaccount from './demoaccount.config';

const clientApp = {
    key: 'fkt6ds',
    token: 'chx96at'
}

const device = {
    header: 'fkt7ap',
    local: 'lka8kt'
};

const demo = true;
const allowDemoAccount = true;
const useApi = false;


export default {
    clientApp,
    device,
    allowDemoAccount,
    useApi,
    auth,
    demoaccount,
    demo
}
