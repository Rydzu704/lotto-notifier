import { useState, useEffect } from "react";
import { CreateLotteryTicketForm } from "../components/forms/CreateLotteryTicketForm";
import dayjs from 'dayjs';
    export const CreateLotteryTicketPage = () => {
        const today = dayjs().format("DD-MM-YYYY");
        const [inputData, setInputData] = useState({
            number_1: null,
            number_2: null,
            number_3: null,
            number_4: null,
            number_5: null,
            number_6: null,
            createdAtDate: today,
            lottoPlusIsTrue: false,
            
        });
        
        console.log(inputData);
        return (
            <CreateLotteryTicketForm
            setInputData={setInputData}
            inputData={inputData}
            />
        )
    }