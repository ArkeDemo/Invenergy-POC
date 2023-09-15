'use client'

import { RichText } from "@/components/richText";

export const Overview = (props: any) => {

    console.log('Overview', props);

    return (
        <>
            <div>Overview</div>
            <RichText text={props.headline}/>
        </>
    )
}
