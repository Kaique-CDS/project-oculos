import { BellDot } from 'lucide-react'
import './styles.scss'

export function Topbar() {
  return (
    <header className="topbar">
      <h3>Ecommerce</h3>

      <input className="search" type="text" placeholder="Search" />

      <div className="notification">
        <BellDot />
      </div>

      <div className="divider" />

      <img
        className="avatar"
        src="https://image.api.playstation.com/vulcan/img/cfn/11307cHSwqnuakr0odqcJWPEBbmcbbNOKyK6HS2Cy3mtIaIoVVVi9NBfSBMmyQvjQF7jMtVfe_G7PyQ8OKa9W3OrfykvSePD.png?w=440&thumb=false"
        alt="avatar"
      />
    </header>
  )
}
