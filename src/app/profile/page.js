import React from 'react';
import Link from 'next/link';

export default function Page() {
  return (
    <div> {/* Wrapping elements within a single parent element */}
      <section>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores tenetur necessitatibus aliquam explicabo, reprehenderit praesentium rem ab consequatur debitis eum, odio optio ut repudiandae veniam aperiam dolore ullam id accusantium. Quidem magnam quo eaque non maiores perspiciatis esse animi repellendus, placeat, id similique iusto explicabo quisquam eveniet consequuntur maxime soluta modi nemo vel rem. Beatae repellat modi et ex exercitationem?
        </p>
      </section>
      <Link href="/">Home</Link>
    </div>
  );
}
