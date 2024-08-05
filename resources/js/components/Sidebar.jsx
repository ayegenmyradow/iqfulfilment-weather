import React from "react";
import HomeIcon from "../icons/Home";
import Signout from "../icons/Signout";

function Sidebar() {
    return (
        <aside className="sidebar">
            <div>
                <a href="/">
                    <img className="logo" src="/logo.svg" alt="" />
                </a>

                <a href="/">
                    <HomeIcon width="20px" height="20px" />
                </a>
            </div>
            <button name="signout">
                <Signout />
            </button>
        </aside>
    );
}

export default Sidebar;
