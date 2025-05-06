export interface IndexCategoriesInterface {
  id: number;
  name: string;
  slug: string;
  parent: number | string | null;
}

export interface ShowCategoryInterface {
  name: string;
  slug: string;
  parent: number | string | null;
}

export interface CreateCategoryInterface {
  name: FormDataEntryValue | null;
  slug: FormDataEntryValue | null;
  parent: FormDataEntryValue | null;
}

export interface UpdateCategoryInterface {
  name: FormDataEntryValue | null;
  slug: FormDataEntryValue | null;
  parent?: FormDataEntryValue | null;
}
