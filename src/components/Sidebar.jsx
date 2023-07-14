import React, { useState } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  UserIcon
} from "@heroicons/react/24/solid";
import TextInput from "./TextInput";
 
export default function Sidebar() {
  const [visible, setVisible] = useState(false);
  if(visible){
    return (
      <Card id="sideMenu" className="fixed top-0 right-0 h-full w-full max-w-[15rem] p-4 shadow-xl shadow-blue-gray-900/5 text-blue-600">
        <div className="mb-2 p-4">
          <Typography variant="h5" color="blue-gray">
            User
          </Typography>
        </div>
        <List>
          <ListItem>
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            Dashboard
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <ShoppingBagIcon className="h-5 w-5" />
            </ListItemPrefix>
            E-Commerce
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            Inbox
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Profile
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            Settings
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
            ID
          <ListItem>
            <TextInput type="text" change={(e)=>{console.log(e.target.value)}}/>
          </ListItem>
            PASSWORD
          <ListItem>
            <TextInput type="password" change={(e)=>{console.log(e.target.value)}}/>
          </ListItem>
          <ListItem onClick={()=>{setVisible(false); console.log(visible)}}>
            <ListItemPrefix>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd"/>
  </svg>
            </ListItemPrefix>
          </ListItem>
        </List>
      </Card>
    );
  }

  return (
    <UserIcon
    onClick={()=>{setVisible(true)}}
    className="fixed top-4 right-4 w-10 h-10 text-blue-600"/>
  )
}