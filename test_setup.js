import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

window.alert = () => { };
window.matchMedia = () => ({});
window.scrollTo = () => { };

configure({ adapter: new Adapter() });