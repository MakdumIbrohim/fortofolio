import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CertificatesHacktiv8 = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <Button
            onClick={() => navigate("/")}
            className="mb-4 bg-portfolio-yellow text-portfolio-black border-2 border-portfolio-black hover:bg-portfolio-yellow/80"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Beranda
          </Button>
          <h1 className="text-4xl font-bold text-center text-portfolio-black mb-4">
            Sertifikat Hacktiv8
          </h1>
          <p className="text-center text-gray-600">
            Daftar sertifikat dari platform Hacktiv8
          </p>
        </div>

        <div className="text-center py-12">
          <p className="text-lg text-gray-600">Belum ada sertifikat dari Hacktiv8</p>
        </div>
      </div>
    </div>
  );
};

export default CertificatesHacktiv8;