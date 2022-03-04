import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import { fetchCmsApi } from '../utils/fetchInstances';

const VISITOR_UID = 'visitor-uid';

async function setVisitorCookie(request, response) {
  const cookie = request.cookies[VISITOR_UID];

  // TODO проверить почему на сервере постоянно создается visitor
  if (!cookie) {
    const uid = uuidv4();
    const { data } = await fetchCmsApi({
      url: '/visitors',
      method: 'POST',
      body: {
        data: {
          uid,
        },
      },
    });

    response.cookie(VISITOR_UID, data.attributes.uid);
  }
}

// eslint-disable-next-line import/prefer-default-export
export async function middleware(req) {
  const res = NextResponse.next();
  await setVisitorCookie(req, res);
  return res;
}
