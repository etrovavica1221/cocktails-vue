import { render } from '@testing-library/vue'
import Welcome from '@/components/Welcome.vue'

describe('Welcome.vue', () => {
  it('renders "Cocktail Bar🍸"', () => {
    const header = 'Cocktail Bar🍸';
    const { getByText } = render(Welcome);
    getByText(header);
  })
});
