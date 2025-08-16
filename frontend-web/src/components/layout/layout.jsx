import React from "react";
import { Outlet } from "react-router-dom";
import { BottomNav } from "../navbar/BottomNav";
import { CreateLotteryTicketPage } from '../../pages/CreateLotteryTicketPage';
import { TicketCardPage } from '../../pages/TicketCardPage';
export const Layout = () => {
    return (
        <>
            <main>
                <CreateLotteryTicketPage />
                <TicketCardPage />
            </main>
            <div>
                <BottomNav />
            </div>
        </>
    )
}