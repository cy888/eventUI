import React, { Component } from 'react';
import { Empty } from 'antd';
import styles from './index.less';


interface ColoredListSingleDataFormat {
    color?: string;
    title: React.ReactNode;
    content?: React.ReactNode;
    operations?: React.ReactNode;
}

interface Props {
    data?: ColoredListSingleDataFormat[];
}

export default class ColoredList extends Component<Props, any> {

    private renderDataSource = () => {
        const { data } = this.props;

        if (!data || data.length === 0) {
            return <Empty style={{ marginTop: 100 }} />
        }

        return data.map((item, index) => {

            return <div
                style={{
                    borderLeft: `10px solid ${
                        item.color ? item.color : "#1890ff"
                        }`
                }}
                className={styles.item}
                key={index}
            >
                <div className={styles.operations}>
                    {item.operations}
                </div>
                <h2>{item.title}</h2>
                <p className={styles.content}>
                    {item.content}
                </p>

            </div>
        })

    }


    render() {
        return (
            <div className={styles.name}>
                {this.renderDataSource()}
            </div>
        );
    }
};
