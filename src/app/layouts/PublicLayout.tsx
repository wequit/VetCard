
import { Outlet } from 'react-router-dom';
import { Footer } from '@/widgets/Footer/ui/Footer'; 

export const PublicLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};