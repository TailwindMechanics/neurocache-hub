//path: src\app\features\documentation\DocComponents.tsx

import { useEffect } from "react"
import { useDispatch } from "react-redux"
import TitleCard from "../../components/Cards/TitleCard"
import { setPageTitle } from "../common/headerSlice"
import DocComponentsNav from "./components/DocComponentsNav"
import DocComponentsContent from "./components/DocComponentsContent"
import { AppDispatch } from "@/app/store"


const DocComponents: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Documentation"}))
    }, [dispatch])


    return(
        <>
            <div className="bg-base-100 flex overflow-hidden rounded-lg" style={{height : "82vh"}}>
                <div className="flex-none p-4">
                    <DocComponentsNav activeIndex={1}/>
                </div>

                <div className="grow pt-16 overflow-y-scroll">
                    <DocComponentsContent />
                </div>
            </div>     
        </>
    )
}

export default DocComponents;
