import { cookies } from "next/headers";

export const getUserServer = async () => {
  try {
    const cookieStore = await cookies();
    const cookieHeader = cookieStore.toString();

    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/auth/me", {
      headers: {
        Cookie: cookieHeader,
      },
      credentials: "include",
      cache: "no-store",
    });

    if (!res.ok) return null;

    const json = await res.json();
    console.log(json);
    return json.data;
  } catch {
    return null;
  }
};
