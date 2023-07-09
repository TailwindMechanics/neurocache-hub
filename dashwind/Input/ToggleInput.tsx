//path: src\app\components\Input\ToggleInput.tsx

import { useState, ChangeEvent } from "react";

interface ToggleInputProps {
  labelTitle: string;
  labelStyle?: string;
  type?: string;
  containerStyle?: string;
  defaultValue?: boolean;
  placeholder?: string;
  updateFormValue: (value: { updateType: string; value: boolean }) => void;
  updateType: string;
}

const ToggleInput: React.FC<ToggleInputProps> = ({
  labelTitle,
  labelStyle,
  type,
  containerStyle,
  defaultValue,
  placeholder,
  updateFormValue,
  updateType,
}) => {
  const [value, setValue] = useState(defaultValue || false);

  const updateToggleValue = () => {
    setValue(!value);
    updateFormValue({ updateType, value: !value });
  };

  return (
    <div className={`form-control w-full ${containerStyle}`}>
      <label className="label cursor-pointer">
        <span className={"label-text text-base-content " + labelStyle}>
          {labelTitle}
        </span>
        <input
          type="checkbox"
          className="toggle"
          checked={value}
          onChange={updateToggleValue}
        />
      </label>
    </div>
  );
};

export default ToggleInput;
