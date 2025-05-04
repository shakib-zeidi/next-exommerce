"use server";

import { CreateUserInterface, UpdateUserInterface } from "@/contracts/admin/users";
import config from "../../../config";

const baseUrl = config.urls.admin;

export async function index() {
  const res = await fetch(`${baseUrl}/users`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  return data;
}

export async function show(id: number) {
  const res = await fetch(`${baseUrl}/users/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  return data;
}

export async function create(state: { success: boolean; errors: Record<string, string> }, formData: FormData) {
  try {
    const formValues: CreateUserInterface = {
      first_name: formData.get("first_name"),
      last_name: formData.get("last_name"),
      phone_number: formData.get("phone_number"),
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
      is_superuser: formData.get("is_superuser") ? true : false,
      is_staff: formData.get("is_staff") ? true : false,
    };

    const res = await fetch(`${baseUrl}/users/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    });

    const data = await res.json();

    if (!res.ok) {
      const errors: Record<string, string> = {};
      Object.entries(data).forEach(([key, messages]) => {
        if (Array.isArray(messages)) {
          errors[key] = messages.join(", ");
        } else {
          errors[key] = String(messages);
        }
      });

      return { success: false, errors, message: "خطا در ایجاد کاربر" };
    }

    return { success: true, errors: {}, message: "کاربر با موفقیت ایجاد شد" };
  } catch (error) {
    console.error("Error creating user:", error);
    return {
      success: false,
      errors: {},
      message: "مشکلی در برقراری ارتباط رخ داد",
    };
  }
}

export async function update(state: { success: boolean; errors: Record<string, string> }, formData: FormData) {
  const id = formData.get("id");
  if (!id) {
    return { success: false, errors: {}, message: "خطا: شناسه کاربر یافت نشد" };
  }

  try {
    const formValues: UpdateUserInterface = {
      first_name: formData.get("first_name"),
      last_name: formData.get("last_name"),
      phone_number: formData.get("phone_number"),
      username: formData.get("username"),
      email: formData.get("email"),
      is_superuser: formData.get("is_superuser") === "true",
      is_staff: formData.get("is_staff") === "true",
    };

    const password = formData.get("password");
    if (password) {
      formValues.password = password;
    }

    const res = await fetch(`${baseUrl}/users/${id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    });

    const data = await res.json();

    if (!res.ok) {
      const errors: Record<string, string> = {};
      Object.entries(data).forEach(([key, messages]) => {
        if (Array.isArray(messages)) {
          errors[key] = messages.join(", ");
        } else {
          errors[key] = String(messages);
        }
      });

      return { success: false, errors, message: "خطا در ویرایش کاربر" };
    }

    return { success: true, errors: {}, message: "کاربر با موفقیت ویرایش شد" };
  } catch (error) {
    console.error("Error updating user:", error);
    return {
      success: false,
      errors: {},
      message: "مشکلی در برقراری ارتباط رخ داد",
    };
  }
}

export async function destroy(id: number) {
  try {
    const res = await fetch(`${baseUrl}/users/${id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    if (!res.ok) {
      return { success: false, message: "خطا در حذف کاربر" };
    }

    return { success: true, errors: {}, message: "کاربر با موفقیت حذف شد" };
  } catch (error) {
    console.error("Error creating user:", error);
    return {
      success: false,
      errors: {},
      message: "مشکلی در برقراری ارتباط رخ داد",
    };
  }
}
