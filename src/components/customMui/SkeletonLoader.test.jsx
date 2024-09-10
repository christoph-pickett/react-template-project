import { render } from "@testing-library/react";
import { SkeletonLoader } from "./SkeletonLoader";

test("renders SkeletonLoader component correctly", () => {
  const { container } = render(<SkeletonLoader />);
  expect(container).toMatchSnapshot();
});
