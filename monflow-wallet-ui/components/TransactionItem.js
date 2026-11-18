import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function TransactionItem({ type, name, date, amount }) {
  const isIncome = type === "income";
  const isPending = type === "pending";

  const iconName = isIncome ? "arrow-down-left" : isPending ? "clock" : "arrow-up-right";
  const iconColor = isIncome ? "#0891b2" : isPending ? "#6b7280" : "#dc2626";
  const iconBg = isIncome ? "bg-cyan-100" : isPending ? "bg-gray-100" : "bg-red-100";
  const sign = isIncome ? "+" : isPending ? "" : "-";

  return (
    <View className="flex-row items-center mb-5">
      <View className={`w-12 h-12 rounded-full items-center justify-center mr-4 ${iconBg}`}>
        <Feather name={iconName} size={20} color={iconColor} />
      </View>
      <View className="flex-1">
        <Text className="text-gray-900 text-base font-medium">{name}</Text>
        <Text className="text-gray-400 text-xs mt-1">{date}</Text>
      </View>
      <Text className="text-gray-900 text-base font-semibold">
        {sign}${amount}
      </Text>
    </View>
  );
}
