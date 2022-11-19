import {ScaledSheet} from 'react-native-size-matters';
import {Colors} from '../../../Theme/colors';
import {Sizes} from '../../../Theme/sizes';
export const styles = ScaledSheet.create({
  mContainer: {
    width:'45%',
    height: '42@vs',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: '24@vs',
    borderWidth: '1@s',
    borderRadius: '25@vs',
    flexDirection:'row'
  },
  mTextButton: {
    fontSize: Sizes.size_18,
    fontWeight: '500',
    fontStyle: 'italic',
  },
});
