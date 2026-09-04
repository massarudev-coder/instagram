import { View, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Instagram</Text>
      <View style={styles.actions}>
        <Text style={styles.icon}>♡</Text>
        <Text style={styles.icon}>✉</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        height: 60,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#311414',
    },

    logo:{
        fontSize: 24,
        fontWeight: 'bold',
    },

    actions:{
        flexDirection: 'row',
        gap: 18,
    },

    icon:{
        fontSize: 28,
    }
})