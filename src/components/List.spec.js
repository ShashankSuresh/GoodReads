import React from "react";
import { shallow, mount } from "enzyme";
import List from "./List";

const props = {
  posts: [
    {
      id: "26732095",
      books_count: "73",
      ratings_count: "53528",
      text_reviews_count: "7728",
      original_publication_year: "2014",
      original_publication_month: "7",
      original_publication_day: "31",
      average_rating: "3.73",
      best_book: {
        id: "18803640",
        title: "H is for Hawk",
        author: {
          id: "314021",
          name: "Helen Macdonald"
        },
        image_url:
          "https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png",
        small_image_url:
          "https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png"
      }
    },
    {
      id: "245494",
      books_count: "2139",
      ratings_count: "3522043",
      text_reviews_count: "63117",
      original_publication_year: "1925",
      original_publication_month: "",
      original_publication_day: "",
      average_rating: "3.92",
      best_book: {
        id: "17791628",
        title: "The Great Gatsby",
        author: {
          id: "3190",
          name: "F. Scott Fitzgerald"
        },
        image_url:
          "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1490789590l/17791628._SX98_.jpg",
        small_image_url:
          "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1490789590l/17791628._SY75_.jpg"
      }
    },
    {
      id: "98851",
      books_count: "62",
      ratings_count: "29181",
      text_reviews_count: "834",
      original_publication_year: "1991",
      original_publication_month: "",
      original_publication_day: "",
      average_rating: "3.91",
      best_book: {
        id: "102525",
        title: "H is for Homicide (Kinsey Millhone, #8)",
        author: {
          id: "9559",
          name: "Sue Grafton"
        },
        image_url:
          "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1315138195l/102525._SX98_.jpg",
        small_image_url:
          "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1315138195l/102525._SX50_.jpg"
      }
    },
    {
      id: "2207778",
      books_count: "626",
      ratings_count: "2530848",
      text_reviews_count: "50542",
      original_publication_year: "1945",
      original_publication_month: "8",
      original_publication_day: "17",
      average_rating: "3.93",
      best_book: {
        id: "18170996",
        title: "H φάρμα των ζώων",
        author: {
          id: "3706",
          name: "George Orwell"
        },
        image_url:
          "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1373320815l/18170996._SY160_.jpg",
        small_image_url:
          "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1373320815l/18170996._SY75_.jpg"
      }
    },
    {
      id: "1540236",
      books_count: "1168",
      ratings_count: "2708676",
      text_reviews_count: "45177",
      original_publication_year: "1937",
      original_publication_month: "9",
      original_publication_day: "21",
      average_rating: "4.27",
      best_book: {
        id: "27255844",
        title: "La Hobito, aŭ, Tien kaj Reen",
        author: {
          id: "656983",
          name: "J.R.R. Tolkien"
        },
        image_url:
          "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1445528215l/27255844._SX98_.jpg",
        small_image_url:
          "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1445528215l/27255844._SY75_.jpg"
      }
    },
    {
      id: "6643001",
      books_count: "76",
      ratings_count: "86978",
      text_reviews_count: "4092",
      original_publication_year: "2009",
      original_publication_month: "12",
      original_publication_day: "29",
      average_rating: "3.94",
      best_book: {
        id: "6452796",
        title: "Drive: The Surprising Truth About What Motivates Us",
        author: {
          id: "96150",
          name: "Daniel H. Pink"
        },
        image_url:
          "https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png",
        small_image_url:
          "https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png"
      }
    },
    {
      id: "3349450",
      books_count: "4867",
      ratings_count: "1956427",
      text_reviews_count: "18248",
      original_publication_year: "1595",
      original_publication_month: "",
      original_publication_day: "",
      average_rating: "3.74",
      best_book: {
        id: "2914480",
        title: "The Tragedy of Romeo and Juliet",
        author: {
          id: "947",
          name: "William Shakespeare"
        },
        image_url:
          "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328758588l/2914480._SX98_.jpg",
        small_image_url:
          "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328758588l/2914480._SY75_.jpg"
      }
    },
    {
      id: "2977639",
      books_count: "6577",
      ratings_count: "1528899",
      text_reviews_count: "38803",
      original_publication_year: "1847",
      original_publication_month: "10",
      original_publication_day: "16",
      average_rating: "4.12",
      best_book: {
        id: "19485049",
        title: "Jane Eyre",
        author: {
          id: "1036615",
          name: "Charlotte Brontë"
        },
        image_url:
          "https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png",
        small_image_url:
          "https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png"
      }
    },
    {
      id: "749449",
      books_count: "104",
      ratings_count: "93944",
      text_reviews_count: "1584",
      original_publication_year: "1981",
      original_publication_month: "",
      original_publication_day: "",
      average_rating: "3.90",
      best_book: {
        id: "763362",
        title: "The One Minute Manager",
        author: {
          id: "4112157",
          name: "Kenneth H. Blanchard"
        },
        image_url:
          "https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png",
        small_image_url:
          "https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png"
      }
    },
    {
      id: "3244642",
      books_count: "4116",
      ratings_count: "1571365",
      text_reviews_count: "25966",
      original_publication_year: "1868",
      original_publication_month: "9",
      original_publication_day: "30",
      average_rating: "4.07",
      best_book: {
        id: "50518685",
        title:
          "LITTLE WOMAN; Or, Meg, Jo, Beth, and Amy (Illlustrated Original Edition)",
        author: {
          id: "1315",
          name: "Louisa May Alcott"
        },
        image_url:
          "https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png",
        small_image_url:
          "https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png"
      }
    }
  ]
};

describe("List when isloading false", () => {
  it("renders", () => {
    shallow(<List {...props} />);
  });
});

describe("List when isloading true", () => {
  it("renders", () => {
    const updatedProps = {
      ...props,
      isloading: true
    };
    const wrapper = mount(<List {...updatedProps} />);
  });
});
