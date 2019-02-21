import React, { Component } from 'react';
import { Table, Dropdown, Menu, Icon } from "antd";
import Link from 'umi/link'
import moment from 'moment'
import mockAlarmData from './mockAlarmData'

const myColors = {
    red: '#f5222d',
    green: '#389e0d',
    orange: '#fa8c16',
    blue: '#13c2c2'
}

const calTime = (secs) => {
    if (secs < 60) {
        return `${secs} 秒`
    }
    if (secs < 60 * 60) {
        return `${Math.floor(secs / 60)} 分钟`
    }
    return `${Math.floor(secs / 60 * 60)} 小时`
}

export default class List extends Component {

    columns = [
        {
            title: '状态',
            dataIndex: 'alarmStatus',
            render: (v) => (
                v === 0 ? <span style={{ color: myColors.red }}>
                    未确认
                </span> : <span style={{ color: myColors.green }}>
                        已确认
                </span>
            )
        },
        {
            title: '等级',
            dataIndex: 'alarmLevel',
            render: (v) => (v > 1 ?
                <span
                    style={{
                        color: "white",
                        padding: 4,
                        borderRadius: 5,
                        backgroundColor: myColors.red
                    }}
                >
                    紧急
                </span> : <span
                    style={{
                        color: "white",
                        padding: 4,
                        borderRadius: 5,
                        backgroundColor: myColors.blue
                    }}
                >
                    正常
                </span>
            )
        },
        {
            title: '内容',
            dataIndex: 'alarmContent',
            width: 500,
            render: (item) => (
                <Link to="/alarm/detail">
                    {item}
                </Link>
            )
        },
        {
            title: '告警对象',
            dataIndex: 'happendModel',
        },
        {
            title: '来源',
            render: () => <a>zabbix</a>
        },
        {
            title: '告警开始时间',
            dataIndex: 'firstTime',
            render: (v) => (
                moment(v).format("YYYY-MM-DD  HH:mm")
            )
        },
        {
            title: '最近告警时间',
            dataIndex: 'lastTime',
            render: (v) => (
                moment(v).format("YYYY-MM-DD  HH:mm")
            )
        },
        {
            title: '时长',
            sorter: (a, b) => a.duration - b.duration,
            dataIndex: 'duration',
            render: (v) => <span>
                {calTime(v)}
            </span>
        },
        {
            title: '',
            render: () => <>
                &nbsp;
                &nbsp;
                <Dropdown
                    placement="bottomCenter"
                    overlay={<Menu>
                        <Menu.Item><a>确认</a></Menu.Item>
                        <Menu.Item><a>转派</a></Menu.Item>
                        <Menu.Item><a>通知</a></Menu.Item>
                        <Menu.Item><a>关闭</a></Menu.Item>
                    </Menu>}
                >
                    <Icon style={{ cursor: "pointer" }} type="setting" />
                </Dropdown>
            </>
        },
    ];
    render() {
        return (
            <div>
                <Table
                    rowKey="id"
                    dataSource={mockAlarmData}
                    columns={this.columns}
                    pagination={false}
                />
            </div>
        );
    }
};
