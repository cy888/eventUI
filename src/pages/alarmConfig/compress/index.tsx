import React from 'react';
import CompressRuleList from "./components/list";
import CompressRuleDetail from './components/detail';
import styles from './index.less';







export default function () {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        {/* <div className="whitebox no-margin" style={{ marginBottom: 10 }}>
          123
        </div> */}
        <CompressRuleList />
      </div>
      <div className={styles.right}>
        <CompressRuleDetail />
      </div>
    </div>
  );
}
