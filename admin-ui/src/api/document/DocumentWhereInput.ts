import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type DocumentWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  title?: StringFilter;
};
