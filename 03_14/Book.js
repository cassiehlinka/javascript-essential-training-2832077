class Book {
  constructor(title, pages, coverColor, coverHard, size, open) {
    this.title = title;
    this.pages = pages;
    this.coverColor = coverColor;
    this.coverHard = coverHard;
    this.size = size;
    this.open = open;
  }
  toggleLid(status) {
    this.open = status;
  }
}

export default Book;
