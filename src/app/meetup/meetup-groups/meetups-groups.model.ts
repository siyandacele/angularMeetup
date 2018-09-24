import { Category } from './../../shared/category.model';

interface Organizer {
  id: number;
  name: string;
  bio: string;
  thumb_link: string;
}

interface NextEvent {
  id: string;
  name: string;
  yes_rsvp_count: number;
  time: number;
  utc_offset: number;
}

export class MeetupGroups {
  public score: number;
  public name: string;
  public status: string;
  public link: string;
  public urlname: string;
  public description: string;
  public created: number;
  public localized_location: string;
  public state: string;
  public join_mode: string;
  public members: number;
  public organizer: Organizer;
  public next_event: NextEvent;
  public category: Category;
  public meta_category: Category[];

  constructor(score: number,
    name: string, status:
    string, link: string,
    urlname: string,
    desc: string,
    created: number,
    location: string,
    join_mode: string,
    members: number,
    organizer: Organizer,
    next_event: NextEvent,
    category: Category,
    meta_category: Category[]) {
      this.score = score;
      this.name = name;
      this.status = status;
      this.link = link;
      this.urlname = urlname;
      this.description = desc;
      this.created = created;
      this.localized_location = location;
      this.join_mode = join_mode;
      this.members = members;
      this.organizer = organizer;
      this.next_event = next_event;
      this.category = category;
      this.meta_category = meta_category;
  }
}
