import axios from "axios";
import { flagPostResponse, storedData } from "../slice/addSlice"

const url = "https://lemon-windows-matter.loca.lt/api/v1/chat";

export const addFlagPost = async (flagData) => {
    try {
        const message = `${flagData.team}/${flagData.slot}/${flagData.message}`;

        const data = {
            message,
            owner: flagData.user,
            "chatType": "flagged",
        }

        const response = await axios.post(url, data);
        console.log('====================================');
        console.log(response.data);
        console.log('====================================');
        return;
    } catch (error) {
        console.log('====================================');
        console.log("error", error);
        console.log('====================================');
        return;
    }
}

export const getChats = () => async (dispatch) => {
    try {
        const chats = await axios.get(url);
        console.log("getChatsSuccessful")
        dispatch(storedData(chats.data));
        return;
    } catch (error) {
        console.error(error);
        return;
    }
}

