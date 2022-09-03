import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';
import { colores, styles } from '../theme/appTheme';

interface Props {
    iconName: string
}

export const TouchableIcon = ({ iconName }: Props) => {

    const { changeFavIcon } = useContext(AuthContext);

    return (
        <TouchableOpacity
            onPress={() => changeFavIcon(iconName)}
        >
            <Icon
                name={iconName}
                size={30}
                color={colores.primary} />
        </TouchableOpacity>
    )
}
