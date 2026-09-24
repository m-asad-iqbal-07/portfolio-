import { permanentRedirect } from "next/navigation";

export default function NowPage() {
  permanentRedirect("/about");
}
