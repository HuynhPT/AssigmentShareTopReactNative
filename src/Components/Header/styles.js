import {ScaledSheet} from 'react-native-size-matters';
import {Colors} from '../../Theme/colors';
import {Sizes} from '../../Theme/sizes';

export const styles = ScaledSheet.create({
  mContainer: {
    flex: 0.15,
    backgroundColor: Colors.Gray91,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  mContainers: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: Sizes.size_30,
    borderBottomRightRadius: Sizes.size_30,
    backgroundColor: Colors.Black,
    justifyContent: 'flex-end',
    alignItems: 'center',
    zIndex: 1,
  },
  mBody: {
    width: '100%',
    marginBottom: '18@vs',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '16@s',
  },
  mText: {
    color: Colors.White,
    fontSize: Sizes.size_30,
    fontStyle: 'italic',
    fontWeight: '600',
  },
  mImage: {
    width: Sizes.size_32,
    height: Sizes.size_32,
  },
});
