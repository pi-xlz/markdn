import { DocumentIcon } from "@/assets/icons";

const FileName = () => {
  return (
    <div className="flex gap-[1.0188rem] pl-6 items-center">
      <div>
        <DocumentIcon />
      </div>
      <div>
        <label>
          <span className="hidden">Document Name</span>
          <input
            type="text"
            placeholder="welcome.md"
            className="text-clr-bg-light outline-none bg-transparent caret-clr-prmry-100 w-min border-[1px] border-transparent focus:border-b-clr-bg-light placeholder:text-clr-bg-light max-w-[130px]"
          />
        </label>
      </div>
    </div>
  );
};

export default FileName;
