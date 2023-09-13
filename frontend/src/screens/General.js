import { View, TouchableOpacity, Text, StyleSheet, Image, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Header from "../components/HeaderSection";
import Footer from '../components/FooterSection';
import ToggleChat from '../components/ToggleChat';
import { useEffect, useState } from 'react';
import { getChats } from "../redux/actions/chatAction";

function General(props) {

    const dispatch = useDispatch();

    const { chat } = useSelector(reducer => reducer.transaction);

    const [conversation, setConversation] = useState([]);

    useEffect(() => {
        dispatch(getChats());
    }, [])

    useEffect(() => {
        setConversation(chat);
    }, [chat])
    
    console.log("being called", chat);
    console.log("conversation", conversation);
    return (
        <View style={styles.generalContainer}>
            <Header navigation={props.navigation} type={"group"} />
            <ToggleChat />
            <View style={styles.chatSection} >
                {
                    conversation && conversation.length > 0 &&
                    conversation.filter((chat) => chat.chatType === 'flagged').reverse().map((chat, idx) => {
                        const flagPost = chat.message.split("/");
                        const team = flagPost[0];
                        const slot = flagPost[1];
                        const message = flagPost[2];

                        return (
                            <View style={styles.chat_split} key={idx}>
                                <Image
                                    style={styles.flagTeamLogo}
                                    source={require("../../assets/avatar.png")}
                                />
                                <View style={styles.chat_split_container}>
                                    <Text style={styles.text_h2}>{chat.owner}</Text>
                                    <View style={styles.chat}>
                                        <View style={styles.chat_tag}>
                                            <Text style={styles.text_h2_w}>Flagged Spot</Text>
                                        </View>
                                        <View style={styles.chat_message}>
                                            <Text style={styles.text_p1}>Team Name:
                                                <Text style={styles.text_p2}> {team}
                                                </Text>
                                            </Text>
                                            <Text style={styles.text_p1}>Slot No:
                                                <Text style={styles.text_p2}> {slot}

                                                </Text>
                                            </Text>
                                            <Text style={styles.text_p1}>Message:
                                                <Text style={styles.text_p2}> {message}
                                                </Text>
                                            </Text>

                                        </View>

                                    </View>
                                </View>
                            </View>
                        )
                    })
                }

            </View>
            <Footer />
        </View>
    )
}

const styles = StyleSheet.create({
    generalContainer: {
        flex: 1,
    },
    chatSection: {
        flex: .8,
        display: "flex",
        flexDirection: "column-reverse",
    },
    chat: {
        maxWidth: "75%",
        borderRadius: 10,
        backgroundColor: "#d9dedb",
        padding: 10,
    },
    chat_split: {
        display: "flex",
        flexDirection: "row"
    },
    chat_split_container: {
        display: "flex",
        flexDirection: "column"
    },
    chat_tag: {
        borderRadius: 20,
        backgroundColor: "#2b7d1e",
        display: "inline",
        maxWidth: "55%",
        padding: 3,
        alignItems: "center",
    },
    text_h2: {
        fontWeight: "500",
        fontSize: 13
    },
    text_h2_w: {
        color: "#FFFFFF",
        fontWeight: "500",
        fontSize: 11
    },
    chat_message: {
        display: 'flex',
        flexDirection: 'column',
        padding: "5px",
    },
    text_p1: {
        fontWeight: "400",
        fontSize: 16,
    },
    text_p2: {
        fontWeight: "400",
        fontSize: 13
    },
    flagTeamLogo: {
        width: 40,
        height: 40,
        marginRight: 20,
        borderRadius: 10
    }
})

export default General;