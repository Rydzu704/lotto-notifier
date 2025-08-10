import { useState, useEffect } from "react";
import { CreateLotteryTicketForm } from "../components/forms/CreateLotteryTicketForm";
import { TicketService } from "../services/TicketService";
    export const CreateLotteryTicketPage = () => {
        
        const [inputData, setInputData] = useState({
            number_1: null,
            number_2: null,
            number_3: null,
            number_4: null,
            number_5: null,
            number_6: null,
            lottoPlusIsTrue: false,
            
        });
        const handleSubmit = (event) => {
            const numbers = [];
            event.preventDefault();
            let ifNumbersExist = false;
            for(let i = 1;i<=6;i++){
                const number = inputData[`number_${i}`]
                if(number != null){
                    numbers.push(number);
                    ifNumbersExist = true;
                    //console.log(ifNumbersExist)
                }else{
                    console.log(`Number ${i} is missing`);
                    ifNumbersExist = false;
                    //console.log(ifNumbersExist)
                    document.getElementById("error").innerHTML = "please fill in the remaining numbers "
                    document.getElementsByName("number_" + i)[0].style.borderRadius = "1";
                    document.getElementsByName("number_" + i)[0].style.backgroundColor = "#f75050ff";
                }
            }
                const dataToSend = [numbers, inputData[`lottoPlusIsTrue`]]
             if(ifNumbersExist){
                TicketService.addTicket(dataToSend);
            }
        }
        
        return (
            <CreateLotteryTicketForm
            handleSubmit={handleSubmit}
            setInputData={setInputData}
            inputData={inputData}
            />
        )
    }