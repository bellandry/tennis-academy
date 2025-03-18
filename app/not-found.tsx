import { AlertTriangle, Home } from "lucide-react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 p-4">
      <div className="w-full max-w-md text-center">
        <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-tennis-50 text-tennis-600">
          <AlertTriangle size={40} />
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
          Page non trouvée
        </h2>
        <p className="text-muted-foreground mb-8">
          Désolé, la page que vous recherchez n&apos;existe pas ou a été
          déplacée.
        </p>

        <Link
          href="/"
          className="btn-tennis inline-flex items-center gap-2 w-full sm:w-fit justify-center"
        >
          <Home size={18} />
          <span>Retour à l&apos;accueil</span>
        </Link>

        {/* <div className="mt-12 text-sm text-muted-foreground">
          <p>
            Vous avez essayé d&apos;accéder à:{" "}
            <span className="font-mono bg-gray-100 px-2 py-1 rounded">
              {location.pathname}
            </span>
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default NotFoundPage;
