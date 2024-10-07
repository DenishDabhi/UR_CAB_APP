/* eslint-disable prettier/prettier */
import React from 'react';
// import Home from '.';
// import Dashboard from '../../examples/dashboard';
import {createDrawerNavigator} from '@react-navigation/drawer';
// import BlogStackNavigation from '../blog/blogStackNavigation';
// import Find_Doula_Page from '../find-doula-page';
// import JoinAsPro from '../join-as-pro';
// import DashboardIcon from '../../icons/dashboard-icon';
// import HomeIcon from '../../icons/home-icon';
// import JoinAsProIcon from '../../icons/joinAsPro-icon';
// import BlogIcon from '../../icons/blog-icon';
// import FindDoulaIcon from '../../icons/find-doula-icon';
import MobileMenus from './mobile-menu';
import ManagingVehicle from '../managing-vehicle';
// import ManagingVehicle from '../managing-vehicle';

const HomeDrawerNavigation = () => {
  const drawer = createDrawerNavigator();
  const screen = [
    // {
    //   name: 'Dashboard',
    //   component: Dashboard,
    //   icon: DashboardIcon,
    // },
    // {
    //   name: 'Home',
    //   component: Home,
    //   icon: HomeIcon,
    // },
    // {
    //   name: 'Blog',
    //   component: BlogStackNavigation,
    //   icon: BlogIcon,
    // },
    // {
    //   name: 'Find Doula',
    //   component: Find_Doula_Page,
    //   icon: FindDoulaIcon,
    // },
    {
      name: 'Managing Vehicle',
      component: ManagingVehicle,
      // icon: JoinAsProIcon, // please add icon
    },
  ];

  return (
    <drawer.Navigator
      screenOptions={{ headerShown: false, drawerStyle: { width: 260 } }}
      drawerContent={props => <MobileMenus {...props} menus={screen} />}>
      {screen.map((item, index) => (
        <drawer.Screen
          key={index}
          name={item.name}
          component={item.component}
          options={{headerShown: false, drawerPosition: 'left'}}
        />
      ))}
    </drawer.Navigator>
  );
};

export default HomeDrawerNavigation;
