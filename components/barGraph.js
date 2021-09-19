import React from 'react';
import colours from '../themes/colours';
import fonts from '../themes/fonts';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';

const BarGraph = () => {
    return(
        <View>
        <Text style={{color: colours.black, ...fonts.MedBold, marginTop: 19}}> Market Price Prediction </Text>
        <View style={styles.marketPricePredictionContainer}>
            
            <View style={styles.bargraphBarsContainer}>
                <View style={styles.bargraphInfoContainer}>
                    <View style={styles.bargraphTextBarContainer}>
                        <Text style={{...fonts.SmallRegular}}> 94k </Text>
                        <View style={styles.bargraphBar1}/>
                    </View>
                    

                    <View style={styles.bargraphTextBarContainer}>
                        <Text style={{...fonts.SmallRegular}}> 120k </Text>
                        <View style={styles.bargraphBar2}/>
                    </View>

                    <View style={styles.bargraphTextBarContainer}>
                        <Text style={{...fonts.SmallRegular}}> 26k </Text>
                        <View style={styles.bargraphBar3}/>
                    </View>
                    
                </View>
            </View>
            <View style={{height:2, backgroundColor: 'black', marginBottom: 7, alignItems: 'center'}}/>
            
            <View style={styles.bargraphInfoContainer}>
                <Text  style={styles.bargraphLabel}>Renovation Costs</Text>
                <Text style={styles.bargraphLabel}> Predicted selling price </Text>
                <Text style={styles.bargraphLabel}> Predicted profit </Text>
            </View>

            
             

        </View>
        </View>

    );

}

const styles = StyleSheet.create ({
    
    marketPricePredictionContainer: {
        marginLeft: 37,
        marginRight: 37
        
    },

    bargraphBarsContainer: {
        flexDirection: 'row'
    },

    bargraphText: {
        ...fonts.MedRegular,
        marginBottom: 1
    },

    bargraphBarsContainer: {
        marginTop: 46
    },

    bargraphInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-end',

    },

    bargraphTextBarContainer: {
        alignItems: 'center',
        width: 100,

    },

    
    bargraphBar1: {
        width: 60,
        height: 99,
        backgroundColor: '#99CEA8',
        borderWidth: 4,
        borderColor: '#438856' 

    },

    bargraphBar2: {
        width: 60,
        height: 216,
        backgroundColor: '#99CEA8',
        borderWidth: 4,
        borderColor: '#438856' 

    },

    bargraphBar3: {
        width: 60,
        height: 152,
        backgroundColor: '#99CEA8',
        borderWidth: 4,
        borderColor: '#438856' 

    },

    bargraphLabel: {
        color: colours.black,
        ...fonts.SmallRegular,
        textAlign: 'center',
        flex: 1,
    }
    
});

export default BarGraph;