import {Dimensions} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {Colors} from '../../Theme/colors';
import {Sizes} from '../../Theme/sizes';
export const styles = ScaledSheet.create({
  mContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.Opacity,
    zIndex: 1,
    position: 'absolute',
    justifyContent:'center',
    alignItems:'center'
  },
  mLoading:{
    width:Sizes.size_150,
    height:Sizes.size_150
  }
});
