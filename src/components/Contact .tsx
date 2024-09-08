"use client"
import React from "react";
import { Facebook, Youtube, Twitter, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, FormEvent } from "react";

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
        setForm({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus(`Error: ${result.message}`);
      }
    } catch (error) {
      setStatus("An unexpected error occurred.");
    }
  };

  return (
    <div className=" min-h-screen">
      <header className="relative w-full h-64">
        <Image
          src="/alum2.png"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="h-[500px]"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Contactez-nous</h1>
          <div className="text-white mt-2">
            <Link href={"/"}>Home</Link> <span className="mx-2">{">"}</span>{" "}
            <span>Contactez-nous</span>
          </div>
        </div>
      </header>
      <main className="container mx-auto p-6">
        <div className="flex flex-wrap -mx-3">
          <div className="w-full lg:w-1/2 px-3">
            <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Restons en contact</h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="mb-4">
                    <label className="block text-white">Nom complet</label>
                    <input
                      type="text"
                      id="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border rounded-lg"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-white">E-mail</label>
                    <input
                      type="email"
                      id="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border rounded-lg"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-white">Téléphone</label>
                    <input
                      type="tel"
                      id="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border rounded-lg"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-white">Sujet</label>
                    <input
                      type="text"
                      className="w-full p-3 border rounded-lg"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-white">Message</label>
                  <textarea
                    className="w-full p-3 border rounded-lg"
                    id="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full p-3 bg-blue-600 text-white rounded-lg"
                >
                  Envoyer Message
                </button>
                {status && <p className="mt-4">{status}</p>}
              </form>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-3 mt-6 lg:mt-0">
            <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
              <p>
                <strong>Adresse :</strong> 63, Av Ahmed El Mansour Eddahbi Cité
                Dakhla, Agadir Maroc
              </p>
              <p>
                <strong>Phone Number :</strong> +212 (05) 28 23 16 29, +212 (05)
                28 21 14 18
              </p>
              <p>
                <strong>Email Address :</strong> contact@ulsa.ma
              </p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-blue-500">
                  <Facebook />
                </a>
                <a href="#" className="text-green-500">
                  <Youtube />
                </a>
                <a href="#" className="text-blue-400">
                  <Twitter />
                </a>
                <a href="#" className="text-green-600">
                  <Instagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="w-full lg:h-[70vh]">
        <img src="/Map.png" alt="" />
      </div>
    </div>
  );
}
