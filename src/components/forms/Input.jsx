/**
 * 
 * @param {string} placeholder
 * @param {string} value
 * @paran {(s : string) => void} onChange
 */

export function Input ({placeholder, value, onChange}){
    return <div>
        <input 
            type="text" 
            className="form-control"
            value={value}
            palceholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
            />
    </div>
}