import { ScrollView, StyleSheet,Text, View } from 'react-native';
import Header from '../components/Header';
import Story from '../components/Story';
import { posts } from '../data/posts';

export default function FeedScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Header />

      <ScrollView showsVerticalScrollIndicator={false}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.stories}
        >
          {/* Story */}

          {posts.map((post) => (
            <Story
              key={post.id}
              username={post.username}
              avatar={post.avatar}
            />
          ))}
        </ScrollView>
      </ScrollView>

      {/* Posts */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  stories: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
});