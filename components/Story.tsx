// ggblu4gr

import { View, Text, StyleSheet, Image } from 'react-native';

    type PropsStory = {
        username: string,
        avatar: string,
    }

    export default function Story({username, avatar}: PropsStory) {
        return(
            <View style={styles.container}>
                <Image 
                source={{ uri: avatar }}
                style={styles.avatar} 
                />
                <Text style={styles.username}>{username}</Text>
            </View>


        )
    }

    const styles = StyleSheet.create({
        container:{
            alignItems: 'center',
            marginRight: 16,

        },

        avatar:{
            width: 65,
            height: 65,
            borderRadius: 35,
            borderWidth: 3,
            borderColor: 'rgb(141, 8, 86)',
        },

        username:{
            marginTop: 5,
            fontSize: 12,
        }
    })