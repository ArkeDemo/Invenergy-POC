'use client'

import { RichText } from "@/components/richText";
import { ImageComponent } from "@/components/imageComponent";
import { CTA } from "@/components/cta";

export const Overview = (props: any) => {

    console.log('Overview', props);

    return (
        <section data-testid='overview section'>
            <div className="p-template-5-2-columns-overview">
                <div className="p-template-5-2-columns-overview__column p-template-5-2-columns-overview__column--left">
                    <div className="c-image" data-testid='overview image'>
                        <div className="c-image__wrapper c-image__wrapper--square">
                            <ImageComponent
                                className="c-image__image"
                                width={609}
                                height={609}
                                data={props.image}
                            />
                        </div>
                        <div className="p-template-5-2-columns-overview__image-caption c-caption">
                            <div className="c-caption__type">
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-template-5-2-columns-overview__column p-template-5-2-columns-overview__column--right">
                    <h1 className="p-template-5-2-columns-overview__title" data-testid='overview title'>
                        {props.headline}
                    </h1>
                    <div className="p-template-5-2-columns-overview__description" data-testid='overview description'>
                        <RichText text={props.headline_copy} />
                    </div>
                </div>


            </div>
            <CTA data={props.cta} />

        </section>
    )
}
