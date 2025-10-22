import sharedStyles from "../ui/shared.module.css";

export default function Page() {
  return (
    <main className={sharedStyles.section}>
      <embed
        src="/pdfs/resume.pdf"
        type="application/pdf"
        width="550"
        height="600"
      />
    </main>
  );
}