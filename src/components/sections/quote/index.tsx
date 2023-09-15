'use client'

import { RichText } from "@/components/richText";

export const Quote = (props: any) => {

    console.log('Quote', props);

    return (
        <section>
            <div>
                <div className="c-quote">
                    {/* <div className="c-quote__header">Quote</div> */}
                    <div className="c-quote__type">
                        <RichText text={props.headline} />
                    </div>
                </div>
            </div>

        </section>
    )
}
