//path: src\app\routes\index.tsx

// All components mapping with path for internal routes

import { lazy } from 'react'

const Dashboard = lazy(() => import('../protected/Dashboard'))
const Welcome = lazy(() => import('../protected/Welcome'))
const Page404 = lazy(() => import('../protected/404'))
const Blank = lazy(() => import('../protected/Blank'))
const Charts = lazy(() => import('../protected/Charts'))
const Leads = lazy(() => import('../protected/Leads'))
const Integration = lazy(() => import('../protected/Integration'))
const Calendar = lazy(() => import('../protected/Calendar'))
const Team = lazy(() => import('../protected/Team'))
const Transactions = lazy(() => import('../protected/Transactions'))
const Bills = lazy(() => import('../protected/Bills'))
const ProfileSettings = lazy(() => import('../protected/ProfileSettings'))
const GettingStarted = lazy(() => import('../dashwindpages/GettingStarted'))
const DocFeatures = lazy(() => import('../dashwindpages/DocFeatures'))
const DocComponents = lazy(() => import('../dashwindpages/DocComponents'))


const routes = [
  {
    path: '/dashboard', // the url
    component: Dashboard, // view rendered
  },
  {
    path: '/welcome', // the url
    component: Welcome, // view rendered
  },
  {
    path: '/leads',
    component: Leads,
  },
  {
    path: '/settings-team',
    component: Team,
  },
  {
    path: '/calendar',
    component: Calendar,
  },
  {
    path: '/transactions',
    component: Transactions,
  },
  {
    path: '/settings-profile',
    component: ProfileSettings,
  },
  {
    path: '/settings-billing',
    component: Bills,
  },
  {
    path: '/getting-started',
    component: GettingStarted,
  },
  {
    path: '/features',
    component: DocFeatures,
  },
  {
    path: '/components',
    component: DocComponents,
  },
  {
    path: '/integration',
    component: Integration,
  },
  {
    path: '/charts',
    component: Charts,
  },
  {
    path: '/404',
    component: Page404,
  },
  {
    path: '/blank',
    component: Blank,
  },
]

export default routes
