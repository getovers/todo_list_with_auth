export default function SubmitButton({text}: { text: string }) {
    return (
        <button className="font-semibold text-xl bg-gray-200 rounded w-full h-20 hover:bg-gray-300 ">
            {text}
        </button>
    )
}