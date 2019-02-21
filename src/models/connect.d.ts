import { UserState } from './user';

export interface ConnectState {
    user: UserState;
    loading: Loading;
}

export type Dispatch = (action: {
    type: string;
    payload?: any;
}) => any;

export interface Loading {
    global: boolean;
    effects: object;
    models: {
        user?: boolean;
        login?: boolean;
    };
}

export interface ConnectProps extends React.Props<any> {
    dispatch?: Dispatch;
    location?: Location;
}

export default ConnectState;
