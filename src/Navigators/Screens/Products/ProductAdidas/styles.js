import {ScaledSheet} from 'react-native-size-matters';
import {Colors} from '../../../../Theme/colors';
import {Sizes} from '../../../../Theme/sizes';
export const styles = ScaledSheet.create({
  mContainer: {
    height: Sizes.size_120,
    backgroundColor: Colors.white_bg,
    marginHorizontal: '16@s',
    marginVertical: '12@vs',
    borderRadius: '30@s',
  },
  mBody: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '16@s',
  },
  mViewText: {
    marginTop: '12@vs',
    marginLeft: '12@s',
  },
  mImage: {
    width: Sizes.size_100,
    height: Sizes.size_100,
    borderRadius: Sizes.size_20,
  },
  mTextImage: {
    maxWidth: Sizes.size_200,
    fontSize: Sizes.size_18,
    color: Colors.Black,
    fontStyle: 'italic',
    fontWeight: '500',
  },
  mPrice: {
    fontSize: Sizes.size_16,
    fontStyle: 'italic',
    color: Colors.Gray41,
    fontWeight: '600',
  },
  mSize: {
    margin: Sizes.size_3,
    width: Sizes.size_20,
    height: Sizes.size_20,
    borderColor: Colors.Gray71,
    borderWidth: Sizes.size_1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Sizes.size_5,
  },
  mTextSize: {
    fontSize: Sizes.size_12,
    fontStyle: 'italic',
    fontWeight: '500',
    color: Colors.Black,
  },
});
