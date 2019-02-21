import React from 'react';
import { Menu, Icon } from "antd";
import Link from "umi/link";
import menuData, { SingleMenuData } from '../../menu';

const { SubMenu } = Menu;

// 递归构建菜单项
const getMenu = (menuData: Array<SingleMenuData>, parentRoute = "") => {
    return menuData.map(item => {
        const route: string = parentRoute + item.route;
        // 如果有子菜单
        if (item.children && item.children.length > 0) {
            return <SubMenu
                key={route}
                title={<span>
                    {item.icon ? <Icon type={item.icon} /> : ""}
                    <span>{item.name}</span>
                </span>}
            >
                {getMenu(item.children, route).map(i => i)}
            </SubMenu>
        }
        // key直接设置为菜单项的路由，方便管理
        return <Menu.Item
            key={route}
        >
            <Link to={route}>
                {item.icon ? <Icon type={item.icon} /> : <></>}
                <span>{item.name}</span>
            </Link>
        </Menu.Item>
    })
}

// 生成菜单项目
export function generateMenu() {
    return getMenu(menuData)
}

// TODO 获取需要下来的SubMenu的key，需要优化（有不存在的keys）
export function getOpenKeys(pathname: string) {
    const split = pathname.split("/")
    const keys = []
    let currKey = ""
    for (let i = 1; i < split.length - 1; i++) {
        keys.push(`${currKey}/${split[i]}`)
    }
    return keys;
}