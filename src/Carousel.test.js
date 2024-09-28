import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";


let testCarousel = <Carousel photos={TEST_IMAGES} title="images for testing" />;
it("should render without crashing", () => {
  render(testCarousel);
});

it("should compare with snapshot", () =>{
  const {asFragment} = render(testCarousel);
  expect(asFragment()).toMatchSnapshot();
});

it("should check if left arrow works", () => {
  const {container} = render(testCarousel);
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  //check if right arrow works
  fireEvent.click(rightArrow);
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();

  //check if left works by going back
  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  fireEvent.click(leftArrow);
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
});

it("checks if the left arrow is missing on first page", () => {
  const {container} = render(testCarousel);
  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  expect(leftArrow).toBeNull();
});

it("checks if the right arrow is missing on last page", () => {
  const {container} = render(testCarousel);
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);
  fireEvent.click(rightArrow);
  const rightArrow2 = container.querySelector(".bi-arrow-right-circle");
  expect(rightArrow2).toBeNull();
});

it("works when you click on the right arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});
