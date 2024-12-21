import * as genreIcons from "@/constants";

const featuredBooks = [
  {
    id: "f1",
    title: "The Midnight Library",
    author: "Matt Haig",
    description:
      "A book about life, choices, regrets, and the possibility of alternate realities.",
    cover: "https://covers.openlibrary.org/b/id/10138676-L.jpg",
  },
  {
    id: "f2",
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    description:
      "A coming-of-age mystery about a solitary girl growing up in the wild marshlands of North Carolina.",
    cover: "https://covers.openlibrary.org/b/id/10314850-L.jpg",
  },
  {
    id: "f3",
    title: "The Song of Achilles",
    author: "Madeline Miller",
    description:
      "A retelling of the Iliad focusing on the relationship between Achilles and Patroclus.",
    cover: "https://covers.openlibrary.org/b/id/8259264-L.jpg",
  },
  {
    id: "f4",
    title: "Educated",
    author: "Tara Westover",
    description:
      "A memoir about growing up in a survivalist family and the journey toward education and independence.",
    cover: "https://covers.openlibrary.org/b/id/8287205-L.jpg",
  },
  {
    id: "f5",
    title: "Circe",
    author: "Madeline Miller",
    description:
      "A retelling of the myth of Circe, the enchantress from Greek mythology.",
    cover: "https://covers.openlibrary.org/b/id/8152783-L.jpg",
  },
  {
    id: "f6",
    title: "Becoming",
    author: "Michelle Obama",
    description:
      "A memoir by the former First Lady of the United States, sharing her personal story and journey.",
    cover: "https://covers.openlibrary.org/b/id/8346992-L.jpg",
  },
  {
    id: "f7",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description:
      "A classic American novel about love, wealth, and the American Dream in the Roaring Twenties.",
    cover: "https://covers.openlibrary.org/b/id/10309147-L.jpg",
  },
  {
    id: "f8",
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    description:
      "A story about the struggles of adolescence and the quest for identity in a cynical world.",
    cover: "https://covers.openlibrary.org/b/id/10224087-L.jpg",
  },
  {
    id: "f9",
    title: "1984",
    author: "George Orwell",
    description:
      "A dystopian novel about a totalitarian regime that controls all aspects of life, including truth and freedom.",
    cover: "https://covers.openlibrary.org/b/id/8520082-L.jpg",
  },
  {
    id: "f10",
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    description:
      "A fascinating exploration of the history of humanity from ancient times to the present.",
    cover: "https://covers.openlibrary.org/b/id/8624993-L.jpg",
  },
  {
    id: "f11",
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    cover: "https://covers.openlibrary.org/b/id/10101010-L.jpg",
  },
  {
    id: "f12",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    cover: "https://covers.openlibrary.org/b/id/10102020-L.jpg",
  },
];

const recommendedBooks = [
  {
    id: 1,
    title: "Becoming",
    author: "Michelle Obama",
    description:
      "A memoir by the former First Lady of the United States, sharing her personal story and journey.",
    cover: "https://covers.openlibrary.org/b/id/8346992-L.jpg",
  },
  {
    id: 2,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description:
      "A classic American novel about love, wealth, and the American Dream in the Roaring Twenties.",
    cover: "https://covers.openlibrary.org/b/id/10309147-L.jpg",
  },
  {
    id: 3,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    description:
      "A story about the struggles of adolescence and the quest for identity in a cynical world.",
    cover: "https://covers.openlibrary.org/b/id/10224087-L.jpg",
  },
  {
    id: 4,
    title: "1984",
    author: "George Orwell",
    description:
      "A dystopian novel about a totalitarian regime that controls all aspects of life, including truth and freedom.",
    cover: "https://covers.openlibrary.org/b/id/8520082-L.jpg",
  },
  {
    id: 5,
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    description:
      "A fascinating exploration of the history of humanity from ancient times to the present.",
    cover: "https://covers.openlibrary.org/b/id/8624993-L.jpg",
  },
];

const bookmarkedBooks = [
  {
    id: 7,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    cover: "https://covers.openlibrary.org/b/id/10101010-L.jpg",
  },
  {
    id: 8,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    cover: "https://covers.openlibrary.org/b/id/10102020-L.jpg",
  },
];

const genres = [
  {
    id: "genre1000",
    name: "Animals",
    icon: genreIcons.genre_animals,
    searchWord: "Animals",
  },
  {
    id: "genre1001",
    name: "Australiana",
    icon: genreIcons.genre_australiana,
    searchWord: "Australiana",
  },
  {
    id: "genre1002",
    name: "Biographies and Memoirs",
    icon: genreIcons.genre_biography,
    searchWord: "Biographies and Memoirs",
  },
  {
    id: "genre1003",
    name: "Business and Finance",
    icon: genreIcons.genre_finance,
    searchWord: "Business and Finance",
  },
  {
    id: "genre1004",
    name: "Children's Books",
    icon: genreIcons.genre_child_book,
    searchWord: "Children's Books",
  },
  {
    id: "genre1005",
    name: "Communication",
    icon: genreIcons.genre_communication,
    searchWord: "Communication",
  },
  {
    id: "genre1006",
    name: "Computers and Internet",
    icon: genreIcons.genre_computers_internet,
    searchWord: "Computers and Internet",
  },
  {
    id: "genre1007",
    name: "Cooking, Food and Wine",
    icon: genreIcons.genre_food_wine,
    searchWord: "Cooking, Food and Wine",
  },
  {
    id: "genre1008",
    name: "Disability-Related",
    icon: genreIcons.genre_disability,
    searchWord: "Disability-Related",
  },
  {
    id: "genre1009",
    name: "Drama, Plays and Theater",
    icon: genreIcons.genre_drama,
    searchWord: "Drama, Plays and Theater",
  },
  {
    id: "genre1010",
    name: "Earth Sciences",
    icon: genreIcons.genre_earth_science,
    searchWord: "Earth Sciences",
  },
  {
    id: "genre1011",
    name: "Education",
    icon: genreIcons.genre_education,
    searchWord: "Education",
  },
  {
    id: "genre1012",
    name: "Entertainment",
    icon: genreIcons.genre_entertainment,
    searchWord: "Entertainment",
  },
  {
    id: "genre1013",
    name: "Foreign Language Study",
    icon: genreIcons.genre_language_study,
    searchWord: "Foreign Language Study",
  },
  {
    id: "genre1014",
    name: "LGBT",
    icon: genreIcons.genre_lgbt,
    searchWord: "Gay, Lesbian, Bisexual and Transgender",
  },
  {
    id: "genre1015",
    name: "Health, Mind and Body",
    icon: genreIcons.genre_health,
    searchWord: "Health, Mind and Body",
  },

  {
    id: "genre1016",
    name: "History",
    icon: genreIcons.genre_history,
    searchWord: "History",
  },
  {
    id: "genre1017",
    name: "Home and Garden",
    icon: genreIcons.genre_home,
    searchWord: "Home and Garden",
  },
  {
    id: "genre1018",
    name: "Horror",
    icon: genreIcons.genre_horror,
    searchWord: "Horror",
  },
  {
    id: "genre1019",
    name: "Humor",
    icon: genreIcons.genre_humor,
    searchWord: "Humor",
  },
  {
    id: "genre1020",
    name: "Language Arts",
    icon: genreIcons.genre_language_arts,
    searchWord: "Language Arts",
  },
  {
    id: "genre1021",
    name: "Laws, Issues & Ethics",
    icon: genreIcons.genre_law,
    searchWord: "Law, Legal Issues and Ethics",
  },
  {
    id: "genre1022",
    name: "Literature and Fiction",
    icon: genreIcons.genre_fiction,
    searchWord: "Literature and Fiction",
  },

  {
    id: "genre1023",
    name: "Mathematics and Statistics",
    icon: genreIcons.genre_mathematics,
    searchWord: "Mathematics and Statistics",
  },
  {
    id: "genre1024",
    name: "Medicine",
    icon: genreIcons.genre_medicine,
    searchWord: "Medicine",
  },
  {
    id: "genre1025",
    name: "Military",
    icon: genreIcons.genre_military,
    searchWord: "Military",
  },
  {
    id: "genre1026",
    name: "Music",
    icon: genreIcons.genre_music,
    searchWord: "Music",
  },
  {
    id: "genre1027",
    name: "Mystery and Thrillers",
    icon: genreIcons.genre_mystery,
    searchWord: "Mystery and Thrillers",
  },
  {
    id: "genre1028",
    name: "Nonfiction",
    icon: genreIcons.genre_nonfiction,
    searchWord: "Nonfiction",
  },
  {
    id: "genre1029",
    name: "Outdoors and Nature",
    icon: genreIcons.genre_nonfiction,
    searchWord: "Outdoors and Nature",
  },
  {
    id: "genre1030",
    name: "Parenting and Family",
    icon: genreIcons.genre_family,
    searchWord: "Parenting and Family",
  },
  {
    id: "genre1031",
    name: "Philosophy",
    icon: genreIcons.genre_philosophy,
    searchWord: "Philosophy",
  },
  {
    id: "genre1032",
    name: "Poetry",
    icon: genreIcons.genre_poetry,
    searchWord: "Poetry",
  },
  {
    id: "genre1033",
    name: "Politics and Government",
    icon: genreIcons.genre_politics_gov,
    searchWord: "Politics and Government",
  },
  {
    id: "genre1034",
    name: "Psychology",
    icon: genreIcons.genre_pshychology,
    searchWord: "Psychology",
  },
  {
    id: "genre1035",
    name: "Reference",
    icon: genreIcons.genre_reference,
    searchWord: "Reference",
  },
  {
    id: "genre1036",
    name: "Religion and Spirituality",
    icon: genreIcons.genre_religion,
    searchWord: "Religion and Spirituality",
  },
  {
    id: "genre1037",
    name: "Romance",
    icon: genreIcons.genre_romance,
    searchWord: "Romance",
  },
  {
    id: "genre1038",
    name: "Science",
    icon: genreIcons.genre_science,
    searchWord: "Science",
  },
  {
    id: "genre1039",
    name: "Science Fiction and Fantasy",
    icon: genreIcons.genre_fantasy,
    searchWord: "Science Fiction and Fantasy",
  },
  {
    id: "genre1040",
    name: "Self Help",
    icon: genreIcons.genre_self_help,
    searchWord: "Self-Help",
  },
  {
    id: "genre1041",
    name: "Social Studies",
    icon: genreIcons.genre_social_studies,
    searchWord: "Social Studies",
  },
  {
    id: "genre1042",
    name: "Sociology",
    icon: genreIcons.genre_sociology,
    searchWord: "Sociology",
  },
  {
    id: "genre1043",
    name: "Sports",
    icon: genreIcons.genre_sport,
    searchWord: "Sports",
  },
  {
    id: "genre1044",
    name: "Study Guides",
    icon: genreIcons.genre_study_guide,
    searchWord: "Study Guides",
  },
  {
    id: "genre1045",
    name: "Technology",
    icon: genreIcons.genre_technology,
    searchWord: "Technology",
  },
  {
    id: "genre1046",
    name: "Teens",
    icon: genreIcons.genre_teen,
    searchWord: "Teens",
  },
  {
    id: "genre1047",
    name: "Textbooks",
    icon: genreIcons.genre_textbook,
    searchWord: "Textbooks",
  },
  {
    id: "genre1048",
    name: "Travel",
    icon: genreIcons.genre_travel,
    searchWord: "Travel",
  },
  {
    id: "genre1049",
    name: "Westerns",
    icon: genreIcons.genre_westerns,
    searchWord: "Westerns",
  },
];

const genreBooks = {
  Fiction: [
    {
      id: 1,
      title: "The Book Thief",
      author: "Markus Zusak",
      cover: "https://covers.openlibrary.org/b/id/8543666-L.jpg",
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      cover: "https://covers.openlibrary.org/b/id/8178934-L.jpg",
    },
  ],
  Mystery: [
    {
      id: 1,
      title: "Gone Girl",
      author: "Gillian Flynn",
      cover: "https://covers.openlibrary.org/b/id/7889864-L.jpg",
    },
    {
      id: 2,
      title: "Big Little Lies",
      author: "Liane Moriarty",
      cover: "https://covers.openlibrary.org/b/id/7839900-L.jpg",
    },
  ],
  Fantasy: [
    {
      id: 1,
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      cover: "https://covers.openlibrary.org/b/id/7816040-L.jpg",
    },
    {
      id: 2,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      cover: "https://covers.openlibrary.org/b/id/7848749-L.jpg",
    },
  ],
  Biography: [
    {
      id: 1,
      title: "Steve Jobs",
      author: "Walter Isaacson",
      cover: "https://covers.openlibrary.org/b/id/8259314-L.jpg",
    },
    {
      id: 2,
      title: "The Diary of a Young Girl",
      author: "Anne Frank",
      cover: "https://covers.openlibrary.org/b/id/8175745-L.jpg",
    },
  ],
};

export { featuredBooks, recommendedBooks, genres, genreBooks, bookmarkedBooks };
