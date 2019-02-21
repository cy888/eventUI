import React from 'react';
import { Button, Icon } from 'antd';
import ColoredList from "@/components/ColoredList"
import styles from '../index.less';



export default function CompressRuleList(props) {

    return <ColoredList
        data={[
            {
                title: "mysql压缩规则",
                content: "将所有mysql数据库的告警进行压缩",
                operations: <Button><Icon type="snippets" theme="twoTone" />详情</Button>
            },
            {
                title: "ES集群压缩",
                content: "ES集群半小时产生的告警为同一告警",
                operations: <Button><Icon type="snippets" theme="twoTone" />详情</Button>
            }
        ]}
    />
}