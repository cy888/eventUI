import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Dropdown, Menu, Icon } from 'antd'
import ConnectState, { ConnectProps } from '@/models/connect';

interface Props extends ConnectProps {
    currUser?: User;
}

@connect((state: ConnectState) => ({
    currUser: state.user.currUser
}))
export default class UserDropdown extends PureComponent<Props, any> {

    logout = () => {
        const { dispatch } = this.props;
        dispatch({ type: "user/logout" })
    }


    render() {
        const { currUser } = this.props;
        return (
            <Dropdown
                overlay={
                    <Menu>
                        <Menu.Item>
                            <a>
                                <Icon type="user" /> 个人中心
                        </a>
                        </Menu.Item>
                        <Menu.Item>
                            <a onClick={this.logout}>
                                <Icon type="logout" /> 退出登录
                        </a>
                        </Menu.Item>
                    </Menu>
                }
                placement="bottomCenter"
            >
                <span style={{ cursor: "pointer", fontSize: 18 }}>
                    {currUser ? currUser.username : ""}
                </span>
            </Dropdown>
        );
    }
}