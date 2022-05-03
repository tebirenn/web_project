export interface TVSeries {
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

export const tv_series = [
    {
        id: 1,
        name: 'Élite',
        description: 'When three working-class teenagers begin attending an exclusive private school in Spain, the clash between them and the wealthy students leads to murde',
        rating: 7,
        image: 'https://citaty.info/files/posters/214160.jpg',
        year: 2018-2022,
        during: '40-50 minutes',
        age_rating: '18+',
        country: 'Spain',
        directed_by: 'Carlos Montero',
        company: 'Zeta Producciones, Netflix'
    },
    {
        id: 2,
        name: 'La casa de papel',
        description: 'An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.',
        rating: 8,
        image: 'https://m.media-amazon.com/images/M/MV5BNDJkYzY3MzMtMGFhYi00MmQ4LWJkNTgtZGNiZWZmMTMxNzdlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg',
        year: 2017-2021,
        during: '40-50 minutes',
        age_rating: '18+',
        country: 'Spain',
        directed_by: 'Álex Pina',
        company: 'Atresmedia, Vancouver Media, Netflix'
    },
    {
        id: 3,
        name: 'Sex Education',
        description: 'A teenage boy with a sex therapist mother teams up with a high school classmate to set up an underground sex therapy clinic at school.',
        rating: 8,
        image: 'https://m.media-amazon.com/images/M/MV5BOTE0MjQ1NDU3OV5BMl5BanBnXkFtZTgwNTI4MTgwNzM@._V1_.jpg',
        year: 2019-2022,
        during: '40-60 minutes',
        age_rating: '18+',
        country: 'United kingdom',
        directed_by: 'Laurie Nunn',
        company: 'Eleven Film, Netflix'
    },
    {
        id: 4,
        name: 'Peaky Blinders',
        description: 'A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.',
        rating: 9,
        image: 'https://upload.wikimedia.org/wikipedia/ru/thumb/6/6e/ОстрКоз.jpg/274px-ОстрКоз.jpg',
        year: 2013-2022,
        during: '40-60 minutes',
        age_rating: '18+',
        country: 'United kingdom',
        directed_by: 'Steven Knight',
        company: 'BBC Studios'
    },
    {
        id: 5,
        name: 'Bridgerton',
        description: 'Wealth, lust, and betrayal set against the backdrop of Regency-era England, seen through the eyes of the powerful Bridgerton family.',
        rating: 7,
        image: 'https://irecommend.ru/sites/default/files/product-images/391610/Y0I9wP0sGJ8iqinybf63BQ.jpg',
        year: 2020-2022,
        during: '40-60 minutes',
        age_rating: '18+',
        country: 'United States',
        directed_by: 'Chris Van Dusen',
        company: 'Shondaland CVD Productions, Netflix'
    },
    {
        id: 6,
        name: 'Sherlock',
        description: 'A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London.',
        rating: 9,
        image: 'https://www.ubuy.vn/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzE0bkVNZjZveVMuX1NMMTUwMF8uanBn.jpg',
        year: 2010-2017,
        during: '85-90 minutes',
        age_rating: '16+',
        country: 'United Kingdom',
        directed_by: 'Mark Gatiss, Steven Moffat',
        company: 'Hartswood Films, BBC Wales, WGBH'
    },
    {
        id: 7,
        name: 'Emily in Paris',
        description: 'A young American woman from the Midwest is hired by a marketing firm in Paris to provide them with an American perspective on things.',
        rating: 7,
        image: 'https://m.media-amazon.com/images/M/MV5BYjY3ZWEzYjQtZThmZS00OTQwLWE0NjYtODgyMmFmYTA5M2UzXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg',
        year: 2020-2022,
        during: '24-38 minutes',
        age_rating: '16+',
        country: 'United States',
        directed_by: 'Darren Star',
        company: 'Jax Media, MTV Entertainment Studios, Netflix'
    },
    {
        id: 8,
        name: 'Game of Thrones',
        description: 'Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.',
        rating: 9,
        image: 'https://upload.wikimedia.org/wikipedia/ru/3/38/Игра_Престолов.jpg',
        year: 2011-2019,
        during: '50–82 minutes',
        age_rating: '18+',
        country: 'United Kingdom',
        directed_by: 'David Benioff, D. B. Weiss',
        company: 'HBO Entertainment'
    },
    {
        id: 9,
        name: 'Dark',
        description: 'A family saga with a supernatural twist, set in a German town where the disappearance of two young children exposes the relationships among four families.',
        rating: 9,
        image: 'https://upload.wikimedia.org/wikipedia/ru/2/20/DarkNetflixPoster.jpg',
        year: 2017-2020,
        during: '44–73 minutes',
        age_rating: '18+',
        country: 'Germany',
        directed_by: 'Baran bo Odar',
        company: 'Wiedemann & Berg Television, Netflix'
    },
    {
        id: 10,
        name: 'Anne with an E',
        description: 'The adventures of a young orphan girl living in the early 19th century. Follow Anne as she learns to navigate her new life on Prince Edward Island, in this new take on L.M. Montgomery s classic novels.',
        rating: 8,
        image: 'https://m.media-amazon.com/images/M/MV5BNThmMzJlNzgtYmY5ZC00MDllLThmZTMtNTRiMjQwNmY0NmRhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
        year: 2017-2019,
        during: '44 minutes',
        age_rating: '12+',
        country: 'Canada',
        directed_by: 'Moira Walley-Beckett',
        company: 'Northwood Entertainment, Netflix'
    },
]