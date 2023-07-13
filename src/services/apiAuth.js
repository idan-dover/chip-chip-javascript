import { toast } from "react-hot-toast";
import { LOGIN_URL } from "./backend";

export async function login(user) {
  try {
    const res = await fetch(LOGIN_URL, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();

    const data = await res.json();
    localStorage.setItem("auth", JSON.stringify(data));
    console.log(JSON.parse(localStorage.getItem("auth")));
    return data;
  } catch {
    toast.error("Failed to log in");
  }
}
