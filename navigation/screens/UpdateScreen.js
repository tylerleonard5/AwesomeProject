import React from 'react';
import {Image, ScrollView, Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64,
};

const filterOptions = ['Filter 1', 'Filter 2', 'Filter 3', 'Filter 4'];


export default function UpdateScreen({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            {/* Filter bar */}
            <View style={styles.filterBar}>
                {filterOptions.map((option, index) => (
                <TouchableOpacity key={index} style={styles.filterOption}>
                    {index === 0 ? (
                    /* Render an icon for the first item with a size based on text length */
                    <BubbleButton onPress={() => handleFilterPress(option)}>
                        <Ionicons name="list" size={15 + option.length} color="green"/>
                    </BubbleButton>
                     
                    ) : (
                    <BubbleButton onPress={() => handleFilterPress(option)}>
                        <Text style={styles.iconOption}>{option}</Text>
                    </BubbleButton>
                    
                    
                    )}
                </TouchableOpacity>
                ))}
            </View>


            <ScrollView
                showsVerticalScrollIndicator={false}
                style= {{backgroundColor: 'white'}}
            >
                <Text style={{fontSize: 96}}>Scroll me plz</Text>
                <Image source={logo} />
                <Image source={logo} />
                <Image source={logo} />
                <Image source={logo} />
                <Image source={logo} />
                <Text style={{fontSize: 96}}>If you like</Text>
                <Image source={logo} />
                <Image source={logo} />
                <Image source={logo} />
                <Image source={logo} />
                <Image source={logo} />
                <Text style={{fontSize: 96}}>Scrolling down</Text>
                <Image source={logo} />
                <Image source={logo} />
                <Image source={logo} />
                <Image source={logo} />
                <Image source={logo} />
                <Text style={{fontSize: 96}}>What's the best</Text>
                <Image source={logo} />
                <Image source={logo} />
                <Image source={logo} />
                <Image source={logo} />
                <Image source={logo} />
                <Text style={{fontSize: 96}}>Framework around?</Text>
                <Image source={logo} />
                <Image source={logo} />
                <Image source={logo} />
                <Image source={logo} />
                <Image source={logo} />
                <Text style={{fontSize: 80}}>React Native</Text>
            </ScrollView>
        </View>
    );
}

function handleFilterPress(option) {
    // Handle filter button press
    console.log(`Filter selected: ${option}`);
    // You can implement filtering logic here and update the scrollable content accordingly.
}

const BubbleButton = ({ onPress, children }) => (
    <TouchableOpacity style={styles.bubbleButton} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );

const styles = StyleSheet.create({
    filterBar: {
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        padding: 10, 
        paddingTop: 5,
        backgroundColor: 'white',
        borderColor: 'lightgray',
        borderBottomWidth: 0.5, // Border color
    },
    filterOption: {
      alignItems: 'center', // Center the content vertically
    },
    iconOption: {
       marginTop: 2.3, // Center the content vertically
    },
    bubbleButton: {
        backgroundColor: 'white',
        padding: 7.5,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 20, // Adjust the border radius to make it more or less circular
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: 'green'
      },
});