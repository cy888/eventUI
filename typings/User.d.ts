
type AuthorityType = 'admin' | 'user'
interface Authority {
    authority: AuthorityType
}

interface User {
    id?: number;
    username: string;
    password?: string;
    groupId?: number;
    authorities?: Array<Authority>;
    enabled?: boolean;
    accountNonExpired?: boolean;
    accountNonLocked?: boolean;
    credentialsNonExpired?: boolean;
}