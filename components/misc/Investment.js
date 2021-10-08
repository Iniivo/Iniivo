import React from 'react';
import colours from '../../themes/colours';
import fonts from '../../themes/fonts';


import { StyleSheet, View, Text, Image } from 'react-native';

const data = {
    address: '330 Bobolink Ridge',
    city: 'Ottawa',
    province: 'ON',
    sqFootage: '8888',
// percentage and money need to be seperate things depending on the house
    development: '8.88% ($888)'


}

const Investment = () => {
    return(
        <View>

            <View>
            <View style={{flexDirection: 'row', marginBottom: 40}}>
{/* Insert Image of post here */}
                <View style={styles.picture}></View>

                
                <View style={styles.textContainer}>
                <Text style={styles.address}>{data.address}</Text>
                
                <Text style={styles.location}>{data.city}, {data.province} </Text>
                <Text style={styles.sqFootage}>{data.sqFootage} sqft.</Text>
{/* The arrow icon indiacting profit will need to be changed and an if statement will need to be */}
{/* Font is not same size as on wireframe due to the lack of space*/}
                <Text numberOfLines={1} style={styles.development}>^ {data.development}</Text>
                
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

    textContainer: {
        flexDirection: 'column', 
        width:178, 
        height: 54,
        marginLeft: 26.48,
    },

    address: {
        color: colours.black,
        ...fonts.MedMedium,
        marginBottom: 4

    },
    location: {
        color: colours.grey,
        ...fonts.MedBold,
        marginBottom: 3
    },

    sqFootage: {
        color: colours.primary,
        ...fonts.MedBold,
        marginBottom: 2
    },

    development: {
        ...fonts.DevelopmentExtra,
        color: '#17AC1D'

    },

    picture: {
        width: 106.52,
        height: 100,
        borderRadius: 10,
        backgroundColor: '#C4C4C4',
    }

    
    
});

export default Investment;