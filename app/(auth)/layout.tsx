export default function Authlayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <main>
    <div className="h-screen flex flex-col items-center justfiy-center">
      {children}
    </div>
   </main>
  );
}

