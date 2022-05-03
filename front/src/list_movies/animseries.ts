export interface Anim {
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

export const anim_series = [
    {
        id: 1,
        name: 'Great Pretender',
        description: 'In Asakusa, every resident, as well as the police, knows the great swindler Makoto Edamure. The guy from childhood was distinguished by his ingenuity and ingenuity. That is just the kid used a brilliant intellect to commit dirty deeds. He helped the fraudster Kudo in everything, who was not only a true friend, but also a reliable partner.',
        rating: 7,
        image: 'https://images-na.ssl-images-amazon.com/images/I/91S3PqWvsbL.jpg',
        year: 2020,
        during: '20-25 minutes',
        age_rating: '18+',
        country: 'Japan',
        directed_by: 'Hiro Kaburagi',
        company: 'Netflix'
    },
    {
        id: 2,
        name: 'Code Geass',
        description: 'The story tells about the near future, when half the world was captured by the British Empire. Japan in this version does not exist - it was conquered by Britain years ago and renamed the "11th sector", and the Japanese themselves are pejoratively called eleventh. The protagonist of the story, Lelouch Lamperouge, the disgraced offspring of the imperial family, is exiled with his sister to the 11th sector, where he studies at the academy for local aristocrats.',
        rating: 9,
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Code_Geass_R1_box_set_cover.jpg/220px-Code_Geass_R1_box_set_cover.jpg',
        year: 2006,
        during: '25 minutes',
        age_rating: '18+',
        country: 'Japan',
        directed_by: 'Goro Taniguchi',
        company: 'Sunrise'
    },
    {
        id: 3,
        name: 'Samurai Champloo',
        description: 'The Edo period, code of honor, katana - the word "samurai" immediately comes to mind, only the main characters Mugen and Jin are far from the samurai ideal. They are excellent fighters with nasty characters, pursued by the demons of the past and, by the will of fate, found themselves in each other s way. A note of calmness in the tense relationship of two loners is brought by Fu, a young and energetic girl who goes on a long journey with Mugen and Jin.',
        rating: 8,
        image: 'https://pics.filmaffinity.com/Samurai_Champloo_TV_Series-363908734-large.jpg',
        year: 2004,
        during: '25 minutes',
        age_rating: '18+',
        country: 'Japan',
        directed_by: 'Shinichirō Watanabe',
        company: 'Manglobe'
    },
    {
        id: 4,
        name: 'Attack on titan',
        description: 'Year 845, border town of Shiganshina. For more than a hundred years, mankind has been forced to huddle behind three rows of walls growing to the sky, protecting people from a terrible, unknown enemy. The borders of the kingdom are strong, and its inhabitants have almost nothing to remind them of the terrible threat that awaits them outside. But even though the walls have not been destroyed for a whole hundred years, this does not mean at all that they will stand for another day.',
        rating: 9,
        image: 'https://d2y6mqrpjbqoe6.cloudfront.net/image/upload/f_auto,q_auto/media/library-400/266_636971768415039001SNK_S1_Small_RU_hq.jpg',
        year: 2009-2021,
        during: '25 minutes',
        age_rating: '18+',
        country: 'Japan',
        directed_by: 'Hajime Isayama',
        company: 'Kodansha, Wit Studio'

    },
    {
        id: 5,
        name: 'Death Note',
        description: 'A shinigami, as a god of death, can kill any person—provided they see their victim s face and write their victim s name in a notebook called a Death Note. One day, Ryuk, bored by the shinigami lifestyle and interested in seeing how a human would use a Death Note, drops one into the human realm. ',
        rating: 8,
        image: 'https://images-na.ssl-images-amazon.com/images/I/81AUFrX5CVL._RI_.jpg',
        year: 2006-2007,
        during: '25 minutes',
        age_rating: '18+',
        country: 'Japan',
        directed_by: 'Tsugumi Oba',
        company: 'Shueisha, Weekly Shonen Jump'
    },
    {
        id: 6,
        name: 'One Punch Man',
        description: 'A guy named Saitama lives in a world ironically similar to ours. 25, he is bald and handsome, and besides, he is so strong that with the blow of one he annihilates everything that poses a danger to mankind. He is looking for himself in this one, simultaneously handing out the cuffs of life to monsters and villains.',
        rating: 8,
        image: 'https://static.wikia.nocookie.net/onepunchman/images/c/c9/One_Punch_Man_TV_Anime_Key_Visual.jpg/revision/latest?cb=20160117134647&path-prefix=ru',
        year: 2009-2022,
        during: '25 minutes',
        age_rating: '18+',
        country: 'Japan',
        directed_by: 'Shingo Natsume, Chikara Sakura',
        company: 'Madhouse'
    },
    {
        id: 7,
        name: 'Monster',
        description: 'One day changed the life of Dr. Kenzo Tenma, a brilliant Japanese surgeon who arrived in Germany to work at the Eisler Memorial Hospital. On that day, he realized that human lives are of equal value, and that human life itself is worth more than the benefit that can be received for saving it.',
        rating: 8,
        image: 'https://upload.wikimedia.org/wikipedia/ru/thumb/0/00/Monster-_A_History_of_Suspense.jpg/230px-Monster-_A_History_of_Suspense.jpg',
        year: 2004-2005,
        during: '25 minutes',
        age_rating: '18+',
        country: 'Japan',
        directed_by: 'Naoki Urasawa',
        company: 'Madhouse'
    },
    {
        id: 8,
        name: 'Steins Gate',
        description: 'Having rented an apartment in Akihabara, self-proclaimed mad scientist Okabe Rintaro set up a "laboratory" there and, in the company of his childhood friend Shina Mayuri and otaku hacker Hasida Itaru, invents "gadgets of the future". The trio are having a great time together, working on a joint project - a "mobile wave" that can be controlled via text messages. Soon, the "lab workers" encounter a series of mysterious incidents that lead to a game-changing discovery: a "mobile wave" can send emails to the past and thus change history.',
        rating: 9,
        image: 'https://desu.shikimori.one/system/animes/original/9253.jpg?1650921326',
        year: 2011,
        during: '25 minutes',
        age_rating: '18+',
        country: 'Japan',
        directed_by: 'Takuya Sato, Hiroshi Hamasaki',
        company: 'White Fox'
    },
    {
        id: 9,
        name: 'Hunter x hunter',
        description: 'Adventure anime series "Hunter x Hunter" is based on the manga of the same name by Yoshihiro Togashi. The action takes place in a world where there is a certain organization of Hunters, which has many different privileges. They can travel by any mode of transport for free, and even first class. Also, members of the organization have access to large sums of money in each bank, as well as information that is simply closed to other people. Many wish to join the ranks of the Hunters, and for this reason an examination is held every year, according to the results of which the most worthy are selected.',
        rating: 9,
        image: 'https://static.hdrezka.ac/i/2019/8/6/e40032f0b93fbkd22i89y.jpg',
        year: 1998-2022,
        during: '25 minutes',
        age_rating: '18+',
        country: 'Japan',
        directed_by: 'Yoshihiro Togashi',
        company: 'Shueisha'
    },
    {
        id: 10,
        name: 'Tokyo Ghoul',
        description: 'A series of brutal murders take place in Tokyo. There is little to no evidence at the crime scenes, but everyone is convinced that human-eating ghouls are the culprits, although no one really knows who they are or what they look like. These events are of little concern to Ken Kaneki, but along with his best friend Hideyoshi Nagachika, he believes that ghouls have not yet been found just because they cleverly disguise themselves as their victims ...',
        rating: 7,
        image: 'https://dere.shikimori.one/system/animes/original/22319.jpg?1633701393',
        year: 2011-2018,
        during: '25 minutes',
        age_rating: '18+',
        country: 'Japan',
        directed_by: 'Sui Ishida',
        company: 'Shueisha'
    },
]