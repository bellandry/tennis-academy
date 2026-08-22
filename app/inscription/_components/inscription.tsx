"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { sendEmail } from "@/lib/email-service";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { Loader2, Phone, User, UserPlus, Users } from "lucide-react";
import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";

// Définir le schéma de validation
const formSchema = z.object({
  inscriptionType: z.enum(["self", "child", "multiple-children"], {
    required_error: "Veuillez sélectionner pour qui est cette inscription",
  }),
  programme: z.string({
    required_error: "Veuillez sélectionner un programme",
  }),
  firstName: z.string().min(2, {
    message: "Le prénom doit contenir au moins 2 caractères",
  }),
  lastName: z.string().min(2, {
    message: "Le nom doit contenir au moins 2 caractères",
  }),
  email: z.string().email({
    message: "Veuillez entrer une adresse email valide",
  }),
  phone: z.string().min(10, {
    message: "Veuillez entrer un numéro de téléphone valide",
  }),
  dateOfBirth: z.date({
    required_error: "Veuillez sélectionner une date de naissance",
  }),
  childrenInfo: z
    .array(
      z.object({
        firstName: z
          .string()
          .min(2, "Le prénom doit contenir au moins 2 caractères"),
        lastName: z
          .string()
          .min(2, "Le nom doit contenir au moins 2 caractères"),
        dateOfBirth: z.date({ required_error: "Date de naissance requise" }),
      })
    )
    .optional(),
  level: z.string({
    required_error: "Veuillez sélectionner un niveau",
  }),
  additionalInfo: z.string().optional(),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "Vous devez accepter les conditions générales",
  }),
  contactPreference: z.enum(["email", "whatsapp"], {
    required_error: "Veuillez sélectionner une préférence de contact",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export function Inscription() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [childrenCount, setChildrenCount] = useState(0);
  const [formMessage, setFormMessage] = useState<
    { type: "success" | "error"; text: string } | null
  >(null);

  // Initialiser le formulaire avec react-hook-form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      inscriptionType: "self",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      additionalInfo: "",
      acceptTerms: false,
      contactPreference: "whatsapp",
    },
  });

  const inscriptionType = useWatch({
    control: form.control,
    name: "inscriptionType",
  });

  // Gérer l'ajout d'un enfant
  const handleAddChild = () => {
    if (childrenCount < 5) {
      setChildrenCount(childrenCount + 1);
      const currentChildrenInfo = form.getValues("childrenInfo") || [];
      form.setValue("childrenInfo", [
        ...currentChildrenInfo,
        {
          firstName: "",
          lastName: "",
          dateOfBirth: undefined as unknown as Date,
        },
      ]);
    } else {
      setFormMessage({
        type: "error",
        text: "Vous ne pouvez pas ajouter plus de 5 enfants.",
      });
    }
  };

  // Gérer la suppression d'un enfant
  const handleRemoveChild = (index: number) => {
    if (childrenCount > 1) {
      setChildrenCount(childrenCount - 1);
      const currentChildrenInfo = form.getValues("childrenInfo") || [];
      const newChildrenInfo = [...currentChildrenInfo];
      newChildrenInfo.splice(index, 1);
      form.setValue("childrenInfo", newChildrenInfo);
    }
  };

  // Gérer la soumission du formulaire
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setFormMessage(null);

    try {
      // Formatter les données pour l'envoi
      const formattedData = {
        ...data,
        dateOfBirth: format(data.dateOfBirth, "dd/MM/yyyy"),
        childrenInfo: data.childrenInfo?.map((child) => ({
          ...child,
          dateOfBirth: format(child.dateOfBirth, "dd/MM/yyyy"),
        })),
      };

      // Déterminer la méthode d'envoi basée sur la préférence de contact
      if (data.contactPreference === "email") {
        await sendEmail({
          subject: "Nouvelle inscription Tennis Academy",
          body: formattedData,
        });
      } else {
        // Préparer le message WhatsApp
        let message = `Bonjour FOTA Tennis,\n\n`;

        if (data.inscriptionType === "self") {
          message += `Je souhaite m'inscrire à votre académie. Voici mes informations :\n\n`;
          message += `- *Nom et prénom :* ${formattedData.firstName} ${formattedData.lastName}\n`;
          message += `- *Email :* ${formattedData.email}\n`;
          message += `- *Téléphone :* ${formattedData.phone}\n`;
          message += `- *Date de naissance :* ${formattedData.dateOfBirth}\n\n`;
        } else if (data.inscriptionType === "child") {
          message += `Je souhaite inscrire mon enfant à votre académie. Voici nos informations :\n\n`;
          message += `*Informations du parent :*\n`;
          message += `- *Nom et prénom :* ${formattedData.firstName} ${formattedData.lastName}\n`;
          message += `- *Email :* ${formattedData.email}\n`;
          message += `- *Téléphone :* ${formattedData.phone}\n\n`;

          message += `🎾 *Informations de l'enfant :*\n`;
          if (
            formattedData.childrenInfo &&
            formattedData.childrenInfo.length > 0
          ) {
            message += `- *Nom et prénom :* ${formattedData.childrenInfo[0].firstName} ${formattedData.childrenInfo[0].lastName}\n`;
            message += `- *Date de naissance :* ${formattedData.childrenInfo[0].dateOfBirth}\n\n`;
          }
        } else if (data.inscriptionType === "multiple-children") {
          message += `Je souhaite inscrire mes enfants à votre académie. Voici nos informations :\n\n`;
          message += `*Informations du parent :*\n`;
          message += `- *Nom et prénom :* ${formattedData.firstName} ${formattedData.lastName}\n`;
          message += `- *Email :* ${formattedData.email}\n`;
          message += `- *Téléphone :* ${formattedData.phone}\n\n`;

          if (
            formattedData.childrenInfo &&
            formattedData.childrenInfo.length > 0
          ) {
            formattedData.childrenInfo.forEach((child, index) => {
              message += `  *Enfant ${index + 1} :*\n`;
              message += `- *Nom et prénom :* ${child.firstName} ${child.lastName}\n`;
              message += `- *Date de naissance :* ${child.dateOfBirth}\n\n`;
            });
          }
        }

        message += `- *Programme choisi :* Programme ${formattedData.programme}\n`;
        message += `- *Niveau actuel :* ${formattedData.level}\n`;

        if (formattedData.additionalInfo) {
          message += `*Informations supplémentaires :* ${formattedData.additionalInfo}\n`;
        }

        message += `\nMerci d'avance pour votre retour !`;

        // URL WhatsApp
        const whatsappUrl = `https://wa.me/+237690117802?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
      }

      setFormMessage({
        type: "success",
        text: "Nous vous contacterons prochainement pour confirmer votre inscription.",
      });

      // Réinitialiser le formulaire
      form.reset();
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire:", error);
      setFormMessage({
        type: "error",
        text: "Une erreur est survenue lors de l'envoi du formulaire. Veuillez réessayer.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Liste des programmes
  const programmes = [
    { id: "debutants", name: "Cours débutants" },
    { id: "intermediaires", name: "Cours intermédiaires" },
    { id: "competition", name: "Cours compétition" },
    { id: "stages", name: "Stages intensifs" },
  ];

  // Liste des niveaux
  const levels = [
    { id: "debutant", name: "Débutant" },
    { id: "intermediaire", name: "Intermédiaire" },
    { id: "avance", name: "Avancé" },
    { id: "expert", name: "Expert" },
  ];

  return (
    <>
      <Header />
      <main className="pt-24 pb-16">
        <div className="container px-4 mx-auto md:px-6">
          <div className="w-full p-2 mx-auto md:p-4">
            <div className="mb-8 text-center">
              <h1 className="mb-4 text-3xl font-bold md:text-4xl">
                Inscription à FOTA – Académie de Tennis
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Remplissez ce formulaire pour rejoindre l&apos;une des
                meilleures académies de tennis du Cameroun. Que vous soyez
                débutant ou joueur confirmé, FOTA vous accompagne vers
                l&apos;excellence
              </p>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-4 md:flex-row"
              >
                {/* Type d'inscription */}
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="inscriptionType"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel className="text-lg">
                          Je souhaite inscrire
                        </FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="self" />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer">
                                <span className="flex items-center gap-2">
                                  <User size={18} className="text-tennis-600" />
                                  Moi-même
                                </span>
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="child" />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer">
                                <span className="flex items-center gap-2">
                                  <UserPlus
                                    size={18}
                                    className="text-tennis-600"
                                  />
                                  Mon enfant
                                </span>
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="multiple-children" />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer">
                                <span className="flex items-center gap-2">
                                  <Users
                                    size={18}
                                    className="text-tennis-600"
                                  />
                                  Plusieurs enfants
                                </span>
                              </FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Programme */}
                  <FormField
                    control={form.control}
                    name="programme"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Programme</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Sélectionnez un programme" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {programmes.map((programme) => (
                              <SelectItem
                                key={programme.id}
                                value={programme.id}
                              >
                                {programme.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          Choisissez le programme qui correspond le mieux à vos
                          besoins.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Niveau */}
                  <FormField
                    control={form.control}
                    name="level"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Niveau actuel</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Sélectionnez votre niveau" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {levels.map((level) => (
                              <SelectItem key={level.id} value={level.id}>
                                {level.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="w-full space-y-4 md:w-2/3">
                  {/* Information personnelle */}
                  {inscriptionType === "self" && (
                    <div className="p-6 space-y-4 border border-gray-100 rounded-lg bg-gray-50">
                      <h3 className="text-lg font-semibold">
                        Vos informations
                      </h3>
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Prénom</FormLabel>
                              <FormControl>
                                <Input placeholder="Votre prénom" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Nom</FormLabel>
                              <FormControl>
                                <Input placeholder="Votre nom" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="dateOfBirth"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Date de naissance</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="date"
                                onChange={(e) => {
                                  field.onChange(new Date(e.target.value));
                                }}
                                value={
                                  field.value
                                    ? format(field.value, "yyyy-MM-dd")
                                    : ""
                                }
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  )}

                  {/* Informations de l'enfant */}
                  {inscriptionType === "child" && (
                    <div className="p-6 space-y-4 border border-gray-100 rounded-lg bg-gray-50">
                      <h3 className="text-lg font-semibold">
                        Informations de l&apos;enfant
                      </h3>
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <FormField
                          control={form.control}
                          name="childrenInfo.0.firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Prénom</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Prénom de l'enfant"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="childrenInfo.0.lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Nom</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Nom de l'enfant"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="childrenInfo.0.dateOfBirth"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel>Date de naissance</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="date"
                                onChange={(e) => {
                                  field.onChange(new Date(e.target.value));
                                }}
                                value={
                                  field.value
                                    ? format(field.value, "yyyy-MM-dd")
                                    : ""
                                }
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="pt-4 mt-4 border-t border-gray-200">
                        <h3 className="mb-4 text-lg font-semibold">
                          Vos coordonnées
                        </h3>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                          <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Votre prénom</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Votre prénom"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Votre nom</FormLabel>
                                <FormControl>
                                  <Input placeholder="Votre nom" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Informations pour plusieurs enfants */}
                  {inscriptionType === "multiple-children" && (
                    <div className="p-6 space-y-6 border border-gray-100 rounded-lg bg-gray-50">
                      <h3 className="text-lg font-semibold">
                        Informations des enfants
                      </h3>

                      {[...Array(childrenCount)].map((_, index) => (
                        <div
                          key={index}
                          className="p-4 bg-white border border-gray-200 rounded-lg"
                        >
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-medium">Enfant {index + 1}</h4>
                            {childrenCount > 1 && (
                              <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={() => handleRemoveChild(index)}
                              >
                                Supprimer
                              </Button>
                            )}
                          </div>

                          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <FormField
                              control={form.control}
                              name={`childrenInfo.${index}.firstName`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Prénom</FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="Prénom de l'enfant"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name={`childrenInfo.${index}.lastName`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Nom</FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="Nom de l'enfant"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <FormField
                            control={form.control}
                            name={`childrenInfo.${index}.dateOfBirth`}
                            render={({ field }) => (
                              <FormItem className="flex flex-col mt-4">
                                <FormLabel>Date de naissance</FormLabel>
                                <FormControl>
                                  <Input
                                    {...field}
                                    type="date"
                                    onChange={(e) => {
                                      field.onChange(new Date(e.target.value));
                                    }}
                                    value={
                                      field.value
                                        ? format(field.value, "yyyy-MM-dd")
                                        : ""
                                    }
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      ))}

                      {childrenCount < 5 && (
                        <Button
                          type="button"
                          variant="outline"
                          onClick={handleAddChild}
                          className="mt-2"
                        >
                          Ajouter un enfant
                        </Button>
                      )}

                      <div className="pt-4 mt-4 border-t border-gray-200">
                        <h3 className="mb-4 text-lg font-semibold">
                          Vos coordonnées
                        </h3>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                          <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Votre prénom</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Votre prénom"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Votre nom</FormLabel>
                                <FormControl>
                                  <Input placeholder="Votre nom" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Coordonnées */}
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="votre.email@example.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Téléphone</FormLabel>
                          <FormControl>
                            <Input placeholder="06 12 34 56 78" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Informations supplémentaires */}
                  <FormField
                    control={form.control}
                    name="additionalInfo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Informations supplémentaires</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Informations complémentaires, besoins particuliers, etc."
                            {...field}
                            rows={4}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Préférence de contact */}
                  <FormField
                    control={form.control}
                    name="contactPreference"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>Moyen de contact préféré</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1"
                          >
                            {/* <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="email" />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer">
                                <span className="flex items-center gap-2">
                                  <Send size={18} className="text-tennis-600" />
                                  Email
                                </span>
                              </FormLabel>
                            </FormItem> */}
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="whatsapp" />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer">
                                <span className="flex items-center gap-2">
                                  <Phone
                                    size={18}
                                    className="text-tennis-600"
                                  />
                                  WhatsApp
                                </span>
                              </FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Conditions générales */}
                  <FormField
                    control={form.control}
                    name="acceptTerms"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="font-normal">
                            J&apos;accepte les conditions générales et la
                            politique de confidentialité
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />

                  {/* Bouton de soumission */}
                  <Button
                    type="submit"
                    className="w-full bg-tennis-700 hover:bg-tennis-800"
                    disabled={isSubmitting}
                    size="lg"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <Loader2 className="mr-2 size-4" />
                        Envoi en cours...
                      </span>
                    ) : (
                      "Envoyer mon inscription"
                    )}
                  </Button>

                  {formMessage && (
                    <p
                      role={formMessage.type === "error" ? "alert" : "status"}
                      aria-live="polite"
                      className={`mt-4 rounded-lg p-3 text-sm ${
                        formMessage.type === "error"
                          ? "bg-red-50 text-red-800"
                          : "bg-green-50 text-green-800"
                      }`}
                    >
                      {formMessage.text}
                    </p>
                  )}
                </div>
              </form>
            </Form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
