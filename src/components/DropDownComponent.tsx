type DropDownType = {
  labelText: string;
  value: string | undefined;
  children: React.ReactNode;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  showAll?: boolean;
};
const DropDown = ({ labelText, value, onChange, showAll, children }: DropDownType) => {
  return (
    <div className="flex w-full items-center justify-between gap-x-4 bg-primary text-base">
      <label
        htmlFor={labelText}
        className="whitespace-nowrap bg-primary text-sm font-medium  text-base"
      >
        {labelText}
      </label>
      <select
        id={labelText}
        value={value}
        onChange={onChange}
        className="block w-full rounded-lg border border-gray-300  bg-primary p-2 text-sm  text-base focus:border-blue-500 focus:ring-blue-500"
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
