import * as React from 'react';
import { View, Text } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => alert('This is the "Saved" screen.')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Jake is a faggot</Text>
        </View>
    );
}