import React, { Component } from 'react';
import { Icon } from "antd";
import NumberAnimation from "@/components/NumberAnimation";

import styles from './index.less'

interface Data {
    name: string;
    number: number;
    icon: string;
    color?: string;
}

interface Props extends React.Props<any> {
    data: Array<Data>;
}

export default class NumberCards extends Component<Props, {}> {
    render() {
        const { data } = this.props;
        return (
            <div className={styles.container}>
                {data.map((i, index) => {
                    return <div key={index} className={styles.card}>
                        <h1 style={{
                            color: i.color ? i.color : undefined
                        }}>
                            <Icon type={i.icon} />
                        </h1>
                        <div>
                            <h3>
                                {i.name}
                            </h3>
                            <h2>
                                <NumberAnimation
                                    from={0}
                                    target={i.number}
                                />
                            </h2>
                        </div>
                    </div>
                })}
            </div>
        );
    }
};