
import { Outlet } from 'react-router-dom';
import { Sidebar } from '@/widgets/Sidebar/ui/Sidebar'; 
import { Header } from '@/widgets/Header/ui/Header';  
import { Footer } from '@/widgets/Footer/ui/Footer';
import { SidebarProvider } from '@/widgets/Sidebar/model/SidebarContext';

export const OwnerLayout = () => {
  return (
    <SidebarProvider>
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />
        
        <main className="p-6 md:p-8 flex-grow">
          <Outlet /> 
        </main>
        <div className='mt-[5rem]'>
        <Footer/>
        </div>
      </div>
    </div>
    </SidebarProvider>
  );
};