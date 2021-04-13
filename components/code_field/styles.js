import {StyleSheet, Platform} from 'react-native';
import colors from '../../assets/colors'

export const CELL_SIZE = 70;
export const CELL_BORDER_RADIUS = 8;
export const DEFAULT_CELL_BG_COLOR = '#fff';
export const NOT_EMPTY_CELL_BG_COLOR = colors.yellow
export const ACTIVE_CELL_BG_COLOR = '#FFF9F0';

const styles = StyleSheet.create({
  codeFieldRoot: {
    height: CELL_SIZE,
    marginVertical: 48,
    marginHorizontal: 24,
    justifyContent: 'space-between'
  },
  cell: {
    marginHorizontal: 8,
    height: CELL_SIZE,
    width: CELL_SIZE,
    lineHeight: CELL_SIZE - 5,
    ...Platform.select({web: {lineHeight: 65}}),
    fontSize: 30,
    textAlign: 'center',
    borderRadius: CELL_BORDER_RADIUS,
    color: colors.yellow,
    backgroundColor: '#fff',

    // IOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    // Android
    elevation: 3,
  },

  // =======================

  root: {
   
    
    
  },
 
});

export default styles;