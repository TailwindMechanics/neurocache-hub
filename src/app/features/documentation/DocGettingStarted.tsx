//path: src\app\features\documentation\DocGettingStarted.tsx

import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setPageTitle } from "../common/headerSlice"
import GettingStartedContent from "./components/GettingStartedContent"
import GettingStartedNav from "@/app/components/generic/react/GettingStartedNav"


const GettingStarted: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Documentation"}))
    }, [dispatch])


    return(
        <>
            <div className="bg-base-100 flex overflow-hidden rounded-lg" style={{height : "82vh"}}>
                <div className="flex-none p-4">
                    <GettingStartedNav activeIndex={1}/>
                </div>

                <div className="grow pt-16 overflow-y-scroll">
                    <GettingStartedContent />
                </div>
            </div>     
        </>
    )
}

export default GettingStarted;
