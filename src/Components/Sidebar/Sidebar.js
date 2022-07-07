import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";
import {
  FaConciergeBell,
  FaUserFriends,
  FaSync,
  FaPhoneAlt,
  FaTools,
  FaRegUser,
  FaFile,
} from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import "react-pro-sidebar/dist/css/styles.css";
import "./Sidebar.css";

const SideBar = () => {
  return (
    <ProSidebar className="pro-sidebar ">
      <SidebarHeader>
        <div className="sidebar-header">
          <Link to="/dashboard">
            <p className="sidebar-title">
              <img
                className="sidebar-logo"
                src="https://e7.pngegg.com/pngimages/764/460/png-clipart-hotel-icon-5-star-computer-icons-hotel-white-text.png"
                alt="logo"
              />
              HOTEL
            </p>
          </Link>
        </div>
      </SidebarHeader>

      <SidebarContent className="sidebarr">
        <Menu iconShape="circle" className="menu">
          <MenuItem
            className="menuu mx-1"
            icon={<MdOutlineDashboard className="text-white fs-5" />}
          >
            <NavLink className="text-white fs-6" exact to={"/dashboard"}>
              DashBoard
            </NavLink>
          </MenuItem>
          <SubMenu
            className="menuu"
            icon={<FaConciergeBell />}
            title="FrontDesk"
          >
            <SubMenu title="Reservation">
              <MenuItem>
                <NavLink exact to={"/reserveview"}>
                  View
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink exact to={"/reservebook"}>
                  Booking
                </NavLink>
              </MenuItem>
            </SubMenu>
            <MenuItem>
              <NavLink exact to={"/managerooms"}>
                Manage Rooms
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink exact to={"/dashboard"}>
                Shift Rooms
              </NavLink>
            </MenuItem>
          </SubMenu>
          <SubMenu className="menuu" icon={<FaSync />} title="Progress">
            <MenuItem>
              <NavLink exact to={"/dashboard"}>
                today's Page
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink exact to={"/dashboard"}>
                Monthly view
              </NavLink>
            </MenuItem>
          </SubMenu>
          <SubMenu className="menuu" icon={<FaPhoneAlt />} title="Request">
            <MenuItem>
              <NavLink exact to={"/dashboard"}>
                Raise New Complaint
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink exact to={"/dashboard"}>
                New Complaints
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink exact to={"/dashboard"}>
                Closed Ones
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink exact to={"/dashboard"}>
                Shift a Room
              </NavLink>
            </MenuItem>
          </SubMenu>
          <SubMenu className="menuu" icon={<FaTools />} title="Maintenance">
            <MenuItem>
              <NavLink exact to={"/maintenance"}>
                Maintenance Block
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink exact to={"/dashboard"}>
                Upcoming
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink exact to={"/dashboard"}>
                On Going
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink exact to={"/dashboard"}>
                Maintenance History
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink exact to={"/dashboard"}>
                Maintenance Types
              </NavLink>
            </MenuItem>
          </SubMenu>
          <MenuItem className="menuu" icon={<FaUserFriends />}>
            <NavLink exact to={"/staff"}>
              Staff
            </NavLink>
          </MenuItem>
          <MenuItem className="menuu" icon={<FaRegUser />}>
            Corprate Booking
          </MenuItem>
          <MenuItem className="menuu" icon={<FaFile />}>
            Reports
          </MenuItem>
        </Menu>
      </SidebarContent>
    </ProSidebar>
  );
};

export default SideBar;
