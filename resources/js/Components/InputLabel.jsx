export default function InputLabel({ value, className = '', children, ...props }) {
    return (
        <label {...props} className={`block font-[400] leading-[1.5] !text-[.95rem] mb-1 !text-[#69707a]` + className}>
            {value ? value : children}
        </label>
    );
}
