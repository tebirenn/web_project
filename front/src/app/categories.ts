export interface Category {
    title: string;
    picked: boolean;
    router: string;
}

export const categories = [
    {
        title: 'Home',
        picked: true,
        router: '/home',
    },
    {
        title: 'Movies',
        picked: false,
        router: '/movies',
    },
    {
        title: 'Cartoons',
        picked: false,
        router: '/cartoons',
    },
    {
        title: 'TV series',
        picked: false,
        router: '/tvseries',
    },
    {
        title: 'Animated series',
        picked: false,
        router: '/animseries',
    },
    {
        title: 'Dorama',
        picked: false,
        router: '/doramas',
    },
    {
        title: 'My List',
        picked: false,
        router: '/mylist',
    },
]