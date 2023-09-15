import { Stack as StackStack } from 'contentstack';

const Stack = StackStack({
    api_key: process.env.CONTENTSTACK_API_KEY || '',
    delivery_token: process.env.DELIVERY_TOKEN || '',
    environment: process.env.ENVIRONMENT || '',
    // region : '',  can be eu, us, azure-na, or undefined
    branch: '',
    fetchOptions: {},
    //   live_preview: {},
});

export const getContentstackContent = async (contentType: string, entry: string) => {
    let content: any[] = [];

    const Query = Stack.ContentType(contentType).Entry(entry)
        .includeReference([
            'footer',
            'footer.links',
            'header',
            'header.links',
        ])
    await Query.fetch()
        .then(function success(entry) {
            content = entry.toJSON();
        }, function error(err) {
            // err object
        });

    return content;
};

export const getContentstackContentQuery = async (contentType: string, params: any) => {
    let content: any[] = [];
    const { url, tags } = params;

    const Query = Stack.ContentType(contentType).Query()
        .where('url', `${url}`)
        // .where('url', `/${id}`)
        // .includeContentType()
        // .includeCount()
        .includeReference([
            'content.overview.cta',
            'content.quote.cta',
            'content.two_column.cta',
        ])
        .tags(tags)
        .toJSON()
        .find()
    // .fetch()
    await Query
        .then(function success(entry) {
            content = entry[0][0];
            if (!content) {
                throw new Error('Not found')
            }

        }, function error(err) {
            // err object
        });

    return content;
};
