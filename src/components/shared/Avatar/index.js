import React, { useEffect, useState } from 'react'
import { View, Text, Image } from 'react-native'
import globalStyles from '~/assets/styles/globalStyles'
import { dummyUser } from '~/assets'
import { styles } from './avatar'
import storage from '~/helpers/storage'

export default function Avatar({ title, hideTitle }) {

    const [user, setUser] = useState(null)

    async function getUser() {
        const userSring = await storage.get('user')
        setUser(userSring)
    }

    useEffect(() => {
        getUser()
    }, [])

    return (
        <View style={globalStyles.centerContent}>
            <View style={styles.imageBox}>
                {
                    user?.image_url ?
                        <Image
                            style={styles.image}
                            source={{ uri: user?.image_url }}
                        />
                        :
                        <Image
                            style={styles.image}
                            source={dummyUser}
                        />
                }
            </View>
            {
                !hideTitle &&
                <Text style={styles.text}>{user?.name}</Text>
            }
        </View>
    )
}