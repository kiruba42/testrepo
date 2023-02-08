import { NavBarData } from "./helper";

export const Sidebar: NavBarData[] = [
    {
        routerlink: '/dashboard',
        icon: 'fal fa-home',
        label: 'Dashboard'
    },
    {
        routerlink: '/product',
        icon: 'fal fa-box-open',
        label: 'DENU',
        items: [
            {
                routerlink: "/product/newproduct",
                label: "Interactive Mode",

            },
            {
                routerlink: "/newproduct",
                label: "Batch Mode"
            },
            {
                routerlink: "/productlist",
                label: "Token Search"
            },
            {
                routerlink: "/productlist",
                label: "ECI List"
            },
            {
                routerlink: "/productlist",
                label: "Admin"
            },
        ]
    },
    {
        routerlink: '/reposearch',
        icon: 'fal fa-file-search',
        label: 'Repo Search',
    },

    {
        routerlink: '/ps',
        icon: 'fal fa-user-headset',
        label: 'Help',
    }
]