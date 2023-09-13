import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Icon } from '@rneui/themed';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TabNavigator from "../components/TabNavigator";
import Header from "../components/HeaderSection";
import Footer from "../components/FooterSection";
import Toggle from "../components/ToggleChat";

import { getChats } from "../redux/actions/chatAction";

function Chat(props) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getChats());
    }, []);

    return (
        <View style={styles.chatContainer}>
            <Header navigation={props.navigation} type={"chat"} />
            <Toggle />
            <View style={styles.chatSection} >
                <Text>Chat section</Text>
            </View>
            <TabNavigator navigation={props.navigation} selectedTab={1} />
            <Footer />
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