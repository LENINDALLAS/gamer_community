import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { Icon } from '@rneui/themed';
import { useState } from "react";


function Footer(props) {

    const [message, setMessage] = useState("");

    return (
        <View style={styles.footerSection}>
            <TextInput style={styles.footer_input}
                placeholder="Write a message..." value={message}
                keyboardType="default" onChangeText={setMessage} />
            <TouchableOpacity onPress={() => alert("sendMessage")} style={styles.footer_icon}>
                <Icon
                    reverse={false}
                    name='send'
                    type='Ionicons'
                    color='#000000'
                    size={20}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    footerSection: {
        flex: .2,
        maxHeight: "10%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    footer_input: {
        height: "auto",
        margin: 12,
        // borderWidth: 1,
        backgroundColor: "#d9dedb",
        padding: 10,
        borderRadius: 5,
        width: "80%",
    },
    footer_icon: {
        backgroundColor: "#d9dedb",
        padding: 12,
        borderRadius: 5,
    }

});

export default Footer;