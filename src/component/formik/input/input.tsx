import { ErrorMessage, Field, useFormikContext } from "formik";
import TextError from "../textError";
import { useEffect, useRef, useState } from "react";

const Input = (props: any) => {
  const {
    label,
    test = false,
    prefix,
    name,
    className,
    initiallyText,
    hideIcon,
    ...rest
  } = props;

  const prefixRef = useRef<HTMLDivElement>(null);
  const [prefixWidth, setPrefixWidth] = useState(0);

  useEffect(() => {
    const prefixDiv = prefixRef.current;
    if (prefixDiv) {
      setPrefixWidth(prefixDiv.offsetWidth);
    }
  }, []);

  // Access the Formik context to get the form values
  const { values }: any = useFormikContext();

  // Get the value of the input field
  const fieldValue = values[name];

  const type = initiallyText ? "text" : rest.type;

  return (
    <div className="flex flex-col gap-[2px]">
      <label
        className={`text-primary text-[10px] font-bold lg:text-[12px] uppercase`}
        htmlFor={name}
      >
        {label}
      </label>
      <div className="relative">
        {prefix && (
          <div
            className="absolute h-full flex text-textSecondary items-center left-[10px] text-sm"
            ref={prefixRef}
          >
            <p>{prefix}</p>
          </div>
        )}
        <Field
          title={fieldValue}
          className={`transition ease-in-out delay-150 w-full border-borderColor bg-white truncate leading-[19.07px] text-textSecondary text-sm  border-[1px] py-[8px] px-2 lg:px-3  rounded-md focus:outline-none focus:border-blue-300 ${
            initiallyText || hideIcon ? "hide-datetime-icon" : ""
          } ${className || "placeholder:text-textSecondary "}`}
          id={name}
          name={name}
          style={{
            ...rest.style,
            paddingLeft: prefixWidth + 12,
          }}
          {...rest}
          type={type}
          autoComplete={"Off"}
          onFocus={
            initiallyText
              ? (e: React.FocusEvent<HTMLInputElement>) =>
                  (e.target.type = rest.type)
              : () => undefined
          }
          onBlur={
            initiallyText
              ? (e: React.FocusEvent<HTMLInputElement>) =>
                  (e.target.type = "text")
              : () => undefined
          }
        ></Field>
      </div>

      <div className="text-[10px] lg:text-[12px] leading-4">
        <ErrorMessage
          component={TextError}
          className={`text-danger text-xs`}
          name={name}
        />
      </div>
    </div>
  );
};

export default Input;
