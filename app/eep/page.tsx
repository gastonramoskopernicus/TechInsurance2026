import EepClient from "./EepClient";

export const metadata = {
  title: "EEP | Engagement Ecosystem Platform",
  description: "EEP es una plataforma de inteligencia de engagement diseñada para aseguradoras, brokers, productores y ecosistemas de distribución. Centraliza eventos, comportamientos e interacciones para construir perfiles dinámicos, predecir oportunidades y ejecutar acciones automáticas.",
  keywords: [
    "engagement platform",
    "engagement intelligence",
    "insurance engagement",
    "customer engagement insurance",
    "behavioral twin",
    "insurance analytics",
    "customer retention",
    "producer engagement",
    "insurance loyalty",
    "ecosystem intelligence"
  ].join(", "),
};

export default function EepPage() {
  return <EepClient />;
}
