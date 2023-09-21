import { React, useState } from "react";
import { Text, View, Pressable } from "react-native";
import styles from "../styles/styles";

export default function Radiobutton({ options, onPress }) {
    // State variable for value of selected radio button
    const [value, setValue] = useState(null);

    function handlePress(selected) {
        setValue(selected);
        onPress(selected);
    }

    return (
        <>
            {
                options.map((item) => (
                    <View key={item.value} style={styles.buttonContaier}>
                        <Text style={styles.label}>{item.label}</Text>
                        <Pressable style={styles.circle} onPress={() => handlePress(item.value)}>
                            {value === item.value && <View style={styles.checkedCircle} />}
                        </Pressable>
                    </View>
                ))
            }
        </>
    )
};