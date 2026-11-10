import type { Metadata } from "next";

export const metadata: Metadata = { title: "Gracias | EdRos Capital" };

export default function Thanks() {
  return (
    <main className="thank-you">
      <span className="eyebrow">EdRos Capital</span>
      <h1>Gracias por <em>escribirme.</em></h1>
      <p>Tu solicitud se ha enviado. Te contactaré por correo para acordar una fecha.</p>
      <a className="button" href="/">Volver al inicio <span aria-hidden="true">↗</span></a>
    </main>
  );
}
