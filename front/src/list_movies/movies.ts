export interface Movie {
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

export const movies = [
    {
        id: 1,
        name: 'Doctor strange in the multiverse of madness',
        description: 'Dr. Stephen Strange casts a forbidden spell that opens the doorway to the multiverse, including alternate versions of himself, whose threat to humanity is too great for the combined forces of Strange, Wong, and Wanda Maximoff.',
        rating: 10,
        image: 'https://upload.wikimedia.org/wikipedia/ru/thumb/7/77/%D0%94%D0%BE%D0%BA%D1%82%D0%BE%D1%80_%D0%A1%D1%82%D1%80%D1%8D%D0%BD%D0%B4%D0%B6_%D0%92_%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D0%B8%D0%B2%D1%81%D0%B5%D0%BB%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B1%D0%B5%D0%B7%D1%83%D0%BC%D0%B8%D1%8F_%D1%82%D0%B8%D0%B7%D0%B5%D1%80_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpeg/304px-%D0%94%D0%BE%D0%BA%D1%82%D0%BE%D1%80_%D0%A1%D1%82%D1%80%D1%8D%D0%BD%D0%B4%D0%B6_%D0%92_%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D0%B8%D0%B2%D1%81%D0%B5%D0%BB%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B1%D0%B5%D0%B7%D1%83%D0%BC%D0%B8%D1%8F_%D1%82%D0%B8%D0%B7%D0%B5%D1%80_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpeg',
    },
    {
        id: 2,
        name: 'Bird Box',
        description: 'Five years after an ominous unseen presence drives most of society to suicide, a mother and her two children make a desperate bid to reach safety.',
        rating: 7,
        image: 'https://assets1.bmstatic.com/assets/books-covers/5d/6e/ipad-45dbf1cda08036211b832160394afec5.jpeg',
    },
    {
        id: 3,
        name: 'Interstellar',
        description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity s survival.',
        rating: 9,
        image: 'https://www.kino-teatr.ru/movie/posters/big/6/55826.jpg'
    },
    {
        id: 4,
        name: 'The Great Gatsby',
        description: 'A writer and wall street trader, Nick, finds himself drawn to the past and lifestyle of his millionaire neighbor, Jay Gatsby.',
        rating: 7,
        image: 'https://m.media-amazon.com/images/M/MV5BMTkxNTk1ODcxNl5BMl5BanBnXkFtZTcwMDI1OTMzOQ@@._V1_.jpg'
    },
    {
        id: 5,
        name: 'King Richard',
        description: 'A look at how tennis superstars Venus and Serena Williams became who they are after the coaching from their father Richard Williams.',
        rating: 8,
        image: 'https://play-lh.googleusercontent.com/Yb7tOfPd4FuvBq_Lu3xzFKi9S0bsTtSvtlkF1HzIBgCDMvFJUHfA8gpgmCtncydFitneoebMPNI8hvkNO4A'
    },
    {
        id: 6,
        name: 'Hidden Figures',
        description: 'The story of a team of female African-American mathematicians who served a vital role in NASA during the early years of the U.S. space program.',
        rating: 8,
        image: 'https://m.media-amazon.com/images/M/MV5BMzg2Mzg4YmUtNDdkNy00NWY1LWE3NmEtZWMwNGNlMzE5YzU3XkEyXkFqcGdeQXVyMjA5MTIzMjQ@._V1_FMjpg_UX1000_.jpg'
    },
    {
        id: 7,
        name: 'Little Women',
        description: 'Jo March reflects back and forth on her life, telling the beloved story of the March sisters - four young women, each determined to live life on her own terms.',
        rating: 8,
        image: 'https://upload.wikimedia.org/wikipedia/ru/b/b1/Маленькие_женщины_%28фильм%2C_2019%29.jpg'
    },
    {
        id: 8,
        name: 'Hacksaw Ridge',
        description: 'World War II American Army Medic Desmond T. Doss, who served during the Battle of Okinawa, refuses to kill people and becomes the first man in American history to receive the Medal of Honor without firing a shot.',
        rating: 8,
        image: 'https://www.film.ru/sites/default/files/images/g2bNk74COtU.jpg'
    },
    {
        id: 9,
        name: 'Saving Mr. Banks',
        description: 'Author P.L. Travers reflects on her childhood after reluctantly meeting with Walt Disney, who seeks to adapt her Mary Poppins books for the big screen.',
        rating: 7,
        image: 'https://lumiere-a.akamaihd.net/v1/images/p_savingmrbanks_19873_dacee483.jpeg?region=0%2C0%2C540%2C810'
    },
    {
        id: 10,
        name: 'The Pursuit of Happyness',
        description: 'A struggling salesman takes custody of his son as he s poised to begin a life-changing professional career.',
        rating: 8,
        image: 'https://miro.medium.com/max/548/1*Y8vXN1mJeEHyXWJtFICjiQ.jpeg'
    },
]