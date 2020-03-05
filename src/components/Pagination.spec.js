import React from "react";
import { mount } from "enzyme";
import Pagination from "./Pagination";

const props = {
    postsPerPage: 10,
    totalPosts: 20,
    paginate: jest.fn(),
};

describe("Pagination", () => {
  it("renders", () => {
    const wrapper = mount(<Pagination {...props} />);
    wrapper.find(".page-link").at(0).simulate("click")
  });
});

