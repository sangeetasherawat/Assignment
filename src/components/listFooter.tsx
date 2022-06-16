import React from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import styles from '../containers/home/style';

export interface FooterProps {
    onLoad: () => void;
}

const ListFooter: React.FC<FooterProps> = (props) => {


    return (
        <View style={styles.footer}>
            <TouchableOpacity

                style={styles.btnLoadmore}

                onPress={() => {
                    props.onLoad()
                }}>
                <Text style={styles.btnText}
                >
                    Load More
                </Text>
            </TouchableOpacity>
        </View>
    );

}

export default ListFooter;
