//path: src\components\dashboard\datepicker.tsx

import { Dropdown } from 'flowbite-react';
import { FC } from 'react'


const Datepicker: FC = () => {
    return (
        <div className="text-sm text-text-light">
            <Dropdown className='text-text-light' inline label="Last 7 days">
                <Dropdown.Item>
                    <strong>Sep 16, 2021 - Sep 22, 2021</strong>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Yesterday</Dropdown.Item>
                <Dropdown.Item>Today</Dropdown.Item>
                <Dropdown.Item>Last 7 days</Dropdown.Item>
                <Dropdown.Item>Last 30 days</Dropdown.Item>
                <Dropdown.Item>Last 90 days</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Custom...</Dropdown.Item>
            </Dropdown>
        </div>
    );
};

export default Datepicker