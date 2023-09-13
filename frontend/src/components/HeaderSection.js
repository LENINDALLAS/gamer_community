import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Icon } from '@rneui/themed';


function Header(props) {

    return (
        <View style={styles.headerSection}>

            <TouchableOpacity onPress={() => props.navigation.navigate('chat')} style={styles.backIcon}>
                <Icon
                    reverse={false}
                    name='arrow-back'
                    type='Ionicons'
                    color='#000000'
                    size={20}
                />
            </TouchableOpacity>
            {
                props.type === 'chat' ?
                    <View style={styles.headerSection_container}>
                        <Image
                            style={styles.flagTeamLogo}
                            source={require("../../assets/pubg.png")}
                        />
                        <View style={styles.headerTitle}>
                            <Text style={styles.headerTitleChild_text_h1}>Group 1</Text>
                            <Text style={styles.headerTitleChild_text_h3}>Survivor Series(s3)</Text>
                        </View>
                    </View> :
                    <View style={styles.headerTitle}>
                        <Text style={styles.headerTitleChild_text_h1}>#General Chats</Text>
                    </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    headerSection: {
        flex: .2,
        padding: 20,
        top: 15,
        borderColor: 'black',
        borderBottomWidth: 2,
        maxHeight: "15%",
        display: "flex",
        flexDirection: "row",
    },
    backIcon: {
        padding: 15,
        marginRight: 5
    },
    headerSection_container: {
        display: "flex",
        flexDirection: "row",
    },
    headerTitle: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
    },
    headerTitleChild: {
        paddingBottom: 5,
    },
    headerTitleChild_text_h1: {
        fontWeight: "bold",
        fontSize: 15
    },
    headerTitleChild_text_h3: {
        fontWeight: "600",
        fontSize: 12
    },
    flagTeamLogo: {
        width: 40,
        height: 40,
        marginRight: 20,
        marginTop: 15
    }
});

export default Header;