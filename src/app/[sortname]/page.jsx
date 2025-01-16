import React from 'react';
import { redirect } from 'next/navigation';
import Link from '@/Models/linkModel';


async function getLink({ params }) {
  const { sortname } = params;
  const data = await Link.findOne({ shortLink: sortname });
  return data;
}

async function Page({ params }) {
  const { sortname } = params;
  const LinkData = await getLink({ params });

  if (LinkData) {
    // Redirect to the originalLink if found
    redirect(LinkData.originalLink);
  } else {
    // Handle case where no Link data is found
    return <div>Link not found</div>;
  }

  return (
    <div>
      Short link: {sortname}
    </div>
  );
}

export default Page;
