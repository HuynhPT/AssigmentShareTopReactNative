import {ScaledSheet} from 'react-native-size-matters';
import {Colors} from '../../../Theme/colors';
import {Sizes} from '../../../Theme/sizes';
export const styles = ScaledSheet.create({
  mLoginContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: Colors.white_bg,
    paddingBottom:Sizes.size_20
  },
  mText: {
    marginTop: '16@vs',
  },
  text: {
    fontSize: Sizes.size_16,
    fontWeight: '500',
    fontStyle: 'italic',
    color: Colors.DimGray,
  },
  mImage: {
    width: '120@s',
    height: '120@s',
  },
  mTitleContainer: {
    paddingTop: '100@vs',
  },
  mTitle: {
    fontSize: Sizes.size_42,
    fontStyle: 'italic',
    fontWeight: '600',
    color: Colors.Gray11,
  },
  mLoginBody: {
    width: '100%',
    paddingHorizontal: '24@s',
    paddingTop: '24@vs',
  },
  mButtonSocial: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mVersion: {
    position: 'relative',
    zIndex: 1,
    top: '20@vs',
  },
  mTextVersion: {
    fontSize: Sizes.size_18,
    fontStyle: 'italic',
    fontWeight: '400',
    color: Colors.Gray81,
  },
  mRemember: {
    // marginTop: '16@vs',
    flexDirection: 'row',
    // justifyContent:'center',
    alignItems: 'center',
  },
  mTextRemember:{
    fontSize:Sizes.size_17,
    fontStyle:'italic',
    fontWeight:'400',
    marginLeft:'12@s'
  }
});
