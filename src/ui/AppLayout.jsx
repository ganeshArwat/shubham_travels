import { Outlet } from 'react-router-dom';
import Header from './Header';

function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Fixed Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1 pt-[88px] overflow-x-hidden bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
