// import { PineconeClient } from '@pinecone-database/pinecone'

// export const getPineconeClient = async () => {
//     const client = new PineconeClient()

//     await client.init({
//         apiKey: process.env.PINECONE_API_KEY!,
//         environment: 'gcp-starter-free',
//     })

//     return client
// }

// export const getPinecone = new Pinecone({
//     apiKey: process.env.PINECONE_API_KEY!,
//     environment: 'us-east1-gcp',
// })

import { Pinecone } from '@pinecone-database/pinecone'

export const getPinecone = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY!,
    environment: 'gcp-starter',
})
