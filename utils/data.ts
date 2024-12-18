const featuredBooks = [
  {
    id: 1,
    title: "The Midnight Library",
    author: "Matt Haig",
    description:
      "A book about life, choices, regrets, and the possibility of alternate realities.",
    cover: "https://covers.openlibrary.org/b/id/10138676-L.jpg",
  },
  {
    id: 2,
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    description:
      "A coming-of-age mystery about a solitary girl growing up in the wild marshlands of North Carolina.",
    cover: "https://covers.openlibrary.org/b/id/10314850-L.jpg",
  },
  {
    id: 3,
    title: "The Song of Achilles",
    author: "Madeline Miller",
    description:
      "A retelling of the Iliad focusing on the relationship between Achilles and Patroclus.",
    cover: "https://covers.openlibrary.org/b/id/8259264-L.jpg",
  },
  {
    id: 4,
    title: "Educated",
    author: "Tara Westover",
    description:
      "A memoir about growing up in a survivalist family and the journey toward education and independence.",
    cover: "https://covers.openlibrary.org/b/id/8287205-L.jpg",
  },
  {
    id: 5,
    title: "Circe",
    author: "Madeline Miller",
    description:
      "A retelling of the myth of Circe, the enchantress from Greek mythology.",
    cover: "https://covers.openlibrary.org/b/id/8152783-L.jpg",
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
  { id: 1, name: "Fiction", icon: "book" },
  { id: 2, name: "Mystery", icon: "search" },
  { id: 3, name: "Fantasy", icon: "magic" },
  { id: 4, name: "Biography", icon: "user" },
  { id: 5, name: "Self-Help", icon: "lightbulb" },
  { id: 6, name: "Science", icon: "flask" },
  { id: 7, name: "History", icon: "globe" },
  { id: 8, name: "Romance", icon: "heart" },
  { id: 9, name: "Horror", icon: "ghost" },
  { id: 10, name: "Poetry", icon: "pen" },
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
