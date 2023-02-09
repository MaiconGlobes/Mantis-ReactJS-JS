// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
    LoginOutlined,
    ProfileOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const list = {
    id: 'authentication',
    title: 'Manutence',
    type: 'group',
    children: [
        {
            id: 'list',
            title: 'List',
            type: 'item',
            url: '/list-page',
            icon: icons.ProfileOutlined,
            target: false
        }
    ]
};

export default list;
