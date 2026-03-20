import React from "react";
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";

const CATEGORIES = [
  { id: "1", name: "Pizza", emoji: "🍕" },
  { id: "2", name: "Burgers", emoji: "🍔" },
  { id: "3", name: "Steak", emoji: "🥩" },
];

const POPULAR_ITEMS = [
  { id: "1", name: "Food 1", origin: "By Viet Nam", price: "1$" },
  { id: "2", name: "Food 2", origin: "By Japan", price: "3$" },
];

const SALE_ITEMS = [
  { id: "1", name: "Food 3", origin: "By Korea", price: "2$", sale: "10% OFF" },
  { id: "2", name: "Food 4", origin: "By Thai", price: "4$", sale: "10% OFF" },
];

// Component dùng chung cho Popular Items và Sale-off Items
const SectionHeader = ({ title, onViewAll }: { title: string; onViewAll?: () => void }) => (
  <View style={s.sectionRow}>
    <Text style={s.sectionTitle}>{title}</Text>
    {onViewAll && (
      <TouchableOpacity onPress={onViewAll}>
        <Text style={s.viewAll}>View all</Text>
      </TouchableOpacity>
    )}
  </View>
);

// FlatList dùng chung cho cả 3 section dưới
const FoodList = ({ data, showSale }: { data: any[]; showSale?: boolean }) => (
  <FlatList
    horizontal
    showsHorizontalScrollIndicator={false}
    data={data}
    keyExtractor={(i) => i.id}
    renderItem={({ item }) => (
      <TouchableOpacity style={s.foodCard}>
        <View style={s.foodImg}>
          {showSale && item.sale && (
            <View style={s.saleBadge}>
              <Text style={s.saleBadgeText}>{item.sale}</Text>
            </View>
          )}
        </View>
        <View style={s.foodInfo}>
          <Text style={s.foodName}>{item.name}</Text>
          <Text style={s.foodOrigin}>{item.origin}</Text>
          <Text style={s.foodPrice}>{item.price}</Text>
        </View>
      </TouchableOpacity>
    )}
  />
);

export default function HomeScreen() {
  return (
    <SafeAreaView style={s.wrapper}>
      {/* Header */}
      <View style={s.header}>
        <Text style={s.headerTitle}>Explorer</Text>
      </View>

      <FlatList
        data={[]}
        renderItem={null}
        ListHeaderComponent={
          <>
            {/* Search bar */}
            <View style={s.searchBar}>
              <Text style={s.searchIcon}>📍</Text>
              <TextInput
                style={s.searchInput}
                placeholder="Search for meals or area"
                placeholderTextColor="#bbb"
              />
              <Text style={s.searchIcon}>🔍</Text>
            </View>

            {/* Top Categories */}
            <SectionHeader title="Top Categories" />
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={CATEGORIES}
              keyExtractor={(i) => i.id}
              renderItem={({ item }) => (
                <TouchableOpacity style={s.catItem}>
                  <View style={s.catImg}>
                    <Text style={{ fontSize: 28 }}>{item.emoji}</Text>
                  </View>
                  <Text style={s.catName}>{item.name}</Text>
                </TouchableOpacity>
              )}
            />

            {/* Popular Items */}
            <SectionHeader title="Popular Items" onViewAll={() => {}} />
            <FoodList data={POPULAR_ITEMS} />

            {/* Sale-off Items */}
            <SectionHeader title="Sale-off Items" onViewAll={() => {}} />
            <FoodList data={SALE_ITEMS} showSale />
          </>
        }
      />
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  wrapper: { flex: 1, width: "100%", maxWidth: 390, alignSelf: "center", backgroundColor: "#fff" },
  header: { paddingHorizontal: 16, paddingVertical: 12 },
  headerTitle: { fontSize: 20, fontWeight: "700", color: "#1a1a1a" },
  searchBar: {
    flexDirection: "row", alignItems: "center",
    borderWidth: 1, borderColor: "#eee", borderRadius: 10,
    paddingHorizontal: 12, paddingVertical: 8,
    marginHorizontal: 16, marginBottom: 16, gap: 8,
  },
  searchIcon: { fontSize: 16 },
  searchInput: { flex: 1, fontSize: 14, color: "#333" },
  sectionRow: {
    flexDirection: "row", justifyContent: "space-between",
    alignItems: "center", paddingHorizontal: 16, marginBottom: 10,
  },
  sectionTitle: { fontSize: 16, fontWeight: "700", color: "#1a1a1a" },
  viewAll: { color: "#F5A623", fontSize: 13 },
  catItem: { alignItems: "center", marginLeft: 16, marginBottom: 16 },
  catImg: {
    width: 72, height: 72, borderRadius: 10,
    backgroundColor: "#f0f0f0", alignItems: "center", justifyContent: "center",
    marginBottom: 6,
  },
  catName: { fontSize: 12, color: "#555" },
  foodCard: {
    width: 150, marginLeft: 16, marginBottom: 16,
    borderRadius: 12, borderWidth: 1, borderColor: "#eee",
    overflow: "hidden", backgroundColor: "#fff",
  },
  foodImg: {
    width: "100%", height: 100,
    backgroundColor: "#f0f0f0",
    justifyContent: "flex-start", alignItems: "flex-end",
  },
  foodInfo: { padding: 8 },
  foodName: { fontWeight: "600", fontSize: 14, color: "#1a1a1a" },
  foodOrigin: { fontSize: 11, color: "#888", marginTop: 2 },
  foodPrice: { fontSize: 13, color: "#333", marginTop: 4 },
  saleBadge: {
    backgroundColor: "#e74c3c", borderRadius: 4,
    paddingHorizontal: 6, paddingVertical: 2, margin: 6,
  },
  saleBadgeText: { color: "#fff", fontSize: 10, fontWeight: "700" },
});