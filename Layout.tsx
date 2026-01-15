const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ minHeight: "100vh" }}>
      {children}
    </div>
  );
};

export default Layout;
