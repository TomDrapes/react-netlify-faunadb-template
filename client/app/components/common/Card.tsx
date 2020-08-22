import React, {ReactNode} from 'react'
import {StyleSheet} from 'react-native';
import {Card, CardProps} from 'react-native-elements'

const styles = StyleSheet.create({
    card: {
        borderRadius: 8,
        padding: 16,
        width: '100%',
    }
});

interface Props extends CardProps{
    children: ReactNode;
}

const ECard = (props: Props) => {
    const {children, ...rest} = props;
    return (
        <Card containerStyle={{
            borderRadius: 8,
            padding: 16,
            width: '100%',
        }} {...rest}>{children}</Card>
    )
};

export {ECard}