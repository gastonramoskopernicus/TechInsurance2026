import InspexionaClient from "./InspexionaClient";

export const metadata = {
  title: "InspeXiona | Inspecciones digitales para seguros",
  description: "InspeXiona es el módulo de Tech Insurance para gestionar inspecciones digitales de vehículos, dispositivos y bienes asegurables mediante evidencias, geolocalización, trazabilidad y validación remota.",
};

export default function InspexionaPage() {
  return <InspexionaClient />;
}
