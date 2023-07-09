//path: src\app\containers\Layout.tsx

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeNotificationMessage } from "../../src/app/features/common/headerSlice";
import LeftSidebar from "./LeftSidebar";
import ModalLayout from "./ModalLayout";
import PageContent from "./PageContent";
import 'react-notifications/lib/notifications.css';
const { NotificationContainer, NotificationManager } = require('react-notifications') as any;
import RightSidebar from './RightSidebar';

interface RootState {
  header: {
    newNotificationMessage: string,
    newNotificationStatus: number,
  };
}

const Layout: React.FC = () => {
  const dispatch = useDispatch();
  const { newNotificationMessage, newNotificationStatus } = useSelector((state: RootState) => state.header);

  useEffect(() => {
    if(newNotificationMessage !== ""){
      if(newNotificationStatus === 1) NotificationManager.success(newNotificationMessage, 'Success');
      if(newNotificationStatus === 0) NotificationManager.error(newNotificationMessage, 'Error');
      dispatch(removeNotificationMessage());
    }
  }, [newNotificationMessage, dispatch]);

  return (
    <>
      { /* Left drawer - containing page content and side bar (always open) */ }
      <div className="drawer drawer-mobile">
        <input id="left-sidebar-drawer" type="checkbox" className="drawer-toggle" />
        <PageContent/>
        <LeftSidebar />
      </div>

      { /* Right drawer - containing secondary content like notifications list etc.. */ }
      <RightSidebar />

      {/** Notification layout container */}
      <NotificationContainer />

      {/* Modal layout container */}
      <ModalLayout />
    </>
  );
}

export default Layout;
