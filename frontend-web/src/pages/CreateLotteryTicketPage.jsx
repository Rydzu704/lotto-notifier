import { useState } from "react";
import { CreateLotteryTicketForm } from "../components/forms/CreateLotteryTicketForm";
import { TicketService } from "../services/TicketService";

export const CreateLotteryTicketPage = () => {
    const [selectedNumbers, setSelectedNumbers] = useState([]);
    const [inputData, setInputData] = useState({
        lottoPlusIsTrue: false,
    });

    const handleClickNumber = (number) => {
    let newArray = [...selectedNumbers];
        if(newArray.includes(number)) {
            const index = newArray.indexOf(number);
            newArray.splice(index, 1);
        }else if(newArray.length < 6) {
            newArray.push(number);
    }
    setSelectedNumbers(newArray);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (selectedNumbers.length < 6) {
            document.getElementById("error").innerHTML = "Please pick all 6 numbers";
            return;
        }
        const dataToSend = {
            numbers: selectedNumbers,
            lottoPlusIsTrue: inputData.lottoPlusIsTrue
        };
        console.log(dataToSend)
        TicketService.addTicket(dataToSend);
    };

    return (
        <CreateLotteryTicketForm
            handleSubmit={handleSubmit}
            handleClickNumber={handleClickNumber}
            selectedNumbers={selectedNumbers}
            setInputData={setInputData}
            inputData={inputData}
        />
    );
};
