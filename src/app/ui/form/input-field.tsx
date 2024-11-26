export default function InputField ({type}: {type: string}) {
    return (
        <div>
            <input type={type} id="login" name="login" autoComplete="off"
                   className="w-full border-b border-b-gray-300 bg-transparent focus: outline-none"/>
        </div>
    )
}