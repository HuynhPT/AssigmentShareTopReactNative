import {ScaledSheet} from 'react-native-size-matters';
import {Colors} from '../../../../../Theme/colors';
import {Sizes} from '../../../../../Theme/sizes';
export const styles = ScaledSheet.create({
  mViewTitle: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  mContainer: {
    marginTop: '24@vs',
    height: '150@vs',
    flexDirection: 'row',
    backgroundColor: Colors.white_bg,
    borderTopRightRadius: Sizes.size_30,
    borderBottomRightRadius: Sizes.size_30,
    marginRight: '16@s',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation:Sizes.size_10
  },
  mPrice: {
    color: Colors.Gray61,
    fontWeight: 'bold',
    fontSize: Sizes.size_16,
    fontStyle: 'italic',
    textDecorationLine: 'line-through',
    textAlign: 'center',
  },
  mPriceSale: {
    color: Colors.Gray31,
    fontWeight: 'bold',
    fontSize: Sizes.size_16,
    fontStyle: 'italic',
    textAlign: 'center',
    marginLeft: '16@s',
  },
  mTitle: {
    width: Sizes.size_200,
    color: Colors.Black,
    fontWeight: '400',
    fontSize: Sizes.size_16,
    fontStyle: 'italic',
    // textAlign: 'center',
  },
  titleSale: {
    color: Colors.White,
    fontWeight: 'bold',
    fontSize: Sizes.size_20,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  mText: {
    marginRight: '12@s',
    marginTop: '12@vs',
  },
  mImage: {
    marginLeft: '12@s',
  },
  image: {
    width: Sizes.size_140,
    height: Sizes.size_140,
  },
  sales: {
    width: Sizes.size_60,
    height: Sizes.size_50,
    backgroundColor: Colors.ORANGE_RED,
    borderTopLeftRadius: Sizes.size_8,
    borderBottomLeftRadius: Sizes.size_8,
  },
});
