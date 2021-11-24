import React from "react";
import TodoContent from "../todofolder/todo";
import ChangePassword from "../password/changepassword";
import Invoice from "../invoicefolder/invoice";
import Logout from "../logoutfolder/logout";

export default function HomeNavigationTab() {
  return (
    <div>
      <div className="Todo">
        <TodoContent />
        <ChangePassword />
        <Invoice />
        <Logout />
      </div>
      <div className="user">User</div>
    </div>
  );
}
