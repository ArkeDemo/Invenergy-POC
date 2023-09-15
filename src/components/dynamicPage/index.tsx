'use client'
// import { Navbar, Footer } from '@/components/index'
import { Footer } from '@/components/footer/index'
import { Navbar } from '@/components/navbar/index'
import { Overview } from '@/components/sections/overview/index'
import { Quote } from '@/components/sections/quote/index'

export const DynamicPage = (props: any) => {
    const { website, page } = props.contentstack;

    console.log(props);
    console.log(props.contentstack.website)
    console.log(props.contentstack.page)
    console.log('=====')

    if (!page) {
        return (
            <div>Not Found</div>
        )
    }

    return (
        <div className='l-layout'>
            <Navbar navbar={website.header[0]} website={website} />
            <main className="l-layout__content">
                <div>
                    <div className='c-divider c-divider--transparent c-divider--top' />

                    {page.content.map((section: any, i: number) => {
                        const {
                            overview, quote
                        } = section;


                        if (overview) {
                            return <Overview key={i} {...section.overview} />
                        }

                        if (quote) {
                            return <Quote key={i} {...section.quote} />
                        }

                    })}
                    <div className='c-divider c-divider--transparent c-divider--top' />
                </div>
            </main>

            <Footer footer={website.footer[0]} />
        </div>
    )
}
