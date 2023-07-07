//path: src\app\protected\Leads.tsx

import { useEffect, FC } from 'react';
import { useDispatch } from 'react-redux';
import Leads from '@/app/features/leads/leads';
import { setPageTitle } from '@/app/features/common/headerSlice';

const InternalPage: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle({ title : "Leads" }));
    }, [dispatch]);

    return <Leads />;
}

export default InternalPage;
