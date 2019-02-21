import fetch from 'isomorphic-fetch';
import { notification } from 'antd';
import userUtil from '@/utils/user'

const base = `/api`;

interface MyError extends Error {
    response?: any;
    status?: number;
    text?: string;
}

function parseJSON(response) {
    return response.json();
}

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }

    const error: MyError = new Error(response.statusText);
    error.response = response;
    error.status = response.status;
    error.text = response.statusText;
    throw error;
}

function checkRC(data) {
    if (data.rc === 200) {
        return data.data;
    } else {
        const error: MyError = new Error(data.msg);
        error.status = data.rc;
        error.text = data.msg;
        throw error;
    }
}

/**
* Requests a URL, returning a promise.
*
* @param  {string} url       The URL we want to request
* @param  {object} [options] The options we want to pass to "fetch"
* @return {object}           An object containing either "data" or "err"
*/
function request(url, options: any = { headers: {} }) {
    // TODO 添加Authorization头部, 添加token
    const localUser = userUtil.getLocalUser();
    if (localUser) {
        options.headers.Authorization = `Bearer ${localUser.token}`;
    }

    return fetch(base + url, options)
        .then(checkStatus)
        .then(parseJSON)
        .then(checkRC)
        .then(data => (data))
        .catch(err => {
            notification["error"]({
                message: `${err.status ? err.status : "未知错误"}`,
                description: `${url} ${err.text ? err.text : "未知错误"}`
            })
            return err.response.json();
        });
}


export default {
    request: request,
    get(url, data?) {
        if (data) {
            return request(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
        } else {
            return request(url)
        }
    },
    post(url, data?) {
        return request(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
    },
    put(url, data?) {
        return request(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
    },
    delete(url, data?) {
        return request(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
    },

}