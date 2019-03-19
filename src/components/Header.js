import { Text, View, StyleSheet } from 'react-native';
import React from 'react';

const Header = (props) => {

     return (
          <View style={styles.viewStyle}>
               <Text style={styles.textStyle}>{
                    props.headerText
               }
                </Text>
          </View>
     );
};

const styles = {
     viewStyle: {
          backgroundColor: '#f0f0f0',
          justifyContent: 'center',
          alignItems: 'center',
          height: 60,
          paddigngTop: 15,
          shadowColor: '#000000',
          shadowOffset: { width: 0, height: 12 },
          shadowOpacity: 1.0
     },
     textStyle: {
          fontSize: 20,
          color: '#000000'
     }
}

export { Header};
