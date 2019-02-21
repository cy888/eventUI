import React, { Fragment } from 'react';
import Link from 'umi/link';
import { Icon, Layout, Spin } from 'antd';
import styles from './UserLayout.less';
import logo from '../../assets/logo.png';
import { connect } from 'dva';

const { Footer } = Layout


const copyright = (
  <Fragment>
    Copyright <Icon type="copyright" /> 2018 谐云科技
  </Fragment>
);

interface Props {
  loading?: boolean;
}

@connect(state => ({
  loading: state.loading.global,
}))
export default class UserLayout extends React.PureComponent<Props, any> {
  render() {
    const { children, loading } = this.props;

    return (
      <div className={styles.container}>
        <Spin spinning={loading}>
          <div className={styles.lang}>
          </div>
          <div className={styles.content}>
            <div className={styles.top}>
              <div className={styles.header}>
                <Link to="/">
                  <img alt="logo" className={styles.logo} src={logo} />
                  <span className={styles.title}>谐云科技 告警事件集中压缩系统</span>
                </Link>
              </div>
              <div className={styles.desc}>谐云科技 智能运维平台系列</div>
            </div>
            {children}
          </div>
          <Footer style={{ textAlign: 'center' }}>
            {copyright}
          </Footer>
        </Spin>
      </div>
    );
  }
}

