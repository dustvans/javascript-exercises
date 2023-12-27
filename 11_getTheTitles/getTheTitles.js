const getTheTitles = function(books) {
    let bookTitles = [];
    for (let index = 0; index < books.length; index++) {
        const title = books[index].title;
        bookTitles.push(title);
    }

    return bookTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
