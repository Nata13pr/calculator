import {useState} from "react";
import Tips from "./components/Tips";
import Calculation from "./components/Calculation";
import Button from "./components/Button";

export default function App() {
    return (
        <div>
            <TipCalculator/>
        </div>
    )
}

function TipCalculator() {
    const [bill, setBill] = useState('');
    const [percentage1, setPercentage1] = useState(0);
    const [percentage2, setPercentage2] = useState(0);

    const tip = bill*((percentage1 + percentage2) / 2 / 100);

    function handleReset() {
        setBill('');
        setPercentage2(0);
        setPercentage1(0);
    }

    return (
        <div>
            <BillInput bill={bill} onSetBill={setBill}/>
            <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
                How did you like the service?
            </SelectPercentage>
            <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
                How did your friend like the service?
            </SelectPercentage>

            {bill > 0 && (
                <>
                    <Output bill={bill} tip={tip}/>
                    <Reset onReset={handleReset}/>
                </>
            )}
        </div>
    )
}

function BillInput({bill, onSetBill}) {
    return (
        <div>
            <label>How much was the bill?</label>
            <input
                type='text'
                placeholder='Bill value'
                value={bill}
                onChange={(e) => onSetBill(Number(e.target.value))}
            />
        </div>
    )
}

function SelectPercentage({children, percentage, onSelect}) {
    return (
        <div>
            <label>{children}</label>
            <select value={percentage} onChange={(e) => onSelect(Number(e.target.value))}>
                <option value="0">Dissatisfied (0%)</option>
                <option value="5">It was okay (5%)</option>
                <option value="10">It was good (10%)</option>
                <option value="20">Absolutely amazing! (20%)</option>
            </select>
        </div>
    )
}

function Output({bill, tip}) {
    return (
        <h3>
            You pay ${bill + tip} (${bill} + ${tip} tip)
        </h3>
    )
}

function Reset({onReset}) {
    return <button onClick={onReset}>Reset</button>
}

//My code
// function App() {
//     const [inputBill, setInputBill] = useState('');
//     const [percentageFromFriend,setPercentageFromFriend]=useState('0');
//     const [percentageFromMe,setPercentageFromMe]=useState('0')
//
//     function handleBill(e) {
//         setInputBill(e.target.value)
//     }
//
//     function handleSubmit(e){
//
//         setPercentageFromFriend('0');
//         setInputBill('0')
//         setPercentageFromMe('0')
//     }
//
//     return (
//         <div>
//             <div>
//                 <span>How much was the bill?</span>
//                 <input value={inputBill} onChange={handleBill}/>
//             </div>
//             <Tips  onPercentage={setPercentageFromFriend}
//                    percentage={percentageFromFriend}>
//                 How did you like the service?
//             </Tips>
//             <Tips  onPercentage={setPercentageFromMe}  percentage={percentageFromMe}>
//                 How did your friend like the service?
//             </Tips>
//             <Calculation bill={inputBill} perFriend={percentageFromFriend} perMe={percentageFromMe}/>
//             <Button onReset={handleSubmit}>Reset</Button>
//         </div>
//     );
// }
//
// export default App;
