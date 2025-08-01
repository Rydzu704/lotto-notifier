import React from "react";
import { Outlet } from "react-router-dom";
import { BottomNav } from "../navbar/BottomNav";

export const Layout = () => {
    return (
        <>
            <main>
                {" "}
                <Outlet />{" "}
            </main>
            <div>
                <BottomNav />
            </div>
        </>
    )
}