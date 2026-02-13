import { FiX } from "react-icons/fi";

type TModalProps = {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

const Modal = ({isOpen, onClose, title, children, maxWidth = '2xl'}: TModalProps) => {
    if (!isOpen) return null;

    const maxWidthClasses = {
        'sm': 'max-w-sm',
        'md': 'max-w-md',
        'lg': 'max-w-lg',
        'xl': 'max-w-xl',
        '2xl': 'max-w-2xl'
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute bg-black/50 backdrop-blur-sm transition-opacity w-full h-full" onClick={onClose}>
            </div>
            <div className={`relative bg-white rounded-xl w-full ${maxWidthClasses[maxWidth]}`}>
                <div className="flex justify-between items-center px-7 py-2 border-b border-gray-200">
                    <h3 className="font-semibold text-xl">{title}</h3>
                    <button className="p-4 hover:bg-gray-100 rounded-full cursor-pointer" onClick={onClose}><FiX size={24}/></button>
                </div>
                <div className="p-7">{children}</div>
            </div>
        </div>
    )
}

export default Modal;