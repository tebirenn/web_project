export interface Cartoon {
    id: number;
    name: string;
    description: string;
    rating: number;
    image: string;
}

export const cartoons = [
    {
        id: 1,
        name: 'Doctor strange in the multiverse of madness',
        description: '',
        rating: 10,
        image: 'https://upload.wikimedia.org/wikipedia/ru/thumb/7/77/%D0%94%D0%BE%D0%BA%D1%82%D0%BE%D1%80_%D0%A1%D1%82%D1%80%D1%8D%D0%BD%D0%B4%D0%B6_%D0%92_%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D0%B8%D0%B2%D1%81%D0%B5%D0%BB%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B1%D0%B5%D0%B7%D1%83%D0%BC%D0%B8%D1%8F_%D1%82%D0%B8%D0%B7%D0%B5%D1%80_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpeg/304px-%D0%94%D0%BE%D0%BA%D1%82%D0%BE%D1%80_%D0%A1%D1%82%D1%80%D1%8D%D0%BD%D0%B4%D0%B6_%D0%92_%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D0%B8%D0%B2%D1%81%D0%B5%D0%BB%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B1%D0%B5%D0%B7%D1%83%D0%BC%D0%B8%D1%8F_%D1%82%D0%B8%D0%B7%D0%B5%D1%80_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpeg',
    },
]