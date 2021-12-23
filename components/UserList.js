import React from 'react'
import { View, Text } from 'react-native'
import User from './User';

export default function UserList({users, onRemove}) {
    // console.log(users);
    return (
        <View>
            {users.map(user => (
                <User user={user} key={user.id} onRemove={onRemove} />
            ))}
        </View>
    )
}
