
const RC_MAP = {
    200: "success",
    11: "参数为空",
    400: "用户名密码错误"
}
const DEFAULT_MSG = "hohoho"

export default (rc, data) => {
    let msg = RC_MAP[rc] ? RC_MAP[rc] : DEFAULT_MSG;
    return {
        rc,
        msg,
        data
    }
}


