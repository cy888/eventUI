import React from 'react';
import NumberAnimation from "@/components/NumberAnimation";
import styles from './index.less'

interface MetricsProps {
    data: Metric[]
}

interface Metric {
    label: string;
    color: string;
    num: number;
}

export default function Metrics(props: MetricsProps) {
    const { data } = props;

    return <span>
        {data.map(i => {
            return <span key={i.label} style={{ marginRight: 20 }}>
                <span
                    style={{ background: i.color }}
                    className={styles.dot}
                />
                &nbsp;
                {i.label} : &nbsp;
                <NumberAnimation
                    from={0}
                    target={i.num}
                />
            </span>
        })}
    </span>
}
