import { Menu } from './components/menu'
import { Products } from './components/products'
import { Topbar } from './components/topbar'

function App() {
  return (
    <section
      className="main-container"
      style={{
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        gridTemplateRows: 'auto 1fr',
        height: '100vh',
      }}
    >
      <Menu />
      <Topbar />
      <Products />
    </section>
  )
}

export default App
