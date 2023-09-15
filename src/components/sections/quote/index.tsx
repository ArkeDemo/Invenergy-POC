'use client'

import { RichText } from "@/components/richText";
import { CTA } from "@/components/cta";

export const Quote = (props: any) => {

    console.log('Quote', props);

    return (
        <section>
            <div className="c-quote">
                <div className="c-quote__header c-quote__header--icon" />
                <div className="c-quote__header" data-testid='quote title'>{props.headline}</div>
                <div className="c-quote__type" data-testid='quote text'>
                    <RichText text={props.headline_copy} />
                </div>
            </div>
            <br/>
            <CTA data={props.cta} />

        </section>
    )
}
