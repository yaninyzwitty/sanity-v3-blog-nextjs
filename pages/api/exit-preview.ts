// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';


export default function Preview(
   req: NextApiRequest,
   res: NextApiResponse,
) {
    res.clearPreviewData({});
    res.writeHead(307, { location: '/' });
    res.end();
}
