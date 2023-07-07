//path: src\app\protected\Team.tsx

import { useEffect, FC } from 'react';
import { useDispatch } from 'react-redux';
import Team from '@/app/features/settings/team/team';
import { setPageTitle } from '@/app/features/common/headerSlice';

const InternalPage: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle({ title : "Team Members" }));
    }, [dispatch]);

    return <Team />;
}

export default InternalPage;
