import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <main className="min-h-[calc(100vh-146px)]">
      <Outlet />
    </main>
  )
}

export default Layout
