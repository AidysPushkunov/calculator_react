import { FC, ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  active?: boolean;
  bg?: boolean;
}

export const Button: FC<ButtonProps> = ({ children, active, bg = true }) => {
  if (!bg) {
    return <button className="align-center h-full w-full">{children}</button>;
  }

  if (active) {
    return (
      <button className="align-center betterhover:hover:bg-[#4edb99] h-full w-full rounded-lg bg-[#56CB95] p-4 text-xl text-white transition-all active:bg-[#4edb99]">
        {children}
      </button>
    );
  }

  return (
    <button className="align-center betterhover:hover:bg-[#ebebeb] h-full w-full rounded-lg bg-[#F3F3F3] p-4 text-xl font-semibold text-[#707070] transition-all active:bg-[#ebebeb]">
      {children}
    </button>
  );
};
