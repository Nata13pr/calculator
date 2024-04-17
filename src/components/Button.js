export default function Button({children,onReset}) {
    return (
        <button onClick={onReset}>{children}</button>
    )
}
