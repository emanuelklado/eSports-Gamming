import React from 'react';
import { View, Text} from 'react-native';
import Props from '../../../interfaces/Props';

import { styles } from './styles';

export function Heading({title, subtitle, ...rest}: Props) {
  return (
    <View style={styles.container} {...rest}>
        <Text style={styles.title}>
            {title}
        </Text>
        <Text style={styles.subtitle}>
            {subtitle}
        </Text>
    </View>
  );
}