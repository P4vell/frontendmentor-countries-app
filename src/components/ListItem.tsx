import { ReactNode } from "react";

type ListItemProps = {
  children: ReactNode;
  label: string;
};

const ListItem = ({ children, label }: ListItemProps) => {
  return (
    <li>
      <p className="font-bold">
        {label}: <span className="font-normal">{children}</span>
      </p>
    </li>
  );
};

export default ListItem;
