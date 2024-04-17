export default function Calculation({bill,perFriend,perMe}) {
    const bills=Number(bill);
    const tip=bills*(((Number(perMe)+Number(perFriend))/2)/100)

    return (
        <div>You pay ${Number(bill)+tip})(${Number(bill)}+${tip})</div>
    )
}
