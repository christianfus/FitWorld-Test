import { Ph_entry } from './ph_entry';
import { Lifts } from './lifts';

export interface User {
    username: String;
    password: String;
    mail: String;
    ph_entry: Array<Ph_entry>;
    lifts: Array<Lifts>;
}
