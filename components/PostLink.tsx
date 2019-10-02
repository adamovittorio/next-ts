import Link from "next/link";
import { Show } from "../interfaces";

const PostLink = (props: { show: Show }) => (
  <li>
    <Link href={`/p/[id]`} as={`/p/${props.show.id}`}>
      <a>{props.show.name}</a>
    </Link>
    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </li>
);

export default PostLink;
