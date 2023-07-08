//path: src\app\protected\Dashboard.tsx

import { useEffect, FC } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '@/app/features/common/headerSlice';
import Dashboard from '../features/dashboard/dashboard';

const InternalPage: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle({ title : "Dashboard"}));
    }, [dispatch]);

    return <Dashboard />;
}

export default InternalPage;
