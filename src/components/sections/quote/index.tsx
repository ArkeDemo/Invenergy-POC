'use client'

import { RichText } from "@/components/richText";
import { CTA } from "@/components/cta";

export const Quote = (props: any) => {

    const { headline, headline_copy, cta, background_color, text_color } = props;

    return (
        <section>
            <div className="c-quote" style={{ backgroundColor: background_color, padding: '8rem' }}>
                {/* <div className="c-quote__header c-quote__header--icon" /> */}
                <div className="c-quote__header" data-testid='quote title' style={{ color: text_color }}>{headline}</div>
                <div className="c-quote__type" data-testid='quote text' style={{ color: text_color }}>
                    <RichText text={headline_copy} />
                </div>
            </div>
            <br />
            <CTA data={cta} />
        </section>
    )
}
