import React, {useContext, useMemo} from 'react'
import {useFormikContext} from 'formik';
import {Input, InputProps} from 'react-native-elements';
import {View} from 'react-native';
import {CustomThemeContext} from '../../theme/CustomThemeContext';

interface Props extends InputProps{
    name: string;
}

export const FormikInput = (props: Props) => {
    const {name, placeholder, ...rest} = props;

    const {theme} = useContext(CustomThemeContext);
    const {handleBlur, handleChange, values, errors} = useFormikContext<{[key: string]: any}>();

    const error = useMemo(() => errors[name], [errors])
    return(
        <View>
        <Input
            placeholder={placeholder}
            value={values[name]}
            onBlur={handleBlur(name)}
            onChangeText={handleChange(name)}
            errorMessage={error ? `${error}` : undefined}
            errorStyle={{color: theme.colors.error}}
            {...rest}
        />
        </View>
    )
}