interface ISidebarItem {
    key: number,
    to: string
    name: string,
}

export const SidebarItems: ISidebarItem[] = [
    {
        key: 1,
        to: '/',
        name: 'Home',
    },
    {
        key: 2,
        to: '/second',
        name: 'Second'
    },
    {
        key: 3,
        to: '/third',
        name: 'Third'
    },
];
