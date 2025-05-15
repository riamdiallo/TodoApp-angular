import Dexie, {Table} from 'dexie';
import { User} from '../models/user.model'

export class AngularTodoDB extends Dexie {
  users!: Table<User, string> ;
  constructor() {
    super ('AngularTodoDB');
    this.version(1).stores({
      users : 'email, password'
    })
  }
}
