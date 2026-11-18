import { useState } from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Ionicons, Feather } from "@expo/vector-icons";
import StatCard from "./components/StatCard";
import TransactionItem from "./components/TransactionItem";

export default function App() {
  const [hidden, setHidden] = useState(false);

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-gray-50">
        <StatusBar style="dark" />
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Header */}
          <View className="bg-white px-6 pt-4 pb-6 flex-row items-center justify-between">
            <View className="flex-row items-center">
              <View className="w-8 h-8 bg-cyan-400 rounded-full items-center justify-center mr-2">
                <View className="w-4 h-4 bg-white rounded-full" />
              </View>
              <Text className="text-lg font-semibold text-gray-900">MONFLOW</Text>
            </View>
            <View className="w-10 h-10 bg-orange-300 rounded-lg items-center justify-center">
              <Ionicons name="person" size={20} color="#7c2d12" />
            </View>
          </View>

          {/* Balance */}
          <View className="bg-white px-6 pb-8">
            <Text className="text-5xl font-light text-gray-900">{hidden ? "$ ••••" : "$ 590.85"}</Text>
            <View className="flex-row items-center mt-3">
              <Text className="text-gray-600 text-base">Current Balance</Text>
              <Pressable className="ml-3" onPress={() => setHidden(!hidden)}>
                <Feather name={hidden ? "eye-off" : "eye"} size={22} color="#6b7280" />
              </Pressable>
            </View>
          </View>

          {/* Cards */}
          <View className="px-6 py-6 flex-row gap-6">
            <StatCard
              variant="primary"
              title="Daily Income"
              percentage="32%"
              balanceLabel="My Balance"
              balance="$ 12,920"
              hidden={hidden}
            />
            <StatCard
              variant="secondary"
              title="Spending"
              percentage="21%"
              balanceLabel="Spending"
              balance="$ 8,205"
              hidden={hidden}
            />
          </View>

          {/* Transactions */}
          <View className="bg-white px-6 py-6">
            <Text className="text-gray-900 text-lg font-semibold mb-4">Transactions History</Text>
            <TransactionItem
              type="income"
              name="From Ali Hassan"
              date="23 Sep 2026 at 02:00 PM"
              amount="25.90"
            />
            <TransactionItem
              type="expense"
              name="To Mohamed Ali"
              date="20 Sep 2026 at 10:00 AM"
              amount="30.24"
            />
            <TransactionItem
              type="income"
              name="From Sara Ali"
              date="18 Sep 2026 at 04:00 PM"
              amount="15.00"
            />
            <TransactionItem
              type="expense"
              name="To Omar Ahmed"
              date="15 Sep 2026 at 11:00 AM"
              amount="45.50"
            />
            <TransactionItem
              type="pending"
              name="To Netflix"
              date="14 Sep 2026 at 09:30 AM"
              amount="12.99"
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}