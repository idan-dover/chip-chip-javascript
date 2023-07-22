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

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.description);
    }

    const data = await res.json();
    localStorage.setItem("auth", JSON.stringify(data));
    return data;
  } catch (err) {
    toast.error(err.message);
  }
}
