"use server";

import { CreateTagInterface, UpdateTagInterface } from "@/contracts/admin/tags";
import config from "../../../config";

const baseUrl = config.urls.admin;

export async function index() {
  const res = await fetch(`${baseUrl}/tags`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  return data;
}

export async function show(id: number) {
  const res = await fetch(`${baseUrl}/tags/${id}`, {
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
    const formValues: CreateTagInterface = {
      name: formData.get("name"),
      slug: formData.get("slug"),
    };

    const res = await fetch(`${baseUrl}/tags/`, {
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

      return { success: false, errors, message: "خطا در ایجاد تگ" };
    }

    return { success: true, errors: {}, message: "تگ با موفقیت ایجاد شد" };
  } catch (error) {
    console.error("Error creating tag:", error);
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
    return { success: false, errors: {}, message: "خطا: شناسه تگ یافت نشد" };
  }

  try {
    const formValues: UpdateTagInterface = {
      name: formData.get("name"),
      slug: formData.get("slug"),
    };

    const res = await fetch(`${baseUrl}/tags/${id}/`, {
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

      return { success: false, errors, message: "خطا در ویرایش تگ" };
    }

    return { success: true, errors: {}, message: "تگ با موفقیت ویرایش شد" };
  } catch (error) {
    console.error("Error updating tag:", error);
    return {
      success: false,
      errors: {},
      message: "مشکلی در برقراری ارتباط رخ داد",
    };
  }
}

export async function destroy(id: number) {
  try {
    const res = await fetch(`${baseUrl}/tags/${id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    await res.json();

    if (!res.ok) {
      return { success: false, message: "خطا در حذف تگ" };
    }

    return { success: true, errors: {}, message: "تگ با موفقیت حذف شد" };
  } catch (error) {
    console.error("Error deleting tag:", error);
    return {
      success: false,
      errors: {},
      message: "مشکلی در برقراری ارتباط رخ داد",
    };
  }
}
