export default function Condition({condition, conditionText}) {
    return (
        <p className="text-xl font-normal pl-8 pt-2">{condition ? "✔️" : "❌"} {conditionText}</p>
    )
}