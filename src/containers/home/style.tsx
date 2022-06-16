import { Platform, StyleSheet} from 'react-native';
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { RFPercentage as fp } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
		flex: 1,
		backgroundColor: 'white',
		paddingHorizontal: wp(2)
	},
    childView:
	{
		flexGrow: 1,
	},
    header_style:
	{
		marginTop:Platform.OS==='ios'?hp(1):0,
		width: wp('90%'),
		alignSelf: 'center',
	},
    header_item:
    {
        alignSelf: 'flex-start',
		borderRadius: 20
    },
    close_icon:
	{
		fontSize: fp(1.5),
		color: 'white',
	},
    gifList_view:
	{
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
    btnText: {
		color: '#4682B4',
		fontWeight: 'bold',
		textAlign: 'center',
		fontSize: hp(2.5)
	},
    txtNoData: {
		fontSize: fp(3),
		color: '#4f4f4f',
		width: '90%',
		textAlign: 'center'
	},
    noData_view:
	{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
    btnLoadmore: {

		width: wp('90%'),
		padding: 10,
		borderRadius: 4,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
    footer:{
        padding: 10,
        width: '100%',
		justifyContent: 'center',
		alignItems: 'center'
    },
    gif_title:
	{
		alignSelf: 'center',
		color: 'black',
		width: wp('40%')
	},
    cardImage:
    {
        width:wp('20%'),
        height:hp('10%')
    },
    card_item:
	{
		backgroundColor: 'transparent',
		justifyContent: 'center',
		width: wp('90%'),
		alignSelf: 'center',
		alignItems: 'flex-start',
	},
    cardStyle: {
		borderRadius: 15,
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: .3,
		shadowRadius: 3,
		backgroundColor: '#eaf6f8',
		width: wp(90),
		alignSelf: 'center',
		justifyContent: 'center',
		borderColor: 'transparent',
	},
    clearSearch:
	{
		backgroundColor: '#D5D5D5',
		height: 28,
		width: 28,
		borderRadius: 14,
		alignItems: 'center',
		justifyContent: 'center',
		marginHorizontal: hp(
			1.5,
		)
	},
    search_icon:
	{
		color: '#AAAAAA',
		fontSize: fp(2.5)
	},
	search_text:
	{
		fontSize: fp(2),
		color: '#4f4f4f'
	},
	count_text:
	{
		fontSize: hp(1.5),
		paddingHorizontal: wp(2),
		color: '#008B8B'
	},
    list_style:
	{
		marginRight: 5,
		flex: 1
	},
});

export default styles;