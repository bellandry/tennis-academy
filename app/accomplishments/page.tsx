"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { accomplishments, AccomplishmentType } from "@/constants";
import { animateOnScroll } from "@/lib/animations";
import { Calendar, ChevronRight, Filter, Trophy, User } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Accomplissements() {
  const [filter, setFilter] = useState<AccomplishmentType | "all">("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Filtrer les accomplissements
  const filteredAccomplishments =
    filter === "all"
      ? accomplishments
      : accomplishments.filter((a) => a.type === filter);

  // Paginer les accomplissements
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredAccomplishments.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(filteredAccomplishments.length / itemsPerPage);

  useEffect(() => {
    window.scrollTo(0, 0);
    animateOnScroll();
    window.addEventListener("scroll", animateOnScroll);
    return () => window.removeEventListener("scroll", animateOnScroll);
  }, []);

  useEffect(() => {
    // Réinitialiser la page quand le filtre change
    setCurrentPage(1);
  }, [filter]);

  return (
    <>
      <Header />
      <main className="pt-24 md:pt-28">
        {/* Hero section */}
        <section className="relative bg-gradient-to-r from-tennis-700 to-tennis-500 text-white">
          <div className="container mx-auto px-6 py-16 md:py-24">
            <div className="max-w-3xl mx-auto text-center animate-on-scroll">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Galerie d&apos;accomplissements
              </h1>
              <p className="text-xl md:text-2xl text-gray-100 mb-8">
                Découvrez les succès de nos élèves et les moments forts de notre
                académie
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-tennis-50 to-transparent" />
        </section>
        <div className="h-24 -mt-4 bg-gradient-to-t to-tennis-50 from-transparent" />

        {/* Filter section */}
        <section className="py-8 border-b border-gray-200">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <h2 className="text-2xl font-bold">Nos réalisations</h2>
              <div className="flex items-center gap-2">
                <Filter size={20} className="text-gray-500" />
                <Tabs
                  value={filter}
                  onValueChange={(v) =>
                    setFilter(v as AccomplishmentType | "all")
                  }
                >
                  <TabsList>
                    <TabsTrigger value="all">Tous</TabsTrigger>
                    <TabsTrigger value="competition">Compétitions</TabsTrigger>
                    <TabsTrigger value="formation">Formations</TabsTrigger>
                    <TabsTrigger value="evenement">Événements</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>
          </div>
        </section>

        {/* Accomplishments grid */}
        <section className="section-padding">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentItems.map((item, index) => (
                <Card
                  key={item.id}
                  className="overflow-hidden border-gray-200 hover:shadow-lg transition-shadow animate-on-scroll"
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                >
                  <div className="aspect-[16/9] relative overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      width={100}
                      height={100}
                    />
                    <div className="absolute top-3 right-3">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          item.type === "competition"
                            ? "bg-amber-100 text-amber-800"
                            : item.type === "formation"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-purple-100 text-purple-800"
                        }`}
                      >
                        {item.type === "competition"
                          ? "Compétition"
                          : item.type === "formation"
                          ? "Formation"
                          : "Événement"}
                      </span>
                    </div>
                  </div>

                  <CardHeader className="pb-2">
                    <div className="flex items-center text-sm text-gray-500 mb-1">
                      <Calendar size={14} className="mr-1" />
                      {item.date}
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription className="line-clamp-2">
                      {item.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="py-0">
                    <div className="flex items-start gap-2 text-sm">
                      <User
                        size={16}
                        className="shrink-0 mt-0.5 text-gray-500"
                      />
                      <div>
                        <p className="font-medium mb-1">Participants:</p>
                        <p className="text-gray-600 line-clamp-1">
                          {item.students.join(", ")}
                        </p>
                      </div>
                    </div>

                    {item.achievement && (
                      <div className="flex items-start gap-2 mt-3 text-sm">
                        <Trophy
                          size={16}
                          className="shrink-0 mt-0.5 text-amber-500"
                        />
                        <div>
                          <p className="font-medium mb-1">Résultat:</p>
                          <p className="text-gray-600">{item.achievement}</p>
                        </div>
                      </div>
                    )}
                  </CardContent>

                  <CardFooter className="pt-4">
                    <Button
                      variant="outline"
                      className="w-full text-tennis-600 border-tennis-200 hover:bg-tennis-50"
                    >
                      Voir les détails <ChevronRight size={16} />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <Pagination className="mt-12">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage > 1) setCurrentPage(currentPage - 1);
                      }}
                      className={
                        currentPage === 1
                          ? "pointer-events-none opacity-50"
                          : ""
                      }
                    />
                  </PaginationItem>

                  {Array.from({ length: totalPages }).map((_, index) => (
                    <PaginationItem key={index}>
                      <PaginationLink
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setCurrentPage(index + 1);
                        }}
                        isActive={currentPage === index + 1}
                      >
                        {index + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}

                  <PaginationItem>
                    <PaginationNext
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage < totalPages)
                          setCurrentPage(currentPage + 1);
                      }}
                      className={
                        currentPage === totalPages
                          ? "pointer-events-none opacity-50"
                          : ""
                      }
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            )}
          </div>
        </section>

        {/* Stats section */}
        <section className="section-padding bg-tennis-50 border-y border-tennis-100">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-12 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Notre bilan en chiffres
              </h2>
              <p className="text-lg text-gray-600">
                L&apos;excellence de notre académie se reflète dans les succès
                accumulés par nos étudiants
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 animate-on-scroll">
              {[
                { label: "Compétitions remportées", value: "124+" },
                { label: "Élèves formés", value: "350+" },
                { label: "Années d'expérience", value: "15" },
                { label: "Tournois organisés", value: "38" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-lg bg-white shadow-subtle border border-tennis-100"
                  style={{ animationDelay: `${0.15 * (index + 1)}s` }}
                >
                  <p className="text-3xl md:text-4xl font-bold text-tennis-600 mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm md:text-base text-gray-600">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="section-padding">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Rejoignez notre académie
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Vous aussi, vous pouvez atteindre l&apos;excellence. Nos
                programmes s&apos;adaptent à tous les niveaux et à tous les
                objectifs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  className="bg-tennis-600 text-white hover:bg-tennis-700"
                  size="lg"
                >
                  S&apos;inscrire maintenant
                </Button>
                <Button
                  variant="outline"
                  className="border-tennis-200 text-tennis-600 hover:bg-tennis-50"
                  size="lg"
                >
                  Découvrir nos programmes
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
