import { UserLocalStorage } from './../utils/user';
import { Model } from 'dva';
import router from 'umi/router';
import { message } from 'antd';
import userUtil from '../utils/user';
import {
    login,
    logout
} from '../services/user'

// 默认状态
export interface UserState {
    currUser: User;
}

const defaultState: UserState = {
    currUser: {
        username: 'none'
    }
}

export interface UserModel extends Model {
    state: UserState;
}

// 真的Model
const model: UserModel = {
    namespace: "user",
    state: defaultState,
    // action - 后端请求等等操作，调用reducer
    effects: {
        *login({ payload }, { call, put }) {
            const currUser: UserLocalStorage = yield call(login, payload);
            // 调用setState reducer
            yield put({
                type: 'setState',
                payload: {
                    currUser: currUser.user
                }
            });
            message.success("登录成功");
            userUtil.setLocalUser(currUser);
            // 跳转到首页
            router.push("/");
        },
        *logout(_, { call, put }) {
            yield call(logout);
            message.success("登出成功");
            userUtil.clearLocalUser();
            yield put({
                type: 'resetState'
            })
            // 跳转到登录界面
            router.push("/user/login");
        }
    },
    // 更改state
    reducers: {
        setState(state, { payload }) {
            return {
                ...state,
                ...payload,
            };
        },
        resetState() {
            return defaultState;
        },
    },
    // 事件处理
    subscriptions: {
        // 载入页面 调用init
        init({ dispatch }) {
            const localUser = userUtil.getLocalUser();
            if (!localUser) {
                return router.push("/user/login");
            }
            dispatch({
                type: "setState",
                payload: {
                    currUser: localUser.user
                }
            });
        }
    }
}


export default model;