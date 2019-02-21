import $ from './util/format'

export default {

    'POST /api/jwt/login': (req, res) => {
        const { password, username } = req.body;
        if (password === 'admin' && username === 'admin') {
            return res.send($(200, {
                "token": "eyJhbGciOiJIUzI1NiIsInppcCI6IkRFRiJ9.eNoszFEKwyAQhOG7zLNCrLvi5jLFRAX70ISYQEvI3aslb8P3w5yox4QR8ze8oXDUtD1LxGgU6rysqaVuLaXP2pjJP4TFW4US9hsG4Q6vvfQnw06YrJZsnKbwX5S1xOiNZEc2C64fAAAA__8.Y2hSy0mIfI1IutRa4E9al3eTH2-Hh85RhvPX36gM9bk",
                "user": {
                    "id": 1,
                    "username": "admin",
                    "password": "123456",
                    "groupId": 2,
                    "authorities": [
                        {
                            "authority": "admin"
                        }
                    ],
                    "enabled": true,
                    "accountNonExpired": true,
                    "accountNonLocked": true,
                    "credentialsNonExpired": true
                }
            }));
        }
        if (password === 'user' && username === 'user') {
            return res.send($(200, {
                "token": "eyJhbGciOiJIUzI1NiIsInppcCI6IkRFRiJ9.eNoszFEKwyAQhOG7zLNCrLvi5jLFRAX70ISYQEvI3aslb8P3w5yox4QR8ze8oXDUtD1LxGgU6rysqaVuLaXP2pjJP4TFW4US9hsG4Q6vvfQnw06YrJZsnKbwX5S1xOiNZEc2C64fAAAA__8.Y2hSy0mIfI1IutRa4E9al3eTH2-Hh85RhvPX36gM9bk",
                "user": {
                    "id": 1,
                    "username": "user",
                    "password": "123456",
                    "groupId": 2,
                    "authorities": [
                        {
                            "authority": "user"
                        }
                    ],
                    "enabled": true,
                    "accountNonExpired": true,
                    "accountNonLocked": true,
                    "credentialsNonExpired": true
                }
            }));
        }
        res.send($(400));
    },
    'POST /api/user/logout': $(200)
};
