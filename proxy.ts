import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";

// Redirection optimiste : ne protège pas les Server Actions (elles
// contournent les matchers de proxy dans le pipeline de requêtes de Next),
// donc chaque Server Action revérifie elle-même la session via
// requireUserId() (voir src/lib/current-user.ts). Ce proxy n'évite qu'un
// aller-retour inutile côté pages pour un visiteur non connecté.
export default auth((req) => {
  if (!req.auth) {
    const loginUrl = new URL("/login", req.nextUrl.origin);
    return NextResponse.redirect(loginUrl);
  }
});

export const config = {
  matcher: ["/((?!api/auth|login|signup|_next/static|_next/image|favicon.ico).*)"],
};
