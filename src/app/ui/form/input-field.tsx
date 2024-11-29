export default function InputField ({name, type}: {name: string, type: string} ) {
    return (
        <div>
            <input type={type} id="login" name={name} autoComplete="off"
                   className="w-full border-b border-b-gray-300 bg-transparent focus: outline-none"/>
        </div>
    )
}