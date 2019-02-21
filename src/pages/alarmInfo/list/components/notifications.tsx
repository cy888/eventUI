import React, { Component } from 'react';
import { Alert } from 'antd';

const msg = "告警主机ZZA170000SFZLWS(10.192.24.40)CPU等待I/O告...即将过期"


export default class notifications extends Component {
    render() {
        return (<div>
            <Alert
                message={
                    <p
                        style={{
                            // textAlign: "center",
                            marginBottom: 0
                        }}
                    >
                        {msg}
                    </p>
                }
                banner
                closable
            />
        </div>);
    }
};