import { DocumentIcon } from "@/assets/icons";

const FileName = () => {
  return (
    <div>
      <div>
        <DocumentIcon />
      </div>
      <div>
        <span>Document Name</span>
        <input
          type="text"
          placeholder="welcome.md"
        />
      </div>
    </div>
  );
};

export default FileName;
