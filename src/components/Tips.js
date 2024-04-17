export default function Tips({children,onPercentage,percentage}) {

    function handleSelection (e){
        onPercentage(e.target.value)
    }
    return (
        <div>
            <span>{children}</span>
            <select value={percentage} onChange={handleSelection}>
                <option value='0'>Dissatisfied(0%)</option>
                <option value='5'>It was okay(5%)</option>
                <option value='10'>It was good(10%)</option>
                <option value='20'>Absolutely amazing!(20%)</option>
            </select>
        </div>
    )
}