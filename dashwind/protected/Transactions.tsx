//path: src\app\protected\Transactions.tsx

import { useEffect, FC } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '@/app/features/common/headerSlice';
import Transactions from '../../src/app/features/transactions/transactions';

const InternalPage: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle({ title : "Transactions" }));
    }, [dispatch]);

    return <Transactions />;
}

export default InternalPage;
