import { mount } from '@vue/test-utils';
import Todos from '@/components/Todos.vue';

describe('<Todos />', () => {
  it('should render Todos correctly', () => {
  	const wrapper = mount(Todos);
    expect(wrapper).toMatchSnapshot();
  });
});
