import request from '../utils/request'

// 登录接口
export interface LoginParam {
    username: string;
    password: string; // TODO: 密文传输
}

export function login(param: LoginParam) {
    return request.post(`/jwt/login`, param)
}


export function logout() {
    return request.post(`/user/logout`)
}