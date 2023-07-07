//path: src\app\protected\Welcome.tsx

import { useEffect, FC } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '@/app/features/common/headerSlice';
import { Link } from 'react-router-dom';
import TemplatePointers from '@/app/features/user/components/TemplatePointers';

const InternalPage: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle({ title : "" }));
    }, [dispatch]);

    return(
      <div className="hero h-4/5 bg-base-200">
        <div className="hero-content">
          <div className="max-w-md">
              <TemplatePointers />
              <Link to="/app/dashboard"><button className="btn bg-base-100 btn-outline">Get Started</button></Link>
          </div>
        </div>
      </div>
    );
}

export default InternalPage;
