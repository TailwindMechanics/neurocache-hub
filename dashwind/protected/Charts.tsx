//path: src\app\protected\Charts.tsx

import { useEffect, FC } from 'react';
import { useDispatch } from 'react-redux';
import Charts from '@/app/features/charts/charts';
import { setPageTitle } from '@/app/features/common/headerSlice';

const InternalPage: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle({ title : "Analytics"}));
    }, [dispatch]);

    return <Charts />;
}

export default InternalPage;