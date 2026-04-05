import Link from "next/link";

export default function InfosPratiquesPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col items-center justify-center bg-[#FFF5E6] px-4 text-center">
      <h1 className="text-4xl font-black text-[#1A1A1A] md:text-5xl">Infos pratiques</h1>
      <p className="mt-4 max-w-xl text-lg text-[#424242]">
        Cette page sera intégrée à la prochaine étape.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-xl border-4 border-black bg-white px-6 py-3 font-black text-[#1A1A1A] neo-shadow"
      >
        Retour à l&apos;accueil
      </Link>
    </main>
  );
}
