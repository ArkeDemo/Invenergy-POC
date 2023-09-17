import React from 'react';

import { RichText } from "@/components/richText";

export const Overview1 = (props: any) => {

  const { headline_copy, image, text_color } = props;

  return (
    <>
      <section data-testid='overview section' style={{ backgroundImage: `url("${image.image.url}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '60rem', backgroundPosition: 'center' }}>
        <div
          className="p-template-4__overview"
          // style={{ height: '70rem' }}
        >
          <div className="p-template-4__overview-description" data-testid='overview description' style={{ color: text_color, width: '75%' }}>
            <RichText text={headline_copy} />
          </div>
        </div>
      </section>
    </>
  )
}
