import AsyncStorage from "@react-native-async-storage/async-storage";

interface Book {
  id: string;
  title: string;
  image: string;
  author: string;
}

async function getBookmarkedBooks() {
  try {
    const bookmarkedBooks = await AsyncStorage.getItem("bookmarkedBooks");
    return bookmarkedBooks ? JSON.parse(bookmarkedBooks) : [];
  } catch (error) {
    console.error("Error getting bookmarked books:", error);
    return [];
  }
}

async function addBookmark(book: any) {
  try {
    const bookmarkedBooks = await getBookmarkedBooks();

    if (!bookmarkedBooks.some((b: Book) => b.id === book.bookId)) {
      bookmarkedBooks.push(book);
      await AsyncStorage.setItem(
        "bookmarkedBooks",
        JSON.stringify(bookmarkedBooks)
      );
    }
  } catch (error) {
    console.error("Error adding bookmark:", error);
  }
}

async function removeBookmark(bookId: string) {
  try {
    let bookmarkedBooks = await getBookmarkedBooks();
    bookmarkedBooks = bookmarkedBooks.filter((b: Book) => b.id !== bookId);
    await AsyncStorage.setItem(
      "bookmarkedBooks",
      JSON.stringify(bookmarkedBooks)
    );
  } catch (error) {
    console.error("Error removing bookmark:", error);
  }
}

async function isBookmarked(bookId: string) {
  try {
    const bookmarkedBooks = await getBookmarkedBooks();

    return bookmarkedBooks.some((book: Book) => book.id === bookId);
  } catch (error) {
    console.error("Error checking bookmark status:", error);
    return false;
  }
}

async function removeAllBookmarks() {
  try {
    await AsyncStorage.removeItem("bookmarkedBooks");
    console.log("All bookmarks have been removed.");
  } catch (error) {
    console.error("Error removing all bookmarks:", error);
  }
}

export {
  getBookmarkedBooks,
  isBookmarked,
  removeBookmark,
  addBookmark,
  removeAllBookmarks,
};
