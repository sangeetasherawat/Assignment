import React from 'react';
import { View, Text, Image } from 'react-native';
import { CardItem, Card } from 'native-base';
import styles from '../containers/home/style';


export interface GifProps {
	sourceUrl: any;
	name: string;

}

const GifItem: React.FC<GifProps> = (props) => {

	return (
		<Card transparent style={styles.cardStyle}>
			<CardItem
				style={styles.card_item}
			>
				<View style={styles.gifList_view}>

					<Image
						resizeMode="contain"
						style={styles.cardImage}
						source={{ uri: props.sourceUrl }}

					/>

					<Text numberOfLines={2} style={styles.gif_title} >
						{props.name}
					</Text>

				</View>
			</CardItem>
		</Card>
	);

}

export default GifItem;
