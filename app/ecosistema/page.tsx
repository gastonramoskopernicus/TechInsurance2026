export default function EcosistemaPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="relative pt-32 pb-16 border-b border-border/50 bg-[#050505] px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">Ecosistema & Developer Platform</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">Conecte su entorno a nuestra red de integraciones certificadas y APIs. Un estándar abierto para potenciar colaboraciones sistémicas.</p>
        </div>
      </section>
      
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 border border-border/50 rounded-xl bg-background">
               <h3 className="font-bold text-xl mb-4 text-white">Partners e Integraciones</h3>
               <p className="text-muted-foreground">Colabore con la red de servicios insurtech, oráculos de datos KYC y procesadores de pago validados por el mercado.</p>
            </div>
            <div className="p-8 border border-border/50 rounded-xl bg-background">
               <h3 className="font-bold text-xl mb-4 text-white">APIs de Suscripción</h3>
               <p className="text-muted-foreground">Documentación detallada sobre endpoints OpenInsurance. Autenticación robusta (OAuth2), rate limits, y sandbox.</p>
            </div>
            <div className="p-8 border border-border/50 rounded-xl bg-background">
               <h3 className="font-bold text-xl mb-4 text-white">Templates B2B2C</h3>
               <p className="text-muted-foreground">Plantillas pre-estructuradas y widgets white-label listos para acoplarse en la web del patrocinador (banco, telecom, aerolínea).</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
