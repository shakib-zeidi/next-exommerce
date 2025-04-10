export interface Register {
  username: FormDataEntryValue | null;
  email: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
}

export interface Login {
  email: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
}

export interface AuthState {
  success: boolean;
  errors: Record<string, string>;
  message: string;
}
