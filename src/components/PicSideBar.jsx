/* eslint-disable react/no-array-index-key */
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
import UserCard from "./UserCard";
 
export default function PicSideBar() {
    const buttons = [
      {word:"사용자", idx:1},
      {word:"배경", idx:2},
      // {word:"스티커", idx:3}
    ]

    const objItems = [
        { item: "🦜", name: "Parrot" },
        { item: "🦖", name: "Dinosaur" },
        { item: "🦆", name: "Duck" },
        { item: "🦔", name: "Porkypine" },
        { item: "🐤", name: "Chick" },
        { item: "🐧", name: "Penguin" },
        { item: "🦜", name: "Parrot" },
        { item: "🦖", name: "Dinosaur" },
        { item: "🦆", name: "Duck" },
        { item: "🦔", name: "Porkypine" },
        { item: "🐤", name: "Chick" },
        { item: "🐧", name: "Penguin" }
      ];

  const [menu, setMenu] = useState(0);

    return (<>
      <Card id="sideMenu" className={`float-right top-0 h-screen w-full max-w-[15rem] p-4 shadow-xl shadow-blue-gray-900/5 text-purple-600 ${menu===0 ? "hidden":""}`}>
        {menu===1 && 
        <div className="h-full overflow-x-scroll">
            대충 사용자 목록
          {objItems.map((item,idx)=><UserCard userName={item.name} isHost={idx===0}/>)}
        </div>
        }
        {menu===2 && <div>대충 배경 고르기</div>}
        {menu===3 && <div>대충 스티커</div>}
      </Card>
      <div className="flex  flex-col float-right gap-3">
        {buttons.map(btn=>(
            <button type="button" onClick={()=>menu===btn.idx ? setMenu(0):setMenu(btn.idx)}>{btn.word}</button>
          ))}
      </div>
    </>);
}