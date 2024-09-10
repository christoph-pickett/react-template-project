import { Skeleton } from "@mui/material";

export const SkeletonLoader = ({ height }) => {
  return (
    <Skeleton
      variant="rectangular"
      width={"inherit"}
      height={height ? height : "500px"}
    />
  );
};
