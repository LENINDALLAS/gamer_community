// import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from '@rneui/themed';

function TabNavigator(props) {

    //  const [selectedTab, setSelectedTab] = useState(props.selectedTab);

    // console.log("rendered", selectedTab)

    return (
        < View style={[styles.container, styles.shadowProp] } >

            <View style={styles.button}>
                <TouchableOpacity onPress={() => props.navigation.navigate('homepage')}>
                    <Icon
                        reverse={false}
                        name='insert-photo'
                        type='MaterialIcons'
                        color='#7c2bda'
                        size={20}
                    />
                </TouchableOpacity>
                <Text style={styles.tabFont}>Photos</Text>
            </View>
            <View style={styles.button}>
                <TouchableOpacity onPress={() => props.navigation.navigate('statistics')}>
                    <Icon
                        reverse={false}
                        name='videocam'
                        type='Ionicons'
                        color='#f24822'
                        size={20}
                    />
                </TouchableOpacity>
                <Text style={styles.tabFont}>Video</Text>
            </View>
            <View style={styles.button}>
                <TouchableOpacity onPress={() => props.navigation.navigate('add')}>
                    <Icon
                        reverse={false}
                        name='multitrack-audio'
                        type='MaterialIcons'
                        color='#bd2915'
                        size={20}
                    />
                </TouchableOpacity>
                <Text style={styles.tabFont}>Audio</Text>
            </View>
            <View style={styles.button}>
                <TouchableOpacity onPress={() => props.navigation.navigate('flagMySpot')}>
                    <Icon
                        reverse={false}
                        name='flag'
                        type='Ionicons'
                        color='#007be5'
                        size={20}
                    />
                </TouchableOpacity>
                <Text style={styles.tabFont}>Flag My Spot</Text>
            </View>

        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: .2,
        display: 'flex',
        flexDirection: 'row',
        // backgroundColor: 'grey',
        bottom: 0,
        // width: "auto",
        maxHeight: "10%",
        backgroundColor: 'white',
        borderRadius: 8,
        paddingVertical: 5,
        paddingHorizontal: 25,
        width: '100%',
        marginVertical: 10,
    },
    button: {
        padding: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    tabFont: {
        fontSize: 10,
        fontWeight: 'bold'
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    }
})


export default TabNavigator;