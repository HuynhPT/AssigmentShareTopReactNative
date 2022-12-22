import {ScaledSheet} from 'react-native-size-matters';
import {Sizes} from '../../../Theme/sizes';
import {Colors} from '../../../Theme/colors';
export const styles = ScaledSheet.create({
  mContainer: {
    flex: Sizes.size_1,
    backgroundColor: Colors.Gray91,
  },
  mIcon: {
    position: 'absolute',
    zIndex: Sizes.size_1,
    right: Sizes.size_10,
    top: Sizes.size_10,
  },
  mItemContainer: {
    width: '90%',
    backgroundColor: Colors.White,
    margin: '16@s',
    overflow: 'hidden',
    borderRadius: Sizes.size_20,
  },
  mViewText: {
    width: Sizes.size_200,
  },
  mImage: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: '24@s',
  },
  mVSizeColor: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '24@s',
    marginVertical: '10@vs',
  },
  mTextName: {
    fontSize: Sizes.size_18,
    color: Colors.Black,
    fontStyle: 'italic',
    fontWeight: '600',
  },
  mPrice: {
    fontSize: Sizes.size_16,
    color: Colors.Gray41,
    fontStyle: 'italic',
    fontWeight: '500',
  },
  mSize:{
    fontSize: Sizes.size_14,
    color: Colors.Gray31,
    fontStyle: 'italic',
    fontWeight: '400',
  }
});
