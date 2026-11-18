import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function StatCard({ variant, title, percentage, balanceLabel, balance, hidden }) {
  const isPrimary = variant === "primary";
  const card = isPrimary ? "bg-indigo-600" : "bg-white border border-gray-200";
  const text = isPrimary ? "text-white" : "text-gray-900";
  const box = isPrimary ? "bg-white" : "bg-gray-100";

  return (
    <View className={`flex-1 rounded-2xl p-4 ${card}`}>
      <View className="flex-row justify-between items-center mb-2">
        <Text className={`text-sm ${text}`}>{title}</Text>
        <Feather name="more-horizontal" size={20} color={isPrimary ? "white" : "#6b7280"} />
      </View>
      <Text className={`text-4xl font-bold mb-3 ${text}`}>{percentage}</Text>
      <View className={`rounded-xl p-3 ${box}`}>
        <Text className="text-gray-500 text-xs mb-1">{balanceLabel}</Text>
        <Text className="text-gray-900 text-xl font-semibold">{hidden ? "••••" : balance}</Text>
      </View>
    </View>
  );
}
