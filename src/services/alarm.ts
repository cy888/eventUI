import request from '../utils/request'

interface ListParam {
    page: number;
    keyword?: string;
}

export function list(param: ListParam) {
    return request.get(`/alarm/list`, param)
}
