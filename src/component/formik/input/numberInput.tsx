import { GrFormAdd, GrFormSubtract } from "react-icons/gr";
const NumberInput = ({ field, form, disabled, ...props }: any) => {
  const handleIncrement = () => {
    form.setFieldValue(field.name, Number(field.value) + 1);
  };

  const handleDecrement = () => {
    form.setFieldValue(field.name, Number(field.value) - 1);
  };

  return (
    <div className="grid grid-cols-5 py-[1px]">
      <button
        className="border-[1px] col-span-1 border-borderColor rounded-l-md px-[5px] cursor-pointer xl:py-[5px] flex justify-center items-center"
        disabled={disabled}
        type="button"
        onClick={handleDecrement}
      >
        <GrFormSubtract className={"text-textSecondary"} />
      </button>
      <div className="col-span-3">
        <input
          disabled={disabled}
          className="flex justify-center leading-[19.07px] bg-white pl-[10px] py-[3px] h-[37px] focus:outline text-textSecondary items-center border-y-[1px] w-[100%]"
          {...field}
          {...props}
          type="number"
          min={props.min}
          max={props.max}
        />
      </div>
      <button
        className="border-[1px] col-span-1 px-[5px] cursor-pointer rounded-r-md flex justify-center items-center"
        type="button"
        disabled={disabled}
        onClick={handleIncrement}
      >
        <GrFormAdd />
      </button>
    </div>
  );
};

export default NumberInput;
