import { Field, ErrorMessage } from "formik";
import TextError from "../textError";

function Textarea(props: any) {
  const { label, name, ...rest } = props;
  return (
    <div className="flex flex-col gap-[2px]">
      <label
        className={`text-primary text-[10px] font-bold lg:text-[12px] uppercase`}
        htmlFor={name}
      >
        {label}
      </label>
      <Field
        className={`transition leading-[19.07px] bg-white ease-in-out delay-150 w-full border-borderColor text-textSecondary text-sm xl:text-[15px]  border-[1px] py-[5px] px-2 lg:px-3 lg:my-[5px] rounded-md placeholder:text-textSecondary focus:outline-none focus:border-blue-300`}
        as="textarea"
        id={name}
        name={name}
        {...rest}
      />
      <div className="text-[10px] lg:text-[12px] leading-4">
        <ErrorMessage
          className={`text-danger`}
          component={TextError}
          name={name}
        />
      </div>
    </div>
  );
}

export default Textarea;
