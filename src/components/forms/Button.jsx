function Button({name, label, onClick}) {
    return <div>
        <button name="{name}" onClick={onClick}>
            {label}
        </button>
    </div>
}