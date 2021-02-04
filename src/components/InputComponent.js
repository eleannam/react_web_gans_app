function InputComponent({ inputName, inputType, inputPlaceholder, inputRequired, className, checkboxLabel }) {
    const isTextArea = {inputType} ==='textarea';

    return (
        <div>
            { inputType ==='textarea' ?
             (<TextAreaInputField
                className={className}
                inputName={inputName}
                inputPlaceholder={inputPlaceholder}
                inputRequired={inputRequired} />) :
                (<InputField
                className={className}
                inputName={inputName}
                inputPlaceholder={inputPlaceholder}
                inputType={inputType}
                inputRequired={inputRequired} />)
            }
            { inputType === 'checkbox' ?
                (<label for={inputName}>{checkboxLabel}</label>) : <></>
            } 
        </div>
    )
}

function TextAreaInputField({ inputName, inputPlaceholder, inputRequired, className }) {
    return (
        <textarea
                className={className}
                name={inputName}
                placeholder={inputPlaceholder}
                required={inputRequired} />
    )
}

function InputField({ inputName, inputType, inputPlaceholder, inputRequired, className }) {
    return (
        <input
                className={className}
                name={inputName}
                placeholder={inputPlaceholder}
                type={inputType}
                required={inputRequired} />
    )
}

export default InputComponent
