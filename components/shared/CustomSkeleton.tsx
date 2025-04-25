import { FC } from "react";
import { createShimmerPlaceholder } from "react-native-shimmer-placeholder";
import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

interface CustomSkeletonProps {
  height: number;
  width?: number;
  borderRadius?: number;
  marginBottom?: number;
  marginEnd?: number;
}

const CustomSkeleton: FC<CustomSkeletonProps> = ({
  height,
  width,
  borderRadius = 16,
  marginBottom = 16,
  marginEnd = 0,
}) => {
  return (
    <View
      style={{
        height: height,
        width: width ? width : "100%",
        marginBottom: marginBottom,
        borderRadius: borderRadius,
        marginEnd: marginEnd,
        overflow: "hidden",
        backgroundColor: "#F8F8F8",
      }}
    >
      <ShimmerPlaceholder
        shimmerColors={["#E0E0E0", "#F8F8F8", "#E0E0E0"]}
        width={300}
        location={[0.3, 0.5, 0.7]}
        shimmerWidthPercent={0.5}
        style={{
          height: "100%",
          width: "100%",
          borderRadius: borderRadius,
        }}
      />
    </View>
  );
};

export default CustomSkeleton;
