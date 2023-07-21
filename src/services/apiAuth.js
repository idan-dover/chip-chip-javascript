import { toast } from "react-hot-toast";
import { LOGIN_URL } from "./URLs";

export async function login(user) {
  try {
    const res = await fetch(LOGIN_URL, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw new Error(res.text());

    const data = await res.json();
    localStorage.setItem("auth", JSON.stringify(data));
    return data;
  } catch (err) {
    toast.error("Failed to log in");
  }
}
