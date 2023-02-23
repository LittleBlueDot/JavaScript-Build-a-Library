// Main class

class Media {
  static count = 0;
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
    this.instanceId = ++Media.count;
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  set isCheckedOut(value) {
    this._isCheckedOut = value;
  }

  toggleCheckOutStatus() {
    this.isCheckedOut = !this.isCheckedOut;
  }

  getAverageRating() {
    let ratingsSum = this.ratings.reduce(
      (currentSum, rating) => currentSum + rating,
      0
    );
    return ratingsSum / this.ratings.length;
  }

  addRating(newRating) {
    if (newRating >= 1 && newRating <= 5) {
      this.ratings.push(newRating);
    } else {
      console.log("Your rating should be between 1 and 5");
    }
  }

  shuffleRatings() {
    let shuffledRatings = [];

    while (shuffledRatings.length < this.ratings.length) {
      let randomNumber = [Math.floor(Math.random() * this.ratings.length)];

      if (!shuffledRatings.includes(this.ratings[randomNumber])) {
        shuffledRatings.push(this.ratings[randomNumber]);
      }
    }

    return shuffledRatings.join(", ");
  }
}

// Subclass

class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}

// Subclass

class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }
}

// Subclass

class CD extends Media {
  constructor(artist, title, songs) {
    super(title);
    this._artist = artist;
    this._songs = songs;
  }

  get artist() {
    return this._artist;
  }

  get songs() {
    return this._songs;
  }

  shuffle() {
    let shuffledArray = [];

    while (shuffledArray.length < this.songs.length) {
      let randomNumber = [Math.floor(Math.random() * this.songs.length)];

      if (!shuffledArray.includes(this.songs[randomNumber])) {
        shuffledArray.push(this.songs[randomNumber]);
      }
    }

    return shuffledArray.join(", ");
  }
}

console.log("");
console.log("BOOK");

const historyOfEverything = new Book(
  "Bill Bryson",
  '"A Short History of Nearly Everything"',
  544
);

historyOfEverything.toggleCheckOutStatus();

historyOfEverything.addRating(4);
historyOfEverything.addRating(3);
historyOfEverything.addRating(5);
historyOfEverything.addRating(7);

console.log(
  `The book ${historyOfEverything.title} has ${
    historyOfEverything.ratings.length
  } ratings and the average rating is ${historyOfEverything.getAverageRating()}. The book's checkout status is ${
    historyOfEverything.isCheckedOut
  }`
);

console.log(historyOfEverything.shuffleRatings());

console.log("");
console.log("CD");

const nina = new CD("Nina Simone", '"Here Comes the Sun"', [
  '"Here Comes the Sun"',
  '"Just Like a Woman"',
  '"New World Coming"',
]);

console.log(
  `${nina.artist}´s album ${
    nina.title
  } has the following songs that I shuffled: ${nina.shuffle()}`
);

console.log("");
console.log("MOVIE");

const jarmusch = new Movie("Jim Jarmusch", '"Coffee and Cigarettes"', 96);

console.log(`My favourite movie is ${jarmusch.title} of ${jarmusch.director}`);

console.log("");
console.log("MEDIA LIST");

console.log(Media.count);
