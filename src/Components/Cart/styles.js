import {ScaledSheet} from 'react-native-size-matters';
import { Sizes } from '../../Theme/sizes';
import { Colors } from '../../Theme/colors';


export const styles = ScaledSheet.create({
    mNumber: {
        width: Sizes.size_200,
        borderRadius: Sizes.size_10,
        height: Sizes.size_30,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: Colors.Gray91,
      },
})