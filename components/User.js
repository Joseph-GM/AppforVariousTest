import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export default function User({user, onRemove}) {
    // console.log(user);
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{user.username} {user.email}</Text>
            <Button 
                title='삭제'
                onPress={() => onRemove(user.id)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle : {
        flexDirection: 'row'
    },
    textStyle : {
        fontSize: 20,
        fontWeight: 'bold'
    }
})
