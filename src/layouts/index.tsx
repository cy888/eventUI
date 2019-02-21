import React from 'react';
import UserLayout from './components/UserLayout'
import BasicLayout from './components/BasicLayout'

export default function (props) {
    if (props.location.pathname === '/user/login') {
        return (
            <UserLayout>
                {props.children}
            </UserLayout>
        );
    }

    return (
        <BasicLayout>
            {props.children}
        </BasicLayout>
    );
}