import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', children, className = '', ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-xl px-6 py-3 font-medium transition-all duration-300 ease-out";
    
    const variants = {
      primary: "bg-violet-600 hover:bg-violet-500 text-white shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_25px_rgba(124,58,237,0.5)] border border-violet-500/50 hover:-translate-y-0.5",
      secondary: "bg-transparent text-white border border-white/10 hover:border-white/30 hover:bg-white/5 hover:-translate-y-0.5"
    };

    return (
      <button 
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
