import Image from "next/image";
import sharedStyles from "../ui/shared.module.css";

export default function Page() {
  const aboutText = "Hey there, I'm Aisha! I'm currently based in Seattle, Washington.";
  return (
    <div className={sharedStyles.section}>
        <p>{aboutText}</p>
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