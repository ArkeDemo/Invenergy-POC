'use client'
import { RichText } from "@/components/richText";

export const TwoColumn = (props: any) => {

    console.log('TwoColumn', props);

    return (
        <>
            <div>TwoColumn</div>
            <RichText text={props.headline}/>
        </>
    )
}
