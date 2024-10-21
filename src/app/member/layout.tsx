export default function SiteAdminLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div>
        <span>Member Layout</span>
        {children}
    </div>
  );
}
