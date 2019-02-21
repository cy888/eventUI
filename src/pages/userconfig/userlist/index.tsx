import React, { Component } from 'react'
import { Table, Modal, Button } from 'antd'
import styles from './index.less'



const dataSource = [{
    key: '1',
    username: 'AIOps_admin',
    name: '总经理',
    phone: 17777777777,
    email: 'admin@harmonycloud.com',
    department: '管理员',
    operation: '删除  编辑',


}, {
    key: '2',
    username: 'b19901201',
    name: '李工',
    phone: 17777777777,
    email: 'li@harmonycloud.com',
    department: '运维',
    operation: '删除  编辑',
},
{
    key: '3',
    username: 'a12345',
    name: '张工',
    phone: 13500000000,
    email: 'zhang@harmonycloud.com',
    department: '运维',
    operation: '删除  编辑'
},
{
    key: '4',
    username: 'hahaha123',
    name: '胡工',
    phone: 1567891011,
    email: 'hu@harmonycloud.com',
    department: '运维',
    operation: '删除  编辑'
},
{
    key: '5',
    username: 'zhinengABC',
    name: '值班员李',
    phone: 18600000000,
    email: 'zhibanli@harmonycloud.com',
    department: '运维',
    operation: '删除  编辑'
}];

const columns = [{
    title: '用户名',
    dataIndex: 'username',
    key: 'username',
},
{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
}, {
    title: '电话',
    dataIndex: 'phone',
    key: 'phone',
}, {
    title: '邮箱',
    dataIndex: 'email',
    key: 'email',
}, {
    title: '部门',
    dataIndex: 'department',
    key: 'department',
}, {
    title: '操作',
    dataIndex: 'operation',
    key: 'operation',

}];


export default class index extends Component {
    state = { visible: false }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = (e) => {

        this.setState({
            visible: false,
        });
    }

    handleCancel = (e) => {

        this.setState({
            visible: false,
        });
    }


    render() {

        return (
            <div>



                <div style={{ backgroundColor: '#fff' }}>

                    <Button type="primary" onClick={this.showModal}>
                        添加用户
                    </Button>
                    <Modal
                        title="Basic Modal"
                        visible={this.state.visible}
                        onOk={this.handleOk}
                    // onCancel={this.handleCancel}
                    >
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </Modal>
                </div>
                <div style={{ backgroundColor: 'white' }}>
                    <Table
                        dataSource={dataSource}
                        columns={columns}
                    />
                </div>
            </div>
        )
    }
}


