import { render } from '@testing-library/vue'
import Cocktails from '@/components/Cocktails.vue'

describe('Cocktails.vue', () => {
  it('renders searchBar and its label', () => {
    const { queryByLabelText } = render(Cocktails);
    queryByLabelText("Search by desired ingredient or cocktail name:");
  })
});

describe('Cocktails.vue', () => {
  it('renders cocktails container', () => {
    const { queryByTestId } = render(Cocktails);
    queryByTestId("cocktails-menu");
  })

  it('renders cocktails container', () => {
    const { queryByTestId } = render(Cocktails);
    queryByTestId("cocktails-menu");
  })
});