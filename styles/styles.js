import { StyleSheet } from "react-native"

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingTop: 50,
    },

    buttonContaier: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        width: "100%",
        paddingLeft: 30,
        paddingRight: 30,
        marginBottom: 30,
    },
    label: {
        marginRight: 10,
    },
    circle: {
        height: 28,
        width: 28,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#000",
        alignItems: "center",
        justifyContent: "center",
    },
    checkedCircle: {
        width: 15,
        height: 15,
        borderRadius: 7,
        backgroundColor: "#000",
    },
    resultText: {
        alignSelf: "center"
    }
});