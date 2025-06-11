import { Content } from "./Content";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <main className="bg-slate-1 text-slate-11 grid min-h-dvh text-sm">
      <div className="flex flex-col">{children}</div>
    </main>
  );
};

export const Dashboard: React.FC = () => {
  return (
    <Layout>
      <Header />
      <div className="flex h-full">
        <Sidebar />
        <Content />
      </div>
    </Layout>
  );
};
