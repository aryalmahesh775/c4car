import { Input, Select, Textarea } from "./input";

const FormikControl = (props: any) => {
  const { control, title, test, selectOption, notShowError, autoNo, ...rest } =
    props;
  switch (control) {
    case "input":
      return <Input test={test} {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    case "select":
      return (
        <Select
          {...rest}
          title={title}
          autoNo={autoNo}
          notShowError={notShowError}
          selectOption={selectOption}
        />
      );
    default:
      return null;
  }
};

export default FormikControl;
