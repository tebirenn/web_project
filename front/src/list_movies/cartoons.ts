export interface Cartoon {
    id: number;
    name: string;
    description: string;
    rating: number;
    image: string;
    year: number;
    during: string;
    age_rating: string;
    country: string;
    directed_by: string;
    company: string;
}

export const cartoons = [
    {
        id: 1,
        name: 'Coco',
        description: 'Aspiring musician Miguel, confronted with his family s ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.',
        rating: 8,
        image: 'https://st.kp.yandex.net/im/poster/3/0/5/kinopoisk.ru-Coco-3055007.jpg',
        year: 2017,
        during: '1 h 45 minutes',
        age_rating: '6+',
        country: 'United States',
        directed_by: 'Lee Unkrich',
        company: 'Walt Disney Pictures, Pixar Animation Studios'
    },
    {
        id: 2,
        name: 'Soul',
        description: 'After landing the gig of a lifetime, a New York jazz pianist suddenly finds himself trapped in a strange land between Earth and the afterlife.',
        rating: 8,
        image: 'https://play-lh.googleusercontent.com/FVcitotCgSb8H69cSmqC9YLG1kyGsUlqkiU9RRT_eN5sdLif4SQScrlIq-iCEMorvQzBQN2KInOn8uEjKg',
        year: 2020,
        during: '1 h 41 minutes',
        age_rating: '6+',
        country: 'United States',
        directed_by: 'Pete Docter',
        company: 'Walt Disney Pictures, Pixar Animation Studios'
    },
    {
        id: 3,
        name: 'Raya and the Last Dragon',
        description: 'In a realm known as Kumandra, a re-imagined Earth inhabited by an ancient civilization, a warrior named Raya is determined to find the last dragon.',
        rating: 7,
        image: 'https://m.media-amazon.com/images/M/MV5BZWNiOTc4NGItNGY4YS00ZGNkLThkOWEtMDE2ODcxODEwNjkwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg',
        year: 2021,
        during: '1 h 47 minutes',
        age_rating: '6+',
        country: 'United States',
        directed_by: 'Don Hall, Carlos López Estrada',
        company: 'Walt Disney Pictures'
    },
    {
        id: 4,
        name: 'Encanto',
        description: 'A Colombian teenage girl has to face the frustration of being the only member of her family without magical powers.',
        rating: 7,
        image: 'https://upload.wikimedia.org/wikipedia/ru/thumb/b/b4/Encanto_%28film%29_poster.jpg/640px-Encanto_%28film%29_poster.jpg',
        year: 2021,
        during: '1 h 42 minutes',
        age_rating: '6+',
        country: 'United States',
        directed_by: 'Jared Bush, Byron Howard',
        company: 'Walt Disney Studios, Motion Pictures'
    },
    {
        id: 5,
        name: 'Luca',
        description: 'On the Italian Riviera, an unlikely but strong friendship grows between a human being and a sea monster disguised as a human.',
        rating: 7,
        image: 'https://upload.wikimedia.org/wikipedia/ru/5/58/Luca_Poster.png',
        year: 2021,
        during: '1 h 35 minutes',
        age_rating: '6+',
        country: 'United States',
        directed_by: 'Enrico Casarosa',
        company: 'Walt Disney Pictures, Pixar Animation Studios'
    },
    {
        id: 6,
        name: 'Up',
        description: '78-year-old Carl Fredricksen travels to Paradise Falls in his house equipped with balloons, inadvertently taking a young stowaway.',
        rating: 8,
        image: 'https://m.media-amazon.com/images/M/MV5BMTk3NDE2NzI4NF5BMl5BanBnXkFtZTgwNzE1MzEyMTE@._V1_.jpg',
        year: 2009,
        during: '1 h 36 minutes',
        age_rating: '6+',
        country: 'United States',
        directed_by: 'Pete Docter',
        company: 'Walt Disney Pictures, Pixar Animation Studios'
    },
    {
        id: 7,
        name: 'The Lion King',
        description: 'After the murder of his father, a young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.',
        rating: 6,
        image: 'https://www.kinonews.ru/insimgs/2019/newsimg/newsimg88056.jpg',
        year: 1994,
        during: '1 h 28 minutes',
        age_rating: '6+',
        country: 'United States',
        directed_by: 'Roger Allers, Rob Minkoff',
        company: 'Walt Disney Pictures'
    },
    {
        id: 8,
        name: 'Zootopia',
        description: 'In a city of anthropomorphic animals, a rookie bunny cop and a cynical con artist fox must work together to uncover a conspiracy.',
        rating: 8,
        image: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/0ecb745d03d6656e19c12acc7fe9f7a7ba6336a0f2d2c202aff94a8335f00aae._RI_V_TTW_.jpg',
        year: 2016,
        during: '1 h 48 minutes',
        age_rating: '6+',
        country: 'United States',
        directed_by: 'Byron Howard, Rich Moore',
        company: 'Walt Disney Pictures'
    },
    {
        id: 9,
        name: 'Inside Out',
        description: 'After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school.',
        rating: 8,
        image: 'https://lumiere-a.akamaihd.net/v1/images/p_insideout_19751_af12286c.jpeg?region=0%2C0%2C540%2C810',
        year: 2015,
        during: '1 h 35 minutes',
        age_rating: '6+',
        country: 'United States',
        directed_by: 'Pete Docter',
        company: 'Walt Disney Pictures, Pixar Animation Studios'
    },
    {
        id: 10,
        name: 'Big Hero 6',
        description: 'A special bond develops between plus-sized inflatable robot Baymax and prodigy Hiro Hamada, who together team up with a group of friends to form a band of high-tech heroes.',
        rating: 7,
        image: 'https://lumiere-a.akamaihd.net/v1/images/p_bighero6_19753_20bd6206.jpeg',
        year: 2014,
        during: '1 h 42 minutes',
        age_rating: '6+',
        country: 'United States',
        directed_by: 'Don Hall, Chris Williams',
        company: 'Walt Disney Pictures'
    },
]