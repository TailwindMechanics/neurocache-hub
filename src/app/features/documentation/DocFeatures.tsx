//path: src\app\features\documentation\DocFeatures.tsx

import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setPageTitle } from "../common/headerSlice"
import FeaturesNav from "./components/FeaturesNav"
import FeaturesContent from "./components/FeaturesContent"


const Features: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Documentation"}))
    }, [dispatch])


    return(
        <>
            <div className="bg-base-100 flex overflow-hidden rounded-lg" style={{height : "82vh"}}>
                <div className="flex-none p-4">
                    <FeaturesNav activeIndex={1}/>
                </div>

                <div className="grow pt-16 overflow-y-scroll">
                    <FeaturesContent />
                </div>
            </div>     
        </>
    )
}

export default Features;
