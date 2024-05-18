import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  linkTo: string;
  children: ReactNode;
}

export const Card: React.FC<Props> = ({ title, linkTo, children }) => {
  return (
    <Link
      to={linkTo}
      className="flex flex-col w-3/4 justify-center border rounded-lg shadow-lg p-4 lg:max-w-sm bg-gray-200 space-y-4"
    >
      <h3 className="text-center lg:text-2xl font-normal">{title}</h3>
      <img
        src="/modal-logo.png"
        title={title}
        className="self-center w-2/3 h-auto p-4 lg:p-10 lg:w-3/4 border rounded "
      />
      {children}
    </Link>
  );
};
