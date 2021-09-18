import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import Screen from '../components/misc/Screen';

import colours from '../themes/colours';
import fonts from '../themes/fonts';

import BarGraph from '../components/barGraph';

const data = {
    announcementTitle: 'Garage Light Destroyed',
    announcementTime: 'Date.now',
    realtorName: 'Adam Mulugeta',
    houseAddress: '330 Bobolink Ridge',
    rennovationsCosts: 94,
    selliingPrice: 120,
    profit: 26
};



const ViewAnnouncementPage = () => {
    return (
        <Screen variant={false}>
            <View style={styles.container}>
                <ScrollView>
                    <Text style={styles.title}> {data.announcementTitle} </Text>
                    <Text style={styles.time}> {data.announcementTime}</Text>
                    <View style={styles.realtorContainer}>
                        <View style={styles.Pfp}/>
                        <View style={{flexDirection: 'column'}}>
                        <Text style={styles.realtorName}> {data.realtorName}</Text>
                        <Text style={styles.subtitle}> Realtor </Text>  
                        </View>
                    </View>
                    <View style={styles.houseAddressContainer}>
                    <Text style={styles.regardsText}> In regards to </Text>
                    <Text style={styles.houseAddress}> {data.houseAddress} </Text>
                    </View>
                    <Text style={styles.messageTitle}> Message </Text>
                    <View style={styles.messageDivider}/>
                    <Text style={styles.message}> This is the message (charcter limit should be applied)</Text>
                    <View style={styles.messageDivider}/>
                    <BarGraph bar1Data= {data.rennovationsCosts}/>

                        
                </ScrollView>

            </View>

        </Screen>

    );
};

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        height: '100%',
    
    },

    title: {
        color: colours.black,
        ...fonts.BigBold,
        marginBottom: 16,
    },

    time: {
        color: colours.light_grey,
        ...fonts.MedBold,
        marginBottom: 26,

    },

    realtorContainer: {
        flexDirection: 'row',
        marginBottom: 12

    },


    Pfp: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        backgroundColor: '#C4C4C4',
        marginRight: 13.57

    },

    realtorName: {
        color: colours.black,
        ...fonts.MedRegular,
        marginBottom: 6,
    },

    subtitle: {
        color: colours.primary,
        ...fonts.SmallMedium
    },

    houseAddressContainer: {
        flexDirection: 'row',
        marginBottom: 49
    },

    regardsText : {
        color: colours.black,
        ...fonts.MedBold
    },

    houseAddress: {
        color: colours.primary,
        ...fonts.MedBold 
    },

    messageTitle: {
        color: colours.black,
        ...fonts.MedBold,
        marginBottom: 17
    },

    messageDivider: {
        width: 375,
        height: 2,
        backgroundColor: colours.grey,
        marginBottom: 17
    },
    
    message: {
        color: colours.black,
        ...fonts.SmallRegular,
        marginBottom: 28,
    },









});

export default ViewAnnouncementPage;