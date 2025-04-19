export interface IndexUsersInterface {
  id: number;
  username: string;
  email: string;
  phone_number: string;
}

export interface ShowUserInterface {
  first_name: string;
  last_name: string;
  phone_number: string;
  username: string;
  email: string;
  password: string;
  is_superuser: boolean;
  is_staff: boolean;
}

export interface CreateUserInterface {
  first_name: FormDataEntryValue | null;
  last_name: FormDataEntryValue | null;
  phone_number: FormDataEntryValue | null;
  username: FormDataEntryValue | null;
  email: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
  is_superuser: boolean;
  is_staff: boolean;
}

export interface UpdateUserInterface {
  first_name: FormDataEntryValue | null;
  last_name: FormDataEntryValue | null;
  phone_number: FormDataEntryValue | null;
  username: FormDataEntryValue | null;
  email: FormDataEntryValue | null;
  password?: FormDataEntryValue | null;
  is_superuser: boolean;
  is_staff: boolean;
}
