type DropDownType = {
  labelText: string;
  value: string | undefined;
  children: React.ReactNode;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  showAll?: boolean;
};
const DropDown = ({ labelText, value, onChange, showAll, children }: DropDownType) => {
  return (
    <>
      <label
        htmlFor={labelText}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
      >
        {labelText}
      </label>
      <select
        id={labelText}
        value={value}
        onChange={onChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {showAll && <option key="showAll">Show All</option>}
        {children}
      </select>
    </>
  );
};

export default DropDown;
