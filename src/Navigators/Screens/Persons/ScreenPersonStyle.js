import {ScaledSheet} from 'react-native-size-matters';
import {Sizes} from '../../../Theme/sizes';
import {Colors} from '../../../Theme/colors';
export const styles = ScaledSheet.create({
  dataTitleHeader: {
    fontSize: Sizes.size_24,
    fontStyle: 'italic',
    textAlign: 'center',
    // marginTop: '16@vs',
    color: Colors.Black,
    fontWeight: '400',
  },
  dataTitleBody: {
    fontSize: Sizes.size_17,
    fontStyle: 'italic',
    textAlign: 'center',
    color: Colors.Gray41,
    marginBottom: '24@vs',
  },
  btnCart: {
    height: Sizes.size_50,
    position: 'absolute',
    backgroundColor: Colors.Gray11,
    bottom: Sizes.size_0,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.5,
  },
  Exit: {
    fontSize: Sizes.size_24,
    fontStyle: 'italic',
    textAlign: 'center',
    color: Colors.White,
  },
});
