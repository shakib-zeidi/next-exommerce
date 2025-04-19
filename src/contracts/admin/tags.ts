export interface IndexTagsInterface {
  id: number;
  name: string;
  slug: string;
}

export interface ShowTagInterface {
  name: string;
  slug: string;
}

export interface CreateTagInterface {
  name: FormDataEntryValue | null;
  slug: FormDataEntryValue | null;
}

export interface UpdateTagInterface {
  name: FormDataEntryValue | null;
  slug: FormDataEntryValue | null;
}
