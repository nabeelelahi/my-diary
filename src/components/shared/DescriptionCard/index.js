import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '~/constants/colors';
import globalStyles from '~/assets/styles/globalStyles';
import { styles } from './descriptionCard';

export default function DescriptionCard({ title, children }) {

    return (
        <View style={styles.card}>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={colors.baseGradient}
                style={styles.header}
            >
                <Text style={globalStyles.title}>{title}</Text>
            </LinearGradient>
            <ScrollView style={styles.body}>
                <Text style={styles.text}>{children}</Text>
            </ScrollView>
        </View>
    )
}