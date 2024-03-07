import { cva, VariantProps } from "class-variance-authority";

const inputCVA = cva("h-10 ", {
  variants: {
    state: {
      Default: "pl-8  focus:outline-primary  rounded-lg",
      lightBackground: "border-2  rounded-l-lg pl-4",
    },
  },
});

interface InputProps extends VariantProps<typeof inputCVA> {
  /**
   * Input Label
   */
  label?: string;

  /**
   * Default HTML input types
   */

  inputType: string;

  /**
   * name of the input
   */

  name: string;

  /**
   * the handle Change event
   */

  handleChange?: (value: string, name: string) => void;

  /**
   * placeholder prop
   */
  placeholder?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Input = ({
  state,
  name,
  inputType,
  handleChange,
  placeholder,
}: InputProps) => {
  return (
    <div className="">
      <label htmlFor={name}></label>
      <input
        type={inputType}
        className={inputCVA({ state })}
        onChange={(event) => {
          handleChange && handleChange(event.target.value, event.target.name);
        }}
        name={name}
        required
        placeholder={placeholder}
      />
    </div>
  );
};
