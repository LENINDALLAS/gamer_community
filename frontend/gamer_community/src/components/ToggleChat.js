import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { Icon } from '@rneui/themed';
import { useState } from "react";


function Toggle(props) {

    const [chatActive, setChatActive] = useState(true);

    const chatStyle = {
        borderBottomWidth: 3
    }

    return (
        <View style={styles.toggleContainer}>
            <TouchableOpacity onPress={() => setChatActive(true)} style={{ borderBottomWidth: chatActive ? 3 : 0 }}>
                <Text style={styles.text_h2}>Chats</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setChatActive(false)} style={{ borderBottomWidth: chatActive ? 0 : 3 }}>
                <Text style={styles.text_h2}>Queries</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    toggleContainer: {
        flex: .2,
        marginTop: 10,
        maxHeight: "8%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        // borderColor: 'black',
        // borderBottomWidth: 5
    },
    toggle_section: {
        borderColor: 'black',
        borderBottomWidth: 5,
    },
    text_h2: {
        fontWeight: "bold",
        fontSize: 15
    },
});

export default Toggle;