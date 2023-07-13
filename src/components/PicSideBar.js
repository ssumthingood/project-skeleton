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
} from "@heroicons/react/24/solid";
 
export default function PicSideBar() {
  const [menu, setMenu] = useState(0);

    return (<>
      <Card id="sideMenu" className={`float-right top-0 h-screen w-full max-w-[15rem] p-4 shadow-xl shadow-blue-gray-900/5 text-purple-600 ${menu===0 ? "hidden":""}`}>
        {menu===1 && <div>대충 사용자 목록</div>}
        {menu===2 && <div>대충 배경 고르기</div>}
        {menu===3 && <div>대충 스티커</div>}
      </Card>
      <div className="flex float-right flex-col">
      <button type="button" onClick={()=>menu===1 ? setMenu(0):setMenu(1)}>사용자</button>
        <button type="button" onClick={()=>menu===2 ? setMenu(0):setMenu(2)}>배경</button>
        <button type="button" onClick={()=>menu===3 ? setMenu(0):setMenu(3)}>스티커</button>
      </div>
    </>);
}