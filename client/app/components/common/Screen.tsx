import React, {ReactNode} from 'react'
import {StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fbe8a3',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16
    }
});

interface Props {
    children: ReactNode;
}

const Screen = (props: Props) => {
    return (
        <View style={styles.container}>{props.children}</View>
    )
};

export {Screen}