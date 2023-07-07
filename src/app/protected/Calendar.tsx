//path: src\app\protected\Calendar.tsx

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '@/app/features/common/headerSlice'
import Calendar from '../features/calendar/Calendar'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Calendar"}))
      }, [])


    return(
        <Calendar />
    )
}

export default InternalPage