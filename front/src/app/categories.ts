import { Movie } from "src/list_movies/movies";

export interface Category {
    title: string;
    picked: boolean;
    router: string;
}

export interface Detailer {
    category: string;
    film: Movie;
}

export const detailing_film = {
    category: '',
    film : {
        id: 123,
        name: '123',
        description: '123',
        rating: 123,
        image: '123',
        year: 123,
        during: '123',
        age_rating: '123',
        country: '123',
        directed_by: '123',
        company: '123',
    }
}

export const categories = [
    {
        title: 'Home',
        picked: true,
        router: '/home',
        detailing: false,
    },
    {
        title: 'Movies',
        picked: false,
        router: '/movies',
        detailing: false,
    },
    {
        title: 'Cartoons',
        picked: false,
        router: '/cartoons',
        detailing: false,
    },
    {
        title: 'TV series',
        picked: false,
        router: '/tvseries',
        detailing: false,
    },
    {
        title: 'Animated series',
        picked: false,
        router: '/animseries',
        detailing: false,
    },
    {
        title: 'Dorama',
        picked: false,
        router: '/doramas',
        detailing: false,
    },
    {
        title: 'My List',
        picked: false,
        router: '/mylist',
        detailing: false,
    },
]