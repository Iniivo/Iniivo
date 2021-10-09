import React from 'react';
import colours from '../../themes/colours';
import fonts from '../../themes/fonts';


import { StyleSheet, View, Text, Image } from 'react-native';

const data = {
    title: 'Garage Light Destroyed',
    author: 'Adam Mulugeta',
    time: '3h',
    message: 'Due to devious actions made by Mathias Diress, the right garage light has been destroyed, creating an unexpected expense north of ten ...',



}

const HouseDevelopment = () => {
    return(
        <View>

            <View>
            <View style={{flexDirection: 'row-reverse', marginBottom: 30}}>
{/* Insert Image of post here */}
                <View style={styles.picture}></View>

                
                <View style={styles.textContainer}>
                <Text numberOfLines={1} style={styles.title}>{data.title}</Text>
                
                <Text style={styles.author}>{data.author} -{data.time} </Text>
                <Text numberOfLines={5} style={styles.message}>{data.message}</Text>

        
                
                </View>
 
                

                
                
                </View>
            </View>
            
        
        </View>

    );

}

const styles = StyleSheet.create ({

    textContainer: {
        flexDirection: 'column', 
        width:178, 
        height: 54,
    },

    title: {
        color: colours.black,
        ...fonts.MedMedium,
        marginBottom: 4,

    },
    author: {
        ...fonts.SmallBold,
        marginBottom: 10,
        color: '#A8A7A7'
    },

   message: {
        color: colours.black,
        ...fonts.DevelopmentAnnoucmentMessageExtra,
        marginBottom: 2
    },


    picture: {
        width: 136,
        height: 136,
        borderRadius: 10,
        backgroundColor: '#C4C4C4',
        marginLeft: 45
    }

    
    
});

export default HouseDevelopment;
