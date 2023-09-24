import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, FC, forwardRef } from "react";

export const buttonVariants = cva(
  "active:scale-95 inline-flex items-center justify-center rounded-md tex-sm font-semibold transition-color focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900",
  {
    variants: {
      variant: {
        default:
          "bg-transparent border-r-2 border border-light-blue text-white hover:bg-white hover:text-dark-blue dark:bg-slate-500 dark:text-slate-200 dark:hover:bg-slate-900 dark:hover:text-slate-100 dark:border-none",
        normal:
          "bg-light-blue text-white hover:text-light-blue dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-100 border-none hover:bg-slate-100 dark:border-slate-700",
        ghost:
          "bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-400 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent",
        link: "bg-transparent darl:bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent",
      },
      size: {
        default: "h-15 py-3 px-4",
        sm: "h-9 px-2 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, isLoading, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isLoading}
        {...props}>
        {isLoading ? "Loading..." : null}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
