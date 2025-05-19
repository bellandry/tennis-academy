"use client";

import { CtaSection } from "@/components/cta-section";
import Footer from "@/components/footer";
import Header from "@/components/header";
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
import { Filter } from "lucide-react";
import { useEffect, useState } from "react";
import { AccomplishmentCard } from "./_components/accomplishement-card";
import { AccomplishmentStats } from "./_components/accomplishment-stats";

export function Accomplishments() {
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
      <main className="pt-20">
        {/* Hero section */}
        <section className="relative text-white">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1659081436930-f86b3ed51dc2")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-black/60" />
          </div>
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
                  onValueChange={(value) =>
                    setFilter(value as AccomplishmentType | "all")
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
                <AccomplishmentCard
                  accomplisment={item}
                  index={index}
                  key={index}
                />
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
        <AccomplishmentStats />

        {/* CTA section */}
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
