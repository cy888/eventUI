import React, { Component } from 'react';


export interface Props extends React.Props<any> {
    from: number;
    target: number;
}

export default class NumberAnimation extends Component<Props, {}> {

    // 显示数字的DOM节点
    private span: HTMLSpanElement;
    // 动画时间间隔
    private DURATION: number = 1000;

    componentDidMount() {
        const { from } = this.props;

        this.span.textContent = from + "";
        window.requestAnimationFrame(this.step);
    }

    // 动画效果
    private start: any = null;
    private step = (timestamp: number) => {
        const { from, target } = this.props;
        if (!this.start) this.start = timestamp;
        const progress = timestamp - this.start;

        const curr = from + (target - from) * Math.min(progress, this.DURATION) / this.DURATION
        if (this.span) {
            this.span.textContent = this.format(curr);
        }

        if (progress < this.DURATION) {
            window.requestAnimationFrame(this.step);
        }
    }

    // 工具函数，用于加,
    private format(num: number): string {
        const numStr: string = Math.floor(num) + "";
        const len = numStr.length;
        const flag = 3 - len % 3;
        let retStr: string = "";

        Array.prototype.forEach.call(numStr, (c, i) => {
            if ((i + flag) % 3 === 0 && i !== 0) {
                retStr += `,${c}`
            } else {
                retStr += `${c}`
            }
        })

        return retStr;
    }


    render() {
        return (
            <span ref={ref => this.span = ref} />
        );
    }
};