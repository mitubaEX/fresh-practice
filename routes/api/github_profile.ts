/** @jsx h */
import { Handlers } from "$fresh/server.ts";

export interface User {
  login: string;
  name: string;
  avatar_url: string;
}

export const handler: Handlers<User | null> = {
  async GET(_) {
    const resp = await fetch(`https://api.github.com/users/mitubaEX`);
    if (resp.status === 404) {
      return new Response(null)
    }
    const user: User = await resp.json();
    const { login, name, avatar_url } = user;
    return new Response(JSON.stringify({ login, name, avatar_url }), {
      headers: { "Content-Type": "application/json" },
    })
  },
};
