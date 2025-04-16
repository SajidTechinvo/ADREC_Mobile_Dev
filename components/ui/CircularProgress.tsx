// CircularProgress.tsx
import { Text, View } from "react-native";
import Svg, { Circle } from "react-native-svg";

const SIZE = 100;
const STROKE_WIDTH = 6;
const RADIUS = (SIZE - STROKE_WIDTH) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

type Props = {
  percentage: number;
  pointsEarned: number;
  totalPoints: number;
};

export const CircularProgress = ({
  percentage = 70,
  pointsEarned = 140,
  totalPoints = 200,
}: Props) => {
  const strokeDashoffset = CIRCUMFERENCE - (CIRCUMFERENCE * percentage) / 100;

  return (
    <View className="items-center justify-center">
      <Svg width={SIZE} height={SIZE}>
        <Circle
          stroke="#E5F0FF"
          fill="none"
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          strokeWidth={STROKE_WIDTH}
        />
        <Circle
          stroke="#0A66C2"
          fill="none"
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          strokeWidth={STROKE_WIDTH}
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          rotation="-90"
          origin={`${SIZE / 2}, ${SIZE / 2}`}
        />
      </Svg>
      <View className="absolute items-center">
        <Text className="text-lg font-bold text-black">{percentage}%</Text>
        <Text className="text-xs text-gray-500">
          <Text className="font-bold text-xs">{pointsEarned}</Text>/
          {totalPoints} Points
        </Text>
      </View>
    </View>
  );
};
