import React, { Component } from 'react';
import { Form, Button, Input, Radio, Checkbox, Select } from "antd";
import { FormComponentProps } from 'antd/lib/form';
import styles from './index.less'


interface Props extends FormComponentProps {

}

interface condition {
    content?: string;

};

const formItemLayout = {
    style: {
        marginBottom: 5
    },
    labelCol: {
        sm: { span: 4 },
    },
    wrapperCol: {
        sm: { span: 19 },
    },
};

// 搜索条件配置组件
class Condition extends Component<Props, any> {

    private handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values: condition) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        return <Form
            style={{ width: 500, overflow: "hidden" }}
            onSubmit={this.handleSubmit}
        >
            <Form.Item {...formItemLayout} label="内容包含">
                {getFieldDecorator('content')(<Input />)}
            </Form.Item>

            <Form.Item  {...formItemLayout} label="告警等级">
                {getFieldDecorator('level')(<Select>
                    <Select.Option key="1">紧急</Select.Option>
                </Select>)}
            </Form.Item>
            <Form.Item  {...formItemLayout} label="进度状态">
                {getFieldDecorator('progress')(<Checkbox.Group>
                    <Checkbox>未确认</Checkbox>
                    <Checkbox>处理中</Checkbox>
                    <Checkbox>已超时</Checkbox>
                    <Checkbox>已完成</Checkbox>
                </Checkbox.Group>)}
            </Form.Item>
            <Form.Item  {...formItemLayout} label="排序条件">
                {getFieldDecorator('sort')(<Radio.Group>
                    <Radio>等级</Radio>
                    <Radio>开始时间</Radio>
                    <Radio>最近告警时间</Radio>
                </Radio.Group>)}
            </Form.Item>
            <Button
                style={{ float: "right", width: 200 }}
                type="primary"
                htmlType="submit"
            >
                确认
            </Button>
        </Form>
    }

}

export default Form.create()(Condition);
