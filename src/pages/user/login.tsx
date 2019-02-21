import React from 'react';
import { Form, Icon, Input, Button, } from "antd";
import { connect } from 'dva';
import { FormComponentProps } from 'antd/lib/form';
import { ConnectProps } from "@/models/connect";
import { LoginParam } from '@/services/user';


export interface Props extends FormComponentProps, ConnectProps {
    history?: History;
    location?: Location;
    // redux props
}

@connect()
class LoginForm extends React.Component<Props, {}> {

    onSubmit = (e) => {
        const { dispatch } = this.props;

        e.preventDefault();
        this.props.form.validateFields((err, params: LoginParam) => {
            if (!err) {
                dispatch({
                    type: "user/login",
                    payload: params
                })
            }
        });
    }


    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <Form
                onSubmit={this.onSubmit}
                style={{ width: 500, margin: "0 auto" }}
            >
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: '请输入用户名!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="用户名"
                        />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入密码!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="密码"
                        />
                    )}
                </Form.Item>
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        style={{ width: "100%" }}
                    >
                        登录
                    </Button>
                </Form.Item>
            </Form>)
    }
}

export default Form.create({})(LoginForm)
