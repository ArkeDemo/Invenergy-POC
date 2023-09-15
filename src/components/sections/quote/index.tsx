'use client'
import { RichText } from "@/components/richText";

export const Quote = (props: any) => {

    console.log('Quote', props);

    return (
        <>
            <div>Quote</div>
            <RichText text={props.headline}/>

        </>
    )
}
