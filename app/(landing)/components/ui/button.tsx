type ButtonProps = {
    children: React.ReactNode;
    className?: string;
    variant?: "primary" | "dark" | "ghost";
    size?: "small" | "normal";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({children, className, variant= "primary", size="normal", ...props}: ButtonProps) => {

    const baseStyles = "inline-flex gap-2 durition-300 justify-center items-center cursor-pointer hover:scale-105";

    const variants = {
        primary: 'bg-primary text-white hover:bg-primary/85',
        dark: 'bg-dark text-white hover:bg-dark/85',
        ghost: 'bg-transparent text-dark hover:bg-gray-100',
    }

    const sizes = {
        normal: 'py-4 px-9',
        small: 'py-[10px] px-7',
    };
    return (
        <button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
            {children}
        </button>
    )
}

export default Button;