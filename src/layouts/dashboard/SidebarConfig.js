// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'home',
    // title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:home-fill')
    // icon: getIcon('eva:pie-chart-2-fill')
  },
  {
    title: 'Explore jobs',
    path: '/dashboard/user',
    icon: getIcon('zondicons:explore')
  },
  // {
  //   title: 'product',
  //   path: '/dashboard/products',
  //   icon: getIcon('eva:shopping-bag-fill')
  // },
  // {
  //   title: 'blog',
  //   path: '/dashboard/blog',
  //   icon: getIcon('eva:file-text-fill')
  // },
  {
    title: 'salary prediction',
    path: '/dashboard/vrudit',
    icon: getIcon('fa6-solid:hand-holding-dollar')
    // icon: getIcon('eva:search-fill')
  },
  {
    title: 'login',
    path: '/login',
    icon: getIcon('eva:lock-fill')
  },
  {
    title: 'register',
    path: '/register',
    icon: getIcon('eva:person-add-fill')
  }
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: getIcon('eva:alert-triangle-fill')
  // }
];

export default sidebarConfig;
