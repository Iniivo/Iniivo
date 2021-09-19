import React from 'react';
import { StyleSheet, View, Text, ScrollView} from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import Screen from '../components/misc/Screen';

import colours from '../themes/colours';
import fonts from '../themes/fonts';

import BarGraph from '../components/barGraph';
import BtnSmall from '../components/atoms/Buttons/BtnSmall';
import BasicInput from '../components/atoms/Inputs/BasicInput';

const data = {
    announcementTitle: 'Garage Light Destroyed',
    announcementTime: 'Date.now',
    realtorName: 'Adam Mulugeta',
    houseAddress: '330 Bobolink Ridge',
    rennovationsCosts: '94k',
    selliingPrice: '120k',
    profit: '26k',
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet proin fermentum leo vel orci porta non pulvinar neque. Viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas. Blandit aliquam etiam erat velit scelerisque in dictum non. Volutpat blandit aliquam etiam erat velit scelerisque in dictum non. Sociis natoque penatibus et magnis dis parturient. Ullamcorper dignissim cras tincidunt lobortis. Sed elementum tempus egestas sed sed risus pretium quam. Tempor id eu nisl nunc mi ipsum faucibus. Faucibus in ornare quam viverra orci sagittis eu volutpat odio. Pharetra convallis posuere morbi leo urna molestie. Gravida in fermentum et sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet proin fermentum leo vel orci porta non pulvinar neque. Viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas. Blandit aliquam etiam erat velit scelerisque in dictum non. Volutpat blandit aliquam etiam erat velit scelerisque in dictum non.",
    questionsNumber: "88 Questions",
    questionPrompt: 'Write as {FIRST_NAME} {LAST NAME}...',
    questionPostedTime: 'date.now',
    question: "I was wondering if there was air conditioning avalible inside the house, if there isn't your house is bad",
    question2: 'Why did mathias break the light',
    question3: 'R u dumb?',
    userName1: 'Mathias',
    userName2: 'Adam Mulugeta',
    userName3: 'IcyLilPesh'
};



const ViewAnnouncementPage = () => {
    return (
        <Screen variant={false}>
            <View style={styles.container}>
                <ScrollView>
                    <Text numberOfLines={1} style={styles.title}> {data.announcementTitle} </Text>
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
                    <Text style={styles.toAllInvestors}> To all investors:</Text>
                    <Text style={styles.message}>{data.message.substring(0,1200)}</Text>
                    <View style={styles.messageDivider}/>

{/*I added a barGraph component so it is easier to change the graph to something that can vary depending on the data.
The bargraph on this page is static, I'm not sure how to make it so that the height of the bars and labels can change.  */}

                    <BarGraph/>
                    <Text style={{marginTop: 59, marginBottom: 29, fontFamily: 'DMSans', fontStyle: 'normal', fontWeight: 'normal', fontSize: 23, lineHeight: 30}}>{data.questionsNumber}</Text>
                    <View style={{marginBottom:15}}>

{/* There was no input that was formated like on the wireframe, so i just used BasicInput */}

                        <BasicInput 
                        placeholder="Ask the realtor a question"/>
                        <View style={{height: 2, backgroundColor: colours.grey}}/>
                        </View>
                    <View style={styles.buttonContainer}>
                        <BtnSmall text='Send'/>
                        </View>
                    <View style={styles.questionContainer}>
                        <View style={styles.smallPfp}/>
                        <View style={{flexDirection: 'column', marginBottom: 35}}>
                        <View style={{flexDirection: 'row', marginBottom: 9}}>
                            <Text style={{...fonts.SmallBold, color: colours.black}}> {data.userName1}</Text>
                            <Text style={{...fonts.SmallRegular, color: colours.grey}}> {data.questionPostedTime} </Text>  
                            </View>
{/* Text gets cut off for some reason */}
                        <Text style={{...fonts.SmallRegular, color: colours.black}}> {data.question}</Text>
                        </View>             
                            </View>


                    <View style={styles.questionContainer}>
                        <View style={styles.smallPfp}/>
                        <View style={{flexDirection: 'column', marginBottom: 35}}>
                        <View style={{flexDirection: 'row', marginBottom: 9}}>
                            <Text style={{...fonts.SmallBold, color: colours.black}}> {data.userName2}</Text>
                            <Text style={{...fonts.SmallRegular, color: colours.grey}}> {data.questionPostedTime} </Text>  
                            </View>
{/* Text gets cut off for some reason*/}
                        <Text style={{...fonts.SmallRegular, color: colours.black}}> {data.question2}</Text>
                        </View> 
                            </View>

                    <View style={styles.questionContainer}>
                        <View style={styles.smallPfp}/>
                        <View style={{flexDirection: 'column', marginBottom: 35}}>
                        <View style={{flexDirection: 'row', marginBottom: 9}}>
                            <Text style={{...fonts.SmallBold, color: colours.black}}> {data.userName3}</Text>
                            <Text style={{...fonts.SmallRegular, color: colours.grey}}> {data.questionPostedTime} </Text>  
                            </View>
{/* Text gets cut off for some reason*/}
                        <Text style={{...fonts.SmallRegular, color: colours.black}}> {data.question3}</Text>
                        </View>
                            </View>
                    
                  
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
        textAlign: 'justify'
    },

    time: {
        color: '#C9C5C5',
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
        backgroundColor: colours.black,
        marginBottom: 17
    },

    questionDivider: {
        width: 375,
        height: 2,
        backgroundColor: colours.grey,
        marginBottom: 17
    },

    toAllInvestors: {
        color: colours.black,
        ...fonts.SmallRegular,
        marginBottom: 24
    },
    
    message: {
        color: colours.black,
        ...fonts.SmallRegular,
        marginBottom: 28,
    },

    buttonContainer: {
        alignItems: 'flex-end',
        marginBottom: 32
    },

    smallPfp: {
        width: 40,
        height: 40,
        borderRadius: 60 / 2,
        backgroundColor: '#C4C4C4',
        marginRight: 13.57

    },

    questionContainer: {
        flexDirection: 'row',

    },









});

export default ViewAnnouncementPage;