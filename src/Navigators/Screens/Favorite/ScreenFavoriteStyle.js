import {ScaledSheet} from 'react-native-size-matters';
import {Sizes} from '../../../Theme/sizes';
import {Colors} from '../../../Theme/colors';
export const styles = ScaledSheet.create({
  mContainer: {
    flex: Sizes.size_1,
    backgroundColor: Colors.Gray91,
  },
  mContainerItem: {
    width: Sizes.size_170,
    height: Sizes.size_170,
    backgroundColor: Colors.white_bg,
    margin: Sizes.size_20,
    alignItems: 'center',
    elevation: Sizes.size_10,
    borderRadius: Sizes.size_20,
  },
  mIcon: {
    position: 'absolute',
    zIndex: Sizes.size_1,
    right: Sizes.size_10,
    top: Sizes.size_10,
  },
  image: {
    width: Sizes.size_100,
    height: Sizes.size_100,
  },
  mText: {
    fontSize: Sizes.size_16,
    width: Sizes.size_150,
    textAlign: 'center',
    marginBottom: '5@vs',
    color: Colors.Black,
    fontStyle: '500',
  },
});
