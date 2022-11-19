import {ScaledSheet} from 'react-native-size-matters';
import {Colors} from '../../Theme/colors';
import { Sizes } from '../../Theme/sizes';
export const styles = ScaledSheet.create({
  mInputContainer: {
    height: '48@vs',
    justifyContent: 'center',
    borderBottomWidth: '1@s',
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal: '12@s',
  },
  mInput: {
    width: '100%',
    height: '100%',
    marginLeft:'12@s',
    fontStyle:'italic',
    fontSize:Sizes.size_16
  },
  mInPutAlert:{
    fontStyle:'italic',
    fontSize:Sizes.size_14,
    marginTop:'8@vs'
  }
});
