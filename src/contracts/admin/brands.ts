export interface IndexBrandsInterface {
  id: number;
  name: string;
  slug: string;
}

export interface ShowBrandInterface {
  name: string;
  slug: string;
}

export interface CreateBrandInterface {
  name: FormDataEntryValue | null;
  slug: FormDataEntryValue | null;
}

export interface UpdateBrandInterface {
  name: FormDataEntryValue | null;
  slug: FormDataEntryValue | null;
}
