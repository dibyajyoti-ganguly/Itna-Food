import RestaurantCard from "../RestaurantCard";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import mockData from "../mocks/ResMockData";

test("Restaurant Card should load properly", () => {
  render(<RestaurantCard resData={mockData} />);

  const heading = screen.getByText("Pizza Hut");

  expect(heading).toBeInTheDocument();
});
