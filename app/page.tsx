import Link from "next/link";
import LikeButton from "./ui/LikeButton";

export default function Home() {
  return (
    <div>
      Prisma Press Frontend
      <p>Blog Page Route - <Link href={"/blogs/1"}>Blogs</Link></p>
      <LikeButton />
    </div>
  );
}
