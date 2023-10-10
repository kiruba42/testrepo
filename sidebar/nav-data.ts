import { NavBarData } from "./helper";

export const AdminSidebar: NavBarData[] = [
    {
        routerlink: '/dashboard',
        icon: 'fal fa-home',
        label: 'Dashboard'
    },
    {
        routerlink: '/category',
        icon: 'fal fa-chart-bar',
        label: 'Category',
        items: [
            {
                routerlink: "/category/addcategory",
                label: "Add Category"
            },
            {
                routerlink: "/category/categorylist",
                label: "Category List"
            }
        ]
    },
    {
        routerlink: '/vendor',
        icon: 'fal fa-chart-bar',
        label: 'Vendor',
        items: [
            {
                routerlink: "/vendor/addvendor",
                label: "Add Vendor"
            },
            {
                routerlink: "/vendor/vendorlist",
                label: "Vendor List"
            }
        ]
    },
    {
        routerlink: '/product',
        icon: 'fal fa-box-open',
        label: 'Product',
        items: [
            {
                routerlink: "/product/addproduct",
                label: "New Product",

            },
            {
                routerlink: "/product/productlist",
                label: "Product List"
            },
            {
                routerlink: "/product/addquantity",
                label: "Add Quantity"
            },
        ]
    },
    {
        routerlink: '/sales',
        icon: 'fal fa-cog',
        label: 'Invoice',
        expanded: false,
        items: [
            {
                routerlink: "/sales/addinvoice",
                label: "New Invoice"
            },
            {
                routerlink: "/sales/invoicelist",
                label: "Invoice List"
            }
        ]
    },
    {
        routerlink: '/duct',
        icon: 'fal fa-info',
        label: 'Help'
    },
    {
        routerlink: '/product',
        icon: 'fal fa-phone',
        label: 'Support'
    },
]