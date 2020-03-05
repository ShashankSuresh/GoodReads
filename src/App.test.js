import React from "react";
import { shallow, mount } from "enzyme";
import App from "./App";
import axios from "axios";

import mockAxios from "jest-mock-axios";

jest.mock("axios", () => ({
  get: jest.fn()
}));

axios.get.mockImplementation(() =>
  Promise.resolve({
    data: {
      posts: {
        work: {
          namespaceURI: null,
          prefix: null,
          localName: "work",
          tagName: "work",
          id: "",
          className: ""
        },
        id: "4640799",
        books_count: "748",
        ratings_count: "6471131",
        text_reviews_count: "102021",
        original_publication_year: "1997",
        original_publication_month: "6",
        original_publication_day: "26",
        average_rating: "4.47",
        best_book: {
          id: "3",
          title: "Harry Potter and the Sorcerer's Stone (Harry Potter, #1)",
          author: {
            id: "1077326",
            name: "J.K. Rowling"
          },
          image_url:
            "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474154022l/3._SX98_.jpg",
          small_image_url:
            "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474154022l/3._SY75_.jpg"
        }
      }
    }
  })
);

const props = {
  posts: {},
  fetchBooks: jest.fn(),
  parseXMLResponse: jest.fn(),
  XMLresults: jest.fn()
};

describe("fetchData", () => {
  beforeEach(() => {
    const input = document.createElement("input");
    input.setAttribute("id", "search-text");
    document.body.appendChild(input);
  });

  afterEach(() => {
    mockAxios.reset();
  });

  it("renders", () => {
    shallow(<App />);
  });

  it("fetchBooks", async () => {
    const wrapper = mount(<App />);
    
    wrapper
      .find(".good-deads")
      .find("#search-text")
      .instance().value = "rowling";

    wrapper
      .find(".good-deads")
      .find("#search-text")
      .simulate("change");

    axios.get.mockResolvedValue("resp");
    expect(axios.get).toHaveBeenCalledTimes(1);
    await expect(axios.get()).resolves.toBe("resp");
  });
});
