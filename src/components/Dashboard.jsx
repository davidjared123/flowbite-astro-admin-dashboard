import React, { useState } from "react";
import StepList from "./StepList";
import StepDetails from "./StepDetails";
import { steps } from "../../data/steps";

export default function Dashboard() {
  const [selected, setSelected] = useState(0);
  const [selectedSubStep, setSelectedSubStep] = useState(null);
  const [formData, setFormData] = useState({
    businessName: "The Gambit Man LLC",
    address: "332 Rockcastle Dr",
    city: "Murfreesboro",
    state: "Tennessee",
    zip: "37128",
    entityType: "LLC / LLP",
    entityState: "Tennessee",
    owner: "Joel Carrasco Rodriguez",
    ownership: "100 %",
    creditScore: "",
    ein: "99-4239504",
    businessPhone: "615-527-6890",
    serviceProvider: "Phone.com",
    businessWebsite: "www.thegambitman.com",
    businessEmail: "joel@thegambitman.com",
    licenseRequired: null,
  });

  // Si hay un subpaso seleccionado, mostrar solo la vista detallada a pantalla completa
  if (selectedSubStep !== null) {
    return (
      <div className="flex px-4 pt-6 w-full">
        <StepDetails
          step={steps[selected]}
          selectedSubStep={selectedSubStep}
          setSelectedSubStep={setSelectedSubStep}
          formData={formData}
          setFormData={setFormData}
        />
      </div>
    );
  }

  // Vista normal: lista de pasos y subpasos
  return (
    <div className="flex gap-8 px-4 pt-6">
      <StepList steps={steps} selected={selected} onSelect={setSelected} />
      <StepDetails
        step={steps[selected]}
        selectedSubStep={selectedSubStep}
        setSelectedSubStep={setSelectedSubStep}
        formData={formData}
        setFormData={setFormData}
      />
    </div>
  );
}
