"use server";

import { Login, Register } from "@/contracts/home/auth";
import { cookies } from "next/headers";

const baseUrl = "http://localhost:8000/api";

export async function register(
  state: { success: boolean; errors: Record<string, string> },
  formData: FormData
) {
  try {
    const formValues: Register = {
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const res = await fetch(`${baseUrl}/register/`, {
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

      return { success: false, errors, message: "خطا در ایجاد حساب کاربری" };
    }

    return {
      success: true,
      errors: {},
      message: data.messages,
    };
  } catch (error) {
    console.error("Error registering user:", error);
    return {
      success: false,
      errors: {},
      message: "مشکلی در برقراری ارتباط رخ داد",
    };
  }
}

export async function login(
  state: { success: boolean; errors: Record<string, string> },
  formData: FormData
) {
  try {
    const formValues: Login = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const res = await fetch(`${baseUrl}/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    });

    const data = await res.json();

    if (res.ok) {
      const userCookies = await cookies();
      userCookies.set("ecommerce_token", data.tokens.access);
    }

    if (!res.ok) {
      const errors: Record<string, string> = {};
      Object.entries(data).forEach(([key, messages]) => {
        if (Array.isArray(messages)) {
          errors[key] = messages.join(", ");
        } else {
          errors[key] = String(messages);
        }
      });

      return { success: false, errors, message: "خطا در ورود به حساب کاربری" };
    }

    return { success: true, errors: {}, message: data.messages };
  } catch (error) {
    console.error("Error logging in user:", error);
    return {
      success: false,
      errors: {},
      message: "مشکلی در برقراری ارتباط رخ داد",
    };
  }
}
