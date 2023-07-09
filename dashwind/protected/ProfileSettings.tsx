//path: src\app\protected\ProfileSettings.tsx

import { useEffect, FC } from 'react';
import { useDispatch } from 'react-redux';
import ProfileSettings from '@/app/features/settings/profilesettings/profileSettings';
import { setPageTitle } from '@/app/features/common/headerSlice';

const InternalPage: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle({ title : "Settings" }));
    }, [dispatch]);

    return <ProfileSettings />;
}

export default InternalPage;
