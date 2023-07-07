//path: src\app\components\Input\SelectBox.tsx

import React, { useState, ChangeEvent, FC } from 'react';
import InformationCircleIcon from '@heroicons/react/outline/InformationCircleIcon';

interface SelectBoxProps {
  labelTitle: string;
  labelDescription?: string;
  defaultValue?: string;
  containerStyle?: string;
  placeholder?: string;
  labelStyle?: string;
  options: Array<{ value?: string, name: string }>;
  updateType: string;
  updateFormValue: (obj: { updateType: string, value: string }) => void;
}

const SelectBox: FC<SelectBoxProps> = ({
  labelTitle, 
  labelDescription, 
  defaultValue, 
  containerStyle, 
  placeholder, 
  labelStyle, 
  options, 
  updateType, 
  updateFormValue
}) => {
  const [value, setValue] = useState<string>(defaultValue || "");

  const updateValue = (newValue: string) => {
    updateFormValue({updateType, value: newValue});
    setValue(newValue);
  };

  return (
    <div className={`inline-block ${containerStyle}`}>
      <label  className={`label  ${labelStyle}`}>
        <div className="label-text">{labelTitle}
          {labelDescription && <div className="tooltip tooltip-right" data-tip={labelDescription}><InformationCircleIcon className='w-4 h-4'/></div>}
        </div>
      </label>
      
      <select className="select select-bordered w-full" value={value} onChange={(e: ChangeEvent<HTMLSelectElement>) => updateValue(e.target.value)}>
        <option disabled value="PLACEHOLDER">{placeholder}</option>
        {
          options.map((o, k) => {
            return <option value={o.value || o.name} key={k}>{o.name}</option>
          })
        }
      </select>
    </div>
  );
};

export default SelectBox;
