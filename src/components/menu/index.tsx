import {
  CalendarDays,
  ClipboardCheck,
  ContactRound,
  FolderKanban,
  FolderOpen,
  LayoutDashboard,
  Mail,
  MessageSquareText,
  NotebookPen,
  ShoppingCart,
} from 'lucide-react'
import './styles.scss'

export function Menu() {
  return (
    <nav className="main-menu">
      <ul>
        <li>
          <LayoutDashboard />
          Dashboard
        </li>

        <li>
          <ShoppingCart />
          E-commerce
        </li>

        <li>
          <CalendarDays />
          Calendar
        </li>

        <li>
          <Mail />
          Mail
        </li>

        <li>
          <MessageSquareText />
          Chat
        </li>

        <li>
          <ClipboardCheck />
          Tasks
        </li>

        <li>
          <FolderKanban />
          Projects
        </li>

        <li>
          <FolderOpen />
          File Manager
        </li>

        <li>
          <NotebookPen />
          Notes
        </li>

        <li>
          <ContactRound />
          Contacts
        </li>
      </ul>
    </nav>
  )
}
