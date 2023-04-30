import {Quote} from './types';

const titleAndDescriptionQuoteIncludesFilter = (
  quote: Quote,
  filter: string,
) => {
  const uncapitalizedTitle = quote.title.toLowerCase();
  const uncapitalizedDescription = quote.description.toLowerCase();
  const uncapitalizedFilter = filter.toLowerCase();
  return (
    uncapitalizedTitle.includes(uncapitalizedFilter) ||
    uncapitalizedDescription.includes(uncapitalizedFilter)
  );
};

export default titleAndDescriptionQuoteIncludesFilter;
