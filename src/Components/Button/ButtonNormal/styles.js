import {ScaledSheet} from 'react-native-size-matters';
import {Colors} from '../../../Theme/colors';
import {Sizes} from '../../../Theme/sizes';
export const styles = ScaledSheet.create({
  mContainer: {
    height: '42@vs',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '24@vs',
    borderColor: Colors.Black,
    borderWidth: '1@s',
    borderRadius: '25@vs',
    backgroundColor: Colors.Black,
  },
  mTextButton: {
    fontSize: Sizes.size_18,
    fontWeight: '500',
    fontStyle: 'italic',
    color: Colors.White,
  },
});
