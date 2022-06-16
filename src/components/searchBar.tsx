import React from 'react';
import { View,TouchableOpacity } from 'react-native';
import { Icon,Header, Item, Input } from 'native-base';
import { Platform } from 'react-native';
import styles from '../containers/home/style';

export interface SearchProps {
    searchTerm: any;
    onSearch: (text: string) => void;

}

const Searchbar: React.FC<SearchProps> = (props) => {

    return (
        <View>
            <Header
                searchBar
                rounded
                androidStatusBarColor="transparent"
                transparent
                style={styles.header_style}>
                <Item
                    style={styles.header_item}>
                    <Icon
                        style={styles.search_icon}
                        name="ios-search"
                    />
                    <Input
                        placeholder="Search gif here..."
                        placeholderTextColor="#AAAAAA"
                        style={styles.search_text}

                        clearButtonMode="always"
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={text =>
                            props.onSearch(text)
                        }

                        value={props.searchTerm}
                    />
                    {props.searchTerm !== '' && Platform.OS!=='ios' ? (
                        <TouchableOpacity
                            onPress={() => props.onSearch('')}
                            style={styles.clearSearch}>
                           
                                <Icon
                                   color='white'
                                    name="ios-close"
                                    style={styles.close_icon}
                                />
                          
                        </TouchableOpacity>) : null}


                </Item>
            </Header>
        </View>
    );

}

export default Searchbar;
