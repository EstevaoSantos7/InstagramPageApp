import React from "react";
import {Text, StyleSheet} from "react-native"

export default function Strong({ children, style }) {
    return(
        <Text style={[styles.strong, style]}>
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({
    strong: {
        fontWeight: "bold"
    }
})