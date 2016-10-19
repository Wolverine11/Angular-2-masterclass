import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsDetailComponentComponent } from './contacts-detail/contacts-detail-component.component';

export const ContactsAppRoutes = [
  { path: '', component: ContactsListComponent },
  { path: 'contact/:id', component: ContactsDetailComponentComponent }
]