import ContactsList from "../pages/Contacts/ContactsList";
import HomeDashboard from "../pages/home/Home";
import NotificationList from "../pages/Notification/NotificationList";

export const routesPaths = [
  {
    path: `home`,
    component: <HomeDashboard />,
  },
  {
    path: `Notifications`,
    component: <NotificationList />,
  },
  //   ------------------------------------ marketing routes  ------------------------------------------------
  {
    path: `Contacts`,
    component: <ContactsList />,
  },
];
