//path: src\app\protected\Blank.tsx

import { useEffect, FC } from 'react'
import { useDispatch } from 'react-redux'

import DocumentIcon  from '@heroicons/react/24/solid/DocumentIcon'
import { setPageTitle } from '@/app/features/common/headerSlice'

const InternalPage: FC = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Page Title"}))
      }, [])
      
    return(
        <div className="hero h-4/5 bg-base-200">
            <div className="hero-content text-accent text-center">
                <div className="max-w-md">
                <DocumentIcon className="h-48 w-48 inline-block"/>
                <h1 className="text-5xl mt-2 font-bold">Blank Page</h1>
                </div>
            </div>
        </div>
    )
}

export default InternalPage