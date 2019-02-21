import React from 'react';
import { Layout, Icon, Spin, Menu } from 'antd';
import { connect } from "dva";
import { generateMenu, getOpenKeys } from '../utils/menuUtil';
import styles from './BasicLayout.less';
import UserDropdown from './UserDropdown';
import logo from '../../assets/logo.png'

const {
  Header, Sider, Content, Footer
} = Layout;


export interface Props extends React.Props<any> {
  history?: History;
  location?: any;
  // redux props
  loading?: boolean;
}


@connect(state => ({
  loading: state.loading.global,
  location: state.routing.location
}))
class BasicLayout extends React.PureComponent<Props, {}>{

  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    const { loading, location } = this.props;

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div
            className={[styles.logo, this.state.collapsed ? styles.hide : undefined].join(" ")}
          >
            <img src={logo} />
            谐云 科技
          </div>
          <Menu
            defaultOpenKeys={getOpenKeys(location.pathname)}
            defaultSelectedKeys={[location.pathname]}
            mode="inline"
            theme="dark"
          >
            {generateMenu().map(i => i)}
          </Menu>
        </Sider>
        <Layout>
          <Header
            style={{
              background: '#fff',
              padding: 0,
              borderBottom: "1px solid #e8e8e8"
            }}
          >
            <Icon
              className={styles.trigger}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <span style={{ float: "right", marginRight: 30 }}>
              <UserDropdown />
            </span>
          </Header>
          <Content>
            <Spin spinning={loading}>
              {this.props.children}
            </Spin>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            @谐云科技
          </Footer>
        </Layout>
      </Layout >
    );
  }
}

export default BasicLayout;
