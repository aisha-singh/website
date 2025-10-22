import Image from "next/image";
import sharedStyles from "../ui/shared.module.css";

export default function Page() {
  return (
    <div className={sharedStyles.section}>
        <p>Hey there, I'm Aisha! I'm currently based in Seattle, Washington.</p>
        <Image
          src="/images/me.png"
          alt="me, aisha"
          width={300}
          height={225}
          priority
        />
    </div>
  );
}