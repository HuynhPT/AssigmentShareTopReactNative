import {ScaledSheet} from 'react-native-size-matters';
import {Colors} from '../../../Theme/colors';
import {Sizes} from '../../../Theme/sizes';
export const styles = ScaledSheet.create({
  mContainer: {
    flex: 1,
  },
  mFlatlist: {
    flex: 1,
    backgroundColor: Colors.Gray91,
  },
  mViewContainIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '16@s',
  },
  ViewIcon: {
    width: Sizes.size_80,
    height: Sizes.size_40,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: Colors.white_bg,
    borderRadius: Sizes.size_20,
  },
  mImageIcon: {
    width: Sizes.size_30,
    height: Sizes.size_30,
  },
  mTitleIcon:{
    fontSize:Sizes.size_14,
    fontStyle:'italic',
    fontWeight:'500', 
    color:Colors.Black
  }
});
