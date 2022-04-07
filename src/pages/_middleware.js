// import { v4 as uuidv4 } from 'uuid';
import { NextResponse } from 'next/server';
// import { VISITOR_UID } from '../library/constants';
// import { fetchCmsApi } from '../utils/fetchInstances';

// async function setVisitorCookie(request, response) {
//   const cookie = request.cookies[VISITOR_UID];
//
//   if (!cookie) {
//     const uid = uuidv4();
//     const { data } = await fetchCmsApi({
//       url: '/visitors',
//       method: 'POST',
//       body: {
//         data: {
//           uid,
//         },
//       },
//     });
//
//     response.cookie(VISITOR_UID, data.attributes.uid);
//   }
// }

// eslint-disable-next-line import/prefer-default-export
export async function middleware() {
  const res = NextResponse.next();
  // await setVisitorCookie(req, res);
  return res;
}
