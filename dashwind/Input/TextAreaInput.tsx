//path: src\app\components\Input\TextAreaInput.tsx

import { ChangeEvent, useState } from "react";

interface TextAreaInputProps {
  labelTitle: string;
  labelStyle?: string;
  type?: string;
  containerStyle?: string;
  defaultValue?: string;
  placeholder?: string;
  updateFormValue: (value: {updateType: string, value: string}) => void;
  updateType: string;
}

const TextAreaInput: React.FC<TextAreaInputProps> = ({
  labelTitle, 
  labelStyle, 
  type, 
  containerStyle, 
  defaultValue, 
  placeholder, 
  updateFormValue, 
  updateType
}) => {
  const [value, setValue] = useState(defaultValue || "");

  const updateInputValue = (val: string) => {
    setValue(val);
    updateFormValue({updateType, value: val});
  };

  return (
    <div className={`form-control w-full ${containerStyle}`}>
      <label className="label">
        <span className={"label-text text-base-content " + labelStyle}>{labelTitle}</span>
      </label>
      <textarea 
        value={value} 
        className="textarea textarea-bordered w-full" 
        placeholder={placeholder || ""} 
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => updateInputValue(e.target.value)}>
      </textarea>
    </div>
  );
};

export default TextAreaInput;
