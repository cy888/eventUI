/**
 * 面向运维人员的告警工作台（告警列表）
 */
import { Pagination } from "antd";
import React, { Component } from 'react';
import { Popover, Button, Icon } from 'antd'
import AlarmList from './components/list';
import AlarmNotification from './components/notifications';
import Metrics from './components/metrics'
import Condition from './components/condition'


export default class Page extends Component {

    // 头部检索组件...
    private TopArea = () => {
        return <div style={{ padding: 10 }}>
            <Metrics
                data={[
                    { label: "未确认", color: "orange", num: 12 },
                    { label: "处理中", color: "blue", num: 100 },
                    { label: "已超时", color: "red", num: 11 },
                    { label: "已完成", color: "green", num: 1231 },

                ]}
            />
            <div style={{ float: "right" }} >
                <Popover
                    placement="bottomRight"
                    title="检索条件设置"
                    content={<Condition />}
                    trigger="click"
                >
                    <Button
                        style={{
                            position: "relative",
                            top: -7,
                            marginRight: 10
                        }}
                    >
                        <Icon type="search" />
                        设置检索条件
                    </Button>
                </Popover>
                <Pagination
                    style={{ display: "inline-block" }}
                    simple
                    defaultCurrent={2}
                    total={50}
                />
            </div>
        </div>
    }


    render() {
        return (
            <div>
                <AlarmNotification />
                {/* 检索区域 */}
                <div
                    style={{
                        padding: 5,
                    }}
                    className="whitebox"
                >
                    {this.TopArea()}
                </div>
                <div
                    className="whitebox"
                >
                    <AlarmList />
                </div>

            </div>
        );
    }
};