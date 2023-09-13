import { View, TouchableOpacity, Text, StyleSheet, Image, TextInput } from 'react-native';
import { Icon } from '@rneui/themed';
import { useEffect, useState } from 'react';
import Header from "../components/HeaderSection";
import { addFlagPost, getChats } from "../redux/actions/chatAction";

function FlagMySpot(props) {


    const [slot, setSlot] = useState("");
    const [message, setMessage] = useState("");
    const [user, setuser] = useState("Jyotsana");
    const [team, setTeam] = useState("Fighters Gamers");

    const handleSendMessage = () => {
        if(!slot || !message || !user || !team) {
            alert("Please fill all input fields to proceed.");
            console.log("invalid", {slot, message, user, team});
            return;
        }
        addFlagPost({ slot, message, user, team });
        props.navigation.navigate('general');
    }

    return (
        <View style={styles.flagContainer}>
            <Header navigation={props.navigation} type={"chat"} />
            <View style={styles.flagCard} >
                <View style={styles.flag_title}>
                    <Text style={styles.flag_title_text} >Flag My Spot</Text>
                </View>
                <View style={styles.flagTeamHeader} >
                    <Image
                        style={styles.flagTeamLogo}
                        source={require("../../assets/team.png")}
                    />
                    <Text style={styles.flagTeamHeader_text} >Fighters Gamers</Text>

                </View>

                <View style={styles.flagContainer_input_container} >
                    <Text style={styles.flagContainer_input_heading}>Enter your slot number</Text>
                    <TextInput style={styles.flagContainer_input}
                        placeholder="Enter your slot number" value={slot}
                        keyboardType="numeric" onChangeText={setSlot} />
                </View>
                <View style={styles.flagContainer_input_container} >
                    <Text style={styles.flagContainer_input_heading}>Message</Text>
                    <TextInput
                        style={styles.flagContainer_input}
                        placeholder="Write about your issue" value={message}
                        keyboardType="default" onChangeText={setMessage}
                        multiline={true}
                        numberOfLines={4} />
                </View>
                <TouchableOpacity style={styles.flagContainer_button} onPress={() => handleSendMessage()}>
                    <Text style={styles.flagContainer_input_heading} >Send Message</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    flagContainer: {
        flex: 1,
        // justifyContent: "space-between",
    },
    flagCard: {
        flex: .9,
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    flag_title: {
        width: "100%",
        backgroundColor: "#d9dedb",
        alignItems: "center",
        padding: 15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    },
    flag_title_text: {
        fontSize: 20,
        color: "#21853a"
    },
    flagTeamLogo: {
        width: 50,
        height: 50,
        margin: 20
    },
    flagTeamHeader: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "90%",
        backgroundColor: "#d9dedb",
        borderRadius: 10
    },
    flagTeamHeader_text: {
        fontWeight: "bold",
        fontSize: 16,
    },
    flagContainer_input_container: {
        width: "90%",
    },
    flagContainer_input: {
        height: "auto",
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 3,
        borderColor: "#e6e0df"
    },
    flagContainer_input_heading: {
        padding: 5,
        fontWeight: "bold",
        fontSize: 16,
    },
    flagContainer_button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 100,
        borderRadius: 20,
        elevation: 3,
        backgroundColor: "#bd4c2a"
    }

})

export default FlagMySpot;