import { LOGIN_URL } from "./backend";

export async function apiLogin(user) {
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
    console.log(data);
    return data;
  } catch {
    throw Error("Failed to log in");
  }
}
