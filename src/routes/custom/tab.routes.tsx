// External libraries
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components/native';

// Screens
import Home from '../../screens/Home';
import SearchList from '../../screens/SearchList';
import SavedNews from '../../screens/SavedNews';

// Assets
import IconTabHome from '../../assets/svg/TabHome';
import IconTabHomeActive from '../../assets/svg/TabHomeActive';
import IconTabList from '../../assets/svg/TabList';
import IconTabListActive from '../../assets/svg/TabListActive';
import IconTabBookmark from '../../assets/svg/TabBookmark';
import IconTabBookmarkActive from '../../assets/svg/TabBookmarkActive';

const { Navigator, Screen } = createBottomTabNavigator();

const getHomeTabIcon = (focused: boolean) => focused ? <IconTabHomeActive /> : <IconTabHome />;
const getListTabIcon = (focused: boolean) => focused ? <IconTabListActive /> : <IconTabList />;
const getSavedTabIcon = (focused: boolean) => focused ? <IconTabBookmarkActive /> : <IconTabBookmark />;

const TabRoutes = (): React.JSX.Element => {
  const theme = useTheme();
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: theme.colors.secondaryColor,
          borderTopWidth: 0,
          paddingTop: theme.spacing.sm,
          shadowColor: theme.colors.black,
          shadowOffset: { width: 0, height: theme.spacing.xs },
          shadowOpacity: 0.25,
          shadowRadius: theme.borderRadius.sm,
          elevation: theme.spacing.xs,
        },
      }}>
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return getHomeTabIcon(focused);
          },
        }}
      />
      <Screen
        name="List"
        component={SearchList}
        options={{
          tabBarIcon: ({ focused }) => {
            return getListTabIcon(focused);
          },
        }}
      />
      <Screen
        name="Saved"
        component={SavedNews}
        options={{
          tabBarIcon: ({ focused }) => {
            return getSavedTabIcon(focused);
          },
        }}
      />
    </Navigator>
  );
};

export default TabRoutes;
