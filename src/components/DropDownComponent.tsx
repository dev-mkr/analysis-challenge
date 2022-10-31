type DropDownType = {
  labelText: string;
  value: string | undefined;
  children: React.ReactNode;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  showAll?: boolean;
};
const DropDown = ({ labelText, value, onChange, showAll, children }: DropDownType) => {
  return (
    <div className="flex justify-between items-center gap-x-4 w-full ">
      <label
        htmlFor={labelText}
        className="whitespace-nowrap text-sm font-medium text-gray-900"
      >
        {labelText}
      </label>
      <select
        id={labelText}
        value={value}
        onChange={onChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
      >
        {showAll && (
          <option key="showAll" value="showAll">
            Show All
          </option>
        )}
        {children}
      </select>
    </div>
  );
};

export default DropDown;
