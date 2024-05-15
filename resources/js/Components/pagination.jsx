import {Link} from "@inertiajs/react";
import SecondaryButton from "./SecondaryButton";
import { useState } from "react";
export default function pagination({Links, meta}){
  const [prev, prevPage] = useState(Links.prev);
  const [next, nextPage] = useState(Links.next);

  return(
    <nav className="text-centers mt-3 flex items-center flex-row gap-20">
        <SecondaryButton>
          <Link className=" text-2xl" rel="stylesheet" href={prev}>&#8592;</Link>
        </SecondaryButton>
          <h1 className=" text-2xl" >{JSON.stringify(meta.current_page)}</h1>
        <SecondaryButton>
          <Link className=" text-2xl" rel="stylesheet" href={next} > &#8594;</Link>
        </SecondaryButton>

    </nav>
  )
}
