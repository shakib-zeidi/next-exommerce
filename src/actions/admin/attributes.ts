"use server";

import { UpdateAttributeInterface } from "@/contracts/admin/attributes";
import { CreateBrandInterface } from "@/contracts/admin/brands";
import config from "../../../config";

const baseUrl = config.urls.admin;

export async function index() {
  const res = await fetch(`${baseUrl}/attributes`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  return data;
}

export async function show(id: number) {
  const res = await fetch(`${baseUrl}/attributes/${id}`, {
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
    const formValues: CreateBrandInterface = {
      name: formData.get("name"),
      slug: formData.get("slug"),
    };

    const res = await fetch(`${baseUrl}/attributes/`, {
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

      return { success: false, errors, message: "خطا در ایجاد ویژگی" };
    }

    return { success: true, errors: {}, message: "ویژگی با موفقیت ایجاد شد" };
  } catch (error) {
    console.error("Error creating attribute:", error);
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
    return { success: false, errors: {}, message: "خطا: شناسه ویژگی یافت نشد" };
  }

  try {
    const formValues: UpdateAttributeInterface = {
      name: formData.get("name"),
    };

    const res = await fetch(`${baseUrl}/attributes/${id}/`, {
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

      return { success: false, errors, message: "خطا در ویرایش ویژگی" };
    }

    return { success: true, errors: {}, message: "ویژگی با موفقیت ویرایش شد" };
  } catch (error) {
    console.error("Error updating attribute:", error);
    return {
      success: false,
      errors: {},
      message: "مشکلی در برقراری ارتباط رخ داد",
    };
  }
}

export async function destroy(id: number) {
  try {
    const res = await fetch(`${baseUrl}/attributes/${id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    await res.json();

    if (!res.ok) {
      return { success: false, message: "خطا در حذف ویژگی" };
    }

    return { success: true, errors: {}, message: "ویژگی با موفقیت حذف شد" };
  } catch (error) {
    console.error("Error deleting attribute:", error);
    return {
      success: false,
      errors: {},
      message: "مشکلی در برقراری ارتباط رخ داد",
    };
  }
}
