import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Icon } from '@rneui/themed';
import { useEffect, useState } from 'react';
import TabNavigator from "../components/TabNavigator";
import Header from "../components/HeaderSection";
import Footer from "../components/FooterSection";
import Toggle from "../components/ToggleChat";

function Chat(props) {

    return (
        <View style={styles.chatContainer}>
            <Header navigation={props.navigation} type={"chat"}/>
            <Toggle/>
            <View style={styles.chatSection} >
                <Text>Chat section</Text>
            </View>
            <TabNavigator navigation={props.navigation} selectedTab={1} />
            <Footer/>
        </View>
    )
}

const styles = StyleSheet.create({
    chatContainer: {
        flex: 1,
        justifyContent: "space-between",
    },
    chatSection: {
        flex: .2,
    }

})

export default Chat;