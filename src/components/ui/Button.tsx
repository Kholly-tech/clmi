interface ButtonProps {
  content: any;
  onCLick: () => void;
  className?: string;
}

const Button = ({ content, className, onCLick }: ButtonProps) => {
  return (
    <button
      className={`w-full bg-blue-900 text-white py-3 rounded-2xl font-semibold hover:bg-blue-800 transition-colors flex items-center justify-center gap-2 ${className}`}
      onClick={onCLick}
    >
      {content}
    </button>
  );
};

export default Button;
