import {CATEGORIES_ENUM} from '../constants/enums';

export const getCategoryBackgroundColor = (theme, category) => {
  switch (category) {
    case CATEGORIES_ENUM.FEATURE:
      return theme.colors.feature;
    case CATEGORIES_ENUM.BUG:
      return theme.colors.bug;
    case CATEGORIES_ENUM.IMPROVEMENT:
      return theme.colors.improvement;
    case CATEGORIES_ENUM.REFACTOR:
      return theme.colors.refactor;
    case CATEGORIES_ENUM.INFRA:
      return theme.colors.infra;
    default:
      return theme.colors.primary;
  }
};