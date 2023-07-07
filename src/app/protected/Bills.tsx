//path: src\app\protected\Bills.tsx

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '@/app/features/common/headerSlice'
import Billing from '@/app/features/settings/billing/billing'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Bills"}))
      }, [])


    return(
        <Billing />
    )
}

export default InternalPage