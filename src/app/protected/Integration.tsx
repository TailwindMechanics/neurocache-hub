//path: src\app\protected\Integration.tsx

import { useEffect, FC } from 'react';
import { useDispatch } from 'react-redux';
import Integration from '@/app/features/integration/integration';
import { setPageTitle } from '@/app/features/common/headerSlice';

const InternalPage: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle({ title : "Integrations" }));
    }, [dispatch]);

    return <Integration />;
}

export default InternalPage;
