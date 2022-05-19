import { StyleSheet } from "react-native";
import { baseColors, ScreenSize } from "@constants";


export const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    background: {
        height: '100%',
        width: '100%'
    },
    topImage: {
        height: "95%",
        width: '95%'
    },
    topBox: {
        height: ScreenSize.HEIGHT * 0.16,
        width: '75%',
        backgroundColor: "hsla(240, 100%, 99%, 0.8)",
        marginVertical: '10%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    layer: {
        height: '100%',
        width: '100%',
        backgroundColor: 'hsla(0, 0%, 0%, 0.27)',
    },
    homeView: {
        borderBottomColor: baseColors.WhiteToned,
        borderBottomWidth: 0.5,
    },
    labelStyle: {
        color: baseColors.WhiteToned,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: ScreenSize.HEIGHT * 0.01,
        borderBottomColor: '#fff'
    },
    bottomDrawerSection: {
        marginBottom: 65,
        borderTopColor: '#fff',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});