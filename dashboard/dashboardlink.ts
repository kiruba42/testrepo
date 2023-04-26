export interface Dashboard {
    name: string;
    icon: string;
    count:number;
    backcolor:string;
    link: string;
}
export const AdminDashboardDenu: Dashboard[] = [
    {
        name: 'Token',
        icon: 'fas fa-coin',
        count:10,
        backcolor:'background-color: #E41E0A;',
        link: ''
    },
    {
        name: 'Class Words',
        icon: 'fas fa-coin',
        count:10,
        backcolor:'background-color:#57D30B;',
        link: ''
    },
    {
        name: 'Illegal Words',
        icon: 'fas fa-coin',
        count:10,
        backcolor:'background-color:#20EBEB;',
        link: ''
    },
    {
        name: 'ECI List',
        icon: 'pi pi-folder-open',
        count:10,
        backcolor:'background-color:#F5D614;',
        link: ''
    },
    {
        name: 'Token Request',
        icon: 'pi pi-folder-open',
        count:10,
        backcolor:'background-color:#F5D614;',
        link: ''
    },
    {
        name: 'Security',
        icon: 'pi pi-folder-open',
        count:10,
        backcolor:'background-color:#20EBEB;',
        link: ''
    },
    
];
export const UserDashboardDenu: Dashboard[] =[
    {
        name: 'Token',
        icon: 'fas fa-coin',
        count:10,
        backcolor:'background-color: #E41E0A;',
        link: ''
    },
    {
        name: 'Class Words',
        icon: 'fas fa-coin',
        count:10,
        backcolor:'background-color:#57D30B;',
        link: ''
    },
    {
        name: 'Illegal Words',
        icon: 'fas fa-coin',
        count:10,
        backcolor:'background-color:#20EBEB;',
        link: ''
    },
    {
        name: 'ECI List',
        icon: 'pi pi-folder-open',
        count:10,
        backcolor:'background-color:#F5D614;',
        link: ''
    },

];
export const UserDashboardRepo: Dashboard[] =[
    {
        name: 'Server List',
        icon: 'fas fa-database',
        count:10,
        backcolor:'background-color: #E41E0A;',
        link: ''
    },
    {
        name: 'Search types',
        icon: 'fas fa-file-search',
        count:10,
        backcolor:'background-color:#57D30B;',
        link: ''
    }
];

export const AdminDashboardRepo: Dashboard[] =[
    {
        name: 'Server List',
        icon: 'fas fa-database',
        count:10,
        backcolor:'background-color: #E41E0A;',
        link: ''
    },
    {
        name: 'Search types',
        icon: 'fas fa-file-search',
        count:10,
        backcolor:'background-color:#57D30B;',
        link: ''
    }
]