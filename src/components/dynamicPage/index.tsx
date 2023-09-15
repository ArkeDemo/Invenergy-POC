'use client'
// import { Navbar, Footer } from '@/components/index'
import { Footer } from '@/components/footer/index'
import { Navbar } from '@/components/navbar/index'
import { Overview } from '@/components/sections/overview/index'
import { Quote } from '@/components/sections/quote/index'
import { TwoColumn } from '@/components/sections/twoColumn/index'

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
            <Navbar {...website.header[0]} website={website} />
            <div>
                {page.content.map((section: any, i: number) => {
                    const {
                        overview, two_column, quote
                    } = section;


                    if (overview) {
                        return <Overview key={i} {...section.overview} />
                    }

                    if (two_column) {
                        return <TwoColumn key={i} {...section.two_column} />
                    }

                    if (quote) {
                        return <Quote key={i} {...section.quote} />
                    }

                })}
            </div>
            <Footer {...website.footer[0]} />
        </div>
    )
}
