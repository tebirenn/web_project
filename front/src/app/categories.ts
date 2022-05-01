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
        id: 1,
        name: 'Doctor strange in the multiverse of madness',
        description: 'Dr. Stephen Strange casts a forbidden spell that opens the doorway to the multiverse, including alternate versions of himself, whose threat to humanity is too great for the combined forces of Strange, Wong, and Wanda Maximoff.',
        rating: 10,
        image: 'https://upload.wikimedia.org/wikipedia/ru/thumb/7/77/%D0%94%D0%BE%D0%BA%D1%82%D0%BE%D1%80_%D0%A1%D1%82%D1%80%D1%8D%D0%BD%D0%B4%D0%B6_%D0%92_%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D0%B8%D0%B2%D1%81%D0%B5%D0%BB%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B1%D0%B5%D0%B7%D1%83%D0%BC%D0%B8%D1%8F_%D1%82%D0%B8%D0%B7%D0%B5%D1%80_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpeg/304px-%D0%94%D0%BE%D0%BA%D1%82%D0%BE%D1%80_%D0%A1%D1%82%D1%80%D1%8D%D0%BD%D0%B4%D0%B6_%D0%92_%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D0%B8%D0%B2%D1%81%D0%B5%D0%BB%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B1%D0%B5%D0%B7%D1%83%D0%BC%D0%B8%D1%8F_%D1%82%D0%B8%D0%B7%D0%B5%D1%80_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpeg',
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