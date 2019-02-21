import React, { Component } from 'react';
import condition from '@/pages/alarmInfo/list/components/condition';

import styles from './index.less'

interface Props {
    conditions?: string[][];
    onChange?: (conditions: string[][]) => void;
}

interface State {
    conditions?: string[][];
}


// 组合规则配置
export default class CombineRules extends Component<Props, State> {

    // 组件的构造函数
    constructor(props) {
        // 调用父方法的构造函数
        super(props)

        // 初始化state
        this.state = {
            conditions: props.conditions
        }
    }


    // props发生变化的时候触发
    componentWillReceiveProps(nextProps) {
        const prevCondtions = this.props.conditions;
        const nextCondtions = nextProps.conditions;

        if (nextCondtions !== prevCondtions) {
            this.setState({
                conditions: nextCondtions
            })
        }
    }


    // 渲染一组且条件
    renderAndConditions = (rowConditons: string[], rowIndex: number) => {

        const clickAddEvent = () => {
            this.handleAddCondtions(rowIndex);
        }

        const content = rowConditons.map((item, index) => {
            return <span key={index}>
                <span className={styles.condition}>
                    且
                    {index === 0 ? "" : <span className={styles.vertTopLine} />}
                    <span className={styles.hozLine} />
                </span>
                {item}
                <br />
            </span>
        })

        return <div className={styles.andContainer}>
            {content}
            <span className={styles.condition}>
                <span
                    className={styles.addNew}
                    onClick={clickAddEvent}
                />
                {
                    rowConditons.length === 0 ? "" : <span className={styles.vertTopLine} />
                }
            </span>
        </div>
    }

    // 添加一组且条件
    handleRowConditions = () => {
        const { onChange } = this.props;
        const { conditions } = this.state;

        conditions.push([]);
        this.setState({ conditions });

        if (typeof onChange === "function") {
            onChange(conditions);
        }
    }

    // 添加一个且条件
    handleAddCondtions = (index: number) => {
        const { onChange } = this.props;
        const { conditions } = this.state;

        conditions[index].push("新规则");
        this.setState({ conditions });

        if (typeof onChange === "function") {
            onChange(conditions);
        }
    }

    render() {
        const { conditions } = this.state;

        return (
            <div>
                {
                    conditions.map((rowConditions, rowIndex) => {
                        return <span key={rowIndex}>
                            {this.renderAndConditions(rowConditions, rowIndex)}
                            <div className={styles.orContainer}>
                                <span className={styles.condition}>
                                    或
                                    <span className={styles.vertTopLine} />
                                    <span className={styles.vertBottomLine} />
                                </span>
                            </div>
                        </span>
                    })
                }
                <div className={styles.orContainer}>
                    <span className={styles.condition} onClick={this.handleRowConditions}>
                        <span className={styles.addNew} />
                        <span className={styles.vertTopLine} />
                    </span>
                </div>
            </div>
        );
    }
};
