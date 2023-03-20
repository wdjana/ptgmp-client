const alphanumeric = /^[a-zA-X0-9]+$/;
const words = /\w+/;

const defaultMin = 1;

function validate(text, pattern, min, max) {
    let res = false;
    let err = null;

    if (text && typeof text === 'string') {
        min = min > 0 ? min : defaultMin;
        if (text.length >= min) {
            let can_continue = true;
            if (max > min) {
                can_continue = text.length <= max;
            }

            if (can_continue) {
                pattern = pattern ? pattern : alphanumeric;
                res = pattern.test(text);
                if (!res) {
                    err = 'text characters invalid';
                }
            } else {
                err = `text size must <= ${max}`;
            }
        } else {
            err = `text size must >= ${min}`;
        }


    } else {
        err = 'text invalid';
    }

    return { res, err };
}

export default validate;
export { alphanumeric, words };
