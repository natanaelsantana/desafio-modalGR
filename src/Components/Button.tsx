import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Button: React.FC<Props> = ({ children }) => {
  return (
    <button
      className="x-4 py-2 rounded-md w-1/2 h-auto bg-gray-300 hover:bg-blue-200"
      type="submit"
    >
      {children}
    </button>
  );
};
