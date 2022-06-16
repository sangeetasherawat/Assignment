import React from 'react';
import { View, Text } from 'react-native';
import styles from '../containers/home/style';
import { NO_RESULT_MESSAGE } from '../utils/constants';

const NoResultView: React.FC = (props) => {

    return (
        <View style={styles.noData_view}>
            <Text
                
                style={styles.txtNoData}>
               {NO_RESULT_MESSAGE}
            </Text>
        </View>
    );

}

export default NoResultView;
