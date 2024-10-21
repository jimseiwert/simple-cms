export default function SiteAdminLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div>
        <span>Site Admin Layout</span>
        {children}
    </div>
  );
}
