import { DocumentIcon } from "../../assets/icons";

interface DocProps {
  title: string;
}

const Document = ({ title }: DocProps) => {
  return (
    <div className="w-full flex items-center gap-[1.0188rem]">
      <span>
        <DocumentIcon />
      </span>
      <div className="flex flex-col">
        <span className="font-light text-xs text-clr-scndry-100 tracking-[0px]">
          01 April 2022
        </span>
        <p className="text-md text-clr-bg-light">{title}</p>
      </div>
    </div>
  );
};

export default Document;
