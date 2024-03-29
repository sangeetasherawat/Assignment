import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native';

import GifItem from '../../components/gifItem';

import Searchbar from '../../components/searchBar';
import ListFooter from '../../components/listFooter';

import NoResultView from '../../components/noResultView';
import styles from './style';
import { IGifData, IPaginationData } from '../../store/home/type';
import { connect, useDispatch } from 'react-redux';
import { getGifList } from '../../store/home/action';
import IAppState from '../../store/common/state';
import { debounceSearch } from '../../utils/debounceUtil';

export interface GIFListProps {
    data: Array<IGifData>;
    pagination: IPaginationData;
    showLoader: boolean;

}

const GIFList: React.FC<GIFListProps> = props => {
    const dispatch = useDispatch();
    const [pageSize, setPageSize] = useState(10);
    const [searchTerm, setSearchTerm] = useState('gif');

    const onLoadmore = (size: number) => {
        setPageSize(size);
    }
    useEffect(() => {
        callDebounceFunc();

    }, [searchTerm,pageSize]);

    const fetchGifList = () => {
        var payloaddata = {
            q: searchTerm,
            limit: pageSize,
        };
        dispatch(getGifList(payloaddata))
    }
    const callDebounceFunc = debounceSearch(fetchGifList, 1000);
    
    return (
        <View style={styles.container}>
            <Searchbar searchTerm={searchTerm} onSearch={(value) => setSearchTerm(value)} />
            {props.showLoader ? <ActivityIndicator size='small' /> : null}
            <View
                style={styles.childView}>
                {props.data.length !== 0 ? <Text
                    style={styles.count_text}>
                    Showing{' '}
                    {props.data.length !== 0
                        ? props.data.length
                        : null}{' '}
                    of {props.pagination.total_count} products
                </Text> : null}

                {props.data && props.data.length != 0 ? <FlatList
                    data={
                        props.data
                    }
                    keyExtractor={item => item.id}
                    style={styles.list_style}

                    nestedScrollEnabled={
                        true
                    }
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return (
                            <GifItem name={item.title} sourceUrl={item.images?.original.url} />
                        );
                    }}
                    ListFooterComponent={({ item, index }) => {
                        //Footer View with Load More button
                        return props.data.length <
                            props.pagination.total_count ? (
                            <ListFooter onLoad={() => onLoadmore(
                                props.data.length <
                                    props.pagination.total_count
                                    ? props.data
                                        .length + 10
                                    : props.pagination
                                        .total_count,
                            )} />
                        ) : null
                    }}
                /> : <NoResultView />}


            </View>
        </View>
    );
}

const mapStateToProps=(state:IAppState)=>
{
    console.log('gif state list data',state.gifListState);
    return{
        data:state.gifListState.data,
        pagination:state.gifListState.pagination,
        showLoader:state.gifListState.showLoader
    }

}

const mapDispatchToProps = (dispatch: any) => {
	return {

	}
}

export default connect(mapStateToProps,mapDispatchToProps)(GIFList);