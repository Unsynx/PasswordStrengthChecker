export default function Condition({condition, conditionText}) {
    return (
        <p className="text-xl font-normal pl-4 pt-3">{condition ? "✔️" : "❌"} {conditionText}</p>
    )
}