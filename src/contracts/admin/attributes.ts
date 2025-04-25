export interface IndexAttributesInterface {
  id: number;
  name: string;
}

export interface ShowAttributeInterface {
  name: string;
}

export interface CreateAttributeInterface {
  name: FormDataEntryValue | null;
}

export interface UpdateAttributeInterface {
  name: FormDataEntryValue | null;
}
