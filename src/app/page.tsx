//path: src\app\page.tsx

import HubLayout from '@/components/hub/hubLayout';
import { FC } from 'react'


const page: FC = () => {
  return <>
      <HubLayout headerText='Dashboard'>
        <div>Dashboard</div>
      </HubLayout>
  </>
}

export default page