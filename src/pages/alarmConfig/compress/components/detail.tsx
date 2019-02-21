import React, { Component } from 'react';
import CombineRules from "@/components/CombineRules";
import styles from '../index.less';


export default class CompressDetail extends Component {



    render() {
        return <div>
            <header className={styles.header}>
                <h2>mysql压缩规则</h2>
            </header>

            {/* 规则配置 */}
            <CombineRules
                onChange={(conditions) => {
                    console.log("规则发生变化", conditions);
                }}
                conditions={[["规则1", "规则2"]]}
            />

        </div>
    }

}
