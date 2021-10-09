import React from 'react';
import colours from '../../themes/colours';
import fonts from '../../themes/fonts';


import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';

const NewsPost = () => {
    return(
        <View>
            <View style={{alignItems:'center'}}>
                <View style={{backgroundColor: colours.grey, width: 343, 
                    height: 1, 
                    marginBottom: 18,
                    alignItems: 'center'}}>
                
            </View>
            </View>
            <View>
            <View style={{flexDirection: 'row-reverse', marginBottom: 40}}>
{/* Insert Image of post here */}
                <View style={styles.picture}></View>
                
                <View style={styles.textContainer}>
                <Text style={styles.title}>liquam risus ex, bibendum ac metus at, auctor facilisis urna.</Text>
                
                <Text style={styles.name}>Mathias </Text>
                <Text style={styles.place}>Ottawa, Ontario</Text>
                <Text style={styles.time}>2 hours ago</Text>
                
                </View>
                

                
                
                </View>
            </View>
            
        
        </View>

    );

}

const styles = StyleSheet.create ({
    title: {
        color: colours.black,
        ...fonts.SmallBold,
        marginBottom: 9,
    },

    textContainer: {flexDirection: 'column', 
    width:178, 
    height: 54 },

    name: {
        color: colours.grey,
        ...fonts.SmallRegular,
        marginBottom: 6

    },
    place: {
        color: colours.grey,
        ...fonts.TinyRegular,
        marginBottom: 6
    },

    time: {
        color: colours.grey,
        ...fonts.TinyRegular,
        marginBottom: 6
    },

    picture: {
        width: 149,
        height: 124,
        borderRadius: 9,
        backgroundColor: '#C4C4C4',
        marginLeft: 25
    }

    
    
});

export default NewsPost;