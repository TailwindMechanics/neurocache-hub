import { FC } from 'react';
import Link from 'next/link';
import GettingStartedNav from '@/app/components/generic/react/GettingStartedNav';


const Documentation: FC = () => {
    return (
        <>
            <div className="min-h-screen bg-base-200 flex items-center">
                <div className="card mx-auto w-full max-w-4xl  shadow-xl">
                    <div className="py-12 p-10 h-screen flex overflow-hidden  bg-base-100 rounded-xl" >
                        <div className="flex-none p-4 overflow-y-scroll gap-6 ">
                            <h1 className='text-3xl font-bold mb-2'>Dashwind</h1>
                            <Link href="/login">
                                <a><button type="submit" className={"btn normal-case btn-xs btn-primary"}>Live Preview</button></a>
                            </Link>

                            <GettingStartedNav activeIndex={0} />
                            <FeaturesNav />
                            <DocComponentsNav />
                        </div>

                        <div className="grow pt-16  overflow-y-scroll">
                            <GettingStartedContent />
                            <FeaturesContent />
                            <DocComponentsContent />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Documentation;