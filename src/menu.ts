// 配置左侧菜单项目
const MenuData: SingleMenuData[] = [
    {
        route: '/alarmInfo/list/ops',
        icon: 'dashboard',
        name: '运维告警事件台'
    },
    {
        route: '/alarmInfo/list/firstline',
        icon: 'dashboard',
        name: '一线告警事件台'
    },
    {
        route: '/alarmConfig',
        icon: 'setting',
        name: '告警配置',
        children: [
            {
                route: '/source',
                name: '告警源配置',
            },
            {
                route: '/filter',
                name: '过滤策略'
            },
            {
                route: '/notice',
                name: '通知策略'
            },
            {
                route: '/compress',
                name: '压缩策略'
            }
        ]
    },
    {
        route: '/user',
        icon: 'user',
        name: '个人信息'
    },
    {
        route:'/userconfig/userlist',
        icon:'user',
        name:'用户组'
    },
]

export interface SingleMenuData {
    route: string;
    icon?: string;
    name: string;
    children?: Array<SingleMenuData>;
}

export default MenuData
