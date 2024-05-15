import { Field, ErrorMessage, useFormikContext } from "formik";
import TextError from "../textError";
import { useEffect, useRef, useState } from "react";
import dropdown from "@assets/user/dropdown.svg";

function Select(props: any) {
  const {
    label,
    data,
    title,
    selectOption = false,
    notShowError = false,
    name,
    options,
    prefix,
    className,
    autoNo = false,
    ...rest
  } = props;
  const prefixRef = useRef<HTMLDivElement>(null);
  const [prefixWidth, setPrefixWidth] = useState(0);

  // Access the Formik context to get the form values
  const { values }: any = useFormikContext();

  // Get the value of the input field
  const fieldValue = values[name];

  useEffect(() => {
    const prefixDiv = prefixRef.current;
    if (prefixDiv) {
      setPrefixWidth(prefixDiv.offsetWidth + 3);
    }
  }, []);

  const getName = (id: string) => {
    const level = options.find((item: any) => item.id === id);
    return level ? level.name : "";
  };

  return (
    <div className="flex flex-col gap-[2px]">
      <label
        className={`text-primary text-[10px]  font-bold lg:text-[12px] uppercase`}
        htmlFor={name}
      >
        {label}
      </label>
      <div className="relative">
        {prefix && (
          <div
            className="absolute h-full flex items-center left-[12px] text-sm"
            ref={prefixRef}
          >
            {prefix}
          </div>
        )}
        <Field
          className={`transition ease-in-out delay-150 w-full leading-[19.07px]  h-[38px] border-borderColor ${
            props?.disabled ? "bg-[#f6f6f6] bg-white" : "bg-white"
          } ${
            className ? className : "placeholder:text-textSecondary"
          } rounded-md text-textSecondary appearanceNone bg-white  text-sm border-[1px] py-[8px] px-2 lg:px-3   focus:outline-none focus:border-blue-300`}
          as="select"
          id={name}
          name={name}
          title={getName(fieldValue)}
          style={{
            paddingLeft: prefixWidth + 12,
            paddingRight: 25,
          }}
          {...rest}
        >
          <option
            className={`${selectOption ? "" : "hidden"}`}
            key={"00001010"}
            value={""}
          >
            {title ? <>{title}</> : <>{autoNo ? <>No</> : <>SelectDate</>}</>}
          </option>
          {options.length === 0 && (
            <option key={"00001010"} value={""} disabled>
              No Data Available
            </option>
          )}
          {options.map((option: any, index: any) => {
            return (
              <option
                className={`${option?.disabled ? null : "text-black"}`}
                key={index}
                value={data ? option[data] : option.id}
                disabled={option?.disabled}
              >
                {option.name}
              </option>
            );
          })}
        </Field>
        <div className="absolute h-full flex items-center text-primary top-0 right-1 text-sm  pointer-events-none">
          <div className=" h-[24px] w-[24px] flex justify-center items-center">
            <img src={dropdown} alt="v" />
          </div>
        </div>
      </div>
      <div
        className={`text-[10px]  lg:text-[12px] leading-4 ${
          notShowError ? "hidden" : ""
        }`}
      >
        <ErrorMessage
          component={TextError}
          className={`text-danger`}
          name={name}
        />
      </div>
    </div>
  );
}

export default Select;
