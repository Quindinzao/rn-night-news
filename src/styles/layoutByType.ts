// External Libraries
import { Dimensions } from 'react-native';

// Styles
import { theme } from './theme';

const WIDTH_SCREEN = Dimensions.get('screen').width;

export const getLayoutByType = () => ({
  RNItemCard: {
    height: {
      carousel: '405px',
      verticalList: '144px',
      horizontalList: '258px',
      favorites: '331px',
    },
    width: {
      carousel: '100%',
      verticalList: '100%',
      horizontalList: '250px',
      favorites: '100%',
    },
  },

  TouchableItemCard: {
    height: {
      carousel: '405px',
      verticalList: '144px',
      horizontalList: '258px',
      favorites: '331px',
    },
    width: {
      carousel: String(WIDTH_SCREEN - 32) + 'px',
      verticalList: '100%',
      horizontalList: '250px',
      favorites: '100%',
    },
    flexDirection: {
      carousel: 'column',
      verticalList: 'row',
      horizontalList: 'column',
      favorites: 'column',
    },
  },

  HeaderCard: {
    height: {
      carousel: '256px',
      verticalList: '144px',
      horizontalList: '156px',
      favorites: '216px',
    },
    width: {
      carousel: '100%',
      verticalList: '120px',
      horizontalList: '250px',
      favorites: '100%',
    },
  },

  HeaderImageCard: {
    borderBottomLeftRadius: {
      carousel: '0',
      verticalList: theme.borderRadius.lg + 'px',
      horizontalList: '0',
      favorites: '0',
    },
    borderBottomRightRadius: {
      carousel: theme.borderRadius.lg + 'px',
      verticalList: '0',
      horizontalList: theme.borderRadius.lg + 'px',
      favorites: theme.borderRadius.lg + 'px',
    },
  },

  HeaderTitleCard: {
    paddingBottom: {
      carousel: theme.spacing.md + 'px',
      verticalList: theme.spacing.md + 'px',
      horizontalList: '0',
      favorites: theme.spacing.md + 'px',
    },
  },

  BodyCard: {
    paddingTop: {
      carousel: theme.spacing.lg + 'px',
      verticalList: theme.spacing.md + 'px',
      horizontalList: theme.spacing.md + 'px',
      favorites: theme.spacing.md + 'px',
    },
  },

  Description: {
    marginTop: {
      carousel: 0,
      verticalList: theme.spacing.sm + 'px',
      horizontalList: theme.spacing.md + 'px',
      favorites: theme.spacing.md + 'px',
    },
  },
});
