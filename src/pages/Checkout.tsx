import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";

interface CheckoutStep {
  title: string;
  description: string;
}

const steps: CheckoutStep[] = [
  {
    title: "Informações Pessoais",
    description: "Preencha seus dados para o ingresso",
  },
  {
    title: "Tipo de Ingresso",
    description: "Escolha a categoria do seu ingresso",
  },
  {
    title: "Pagamento",
    description: "Escolha a forma de pagamento",
  },
  {
    title: "Confirmação",
    description: "Revise suas informações",
  },
];

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    ticketType: "",
    paymentMethod: "",
  });

  const progress = ((currentStep + 1) / steps.length) * 100;

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome completo</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Digite seu nome completo"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Digite seu e-mail"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Telefone</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="(00) 00000-0000"
              />
            </div>
          </div>
        );
      case 1:
        return (
          <RadioGroup
            value={formData.ticketType}
            onValueChange={(value) => setFormData({ ...formData, ticketType: value })}
            className="space-y-4"
          >
            <div className="flex items-center space-x-4 border p-4 rounded-lg hover:border-sidebar-accent cursor-pointer">
              <RadioGroupItem value="standard" id="standard" />
              <Label htmlFor="standard" className="flex-1">
                <div className="font-medium">Ingresso Padrão</div>
                <div className="text-sm text-gray-500">Acesso a todas as palestras</div>
                <div className="text-lg font-semibold mt-1">R$ 100,00</div>
              </Label>
            </div>
            <div className="flex items-center space-x-4 border p-4 rounded-lg hover:border-sidebar-accent cursor-pointer">
              <RadioGroupItem value="vip" id="vip" />
              <Label htmlFor="vip" className="flex-1">
                <div className="font-medium">Ingresso VIP</div>
                <div className="text-sm text-gray-500">Acesso VIP + área exclusiva</div>
                <div className="text-lg font-semibold mt-1">R$ 200,00</div>
              </Label>
            </div>
          </RadioGroup>
        );
      case 2:
        return (
          <RadioGroup
            value={formData.paymentMethod}
            onValueChange={(value) => setFormData({ ...formData, paymentMethod: value })}
            className="space-y-4"
          >
            <div className="flex items-center space-x-4 border p-4 rounded-lg hover:border-sidebar-accent cursor-pointer">
              <RadioGroupItem value="credit" id="credit" />
              <Label htmlFor="credit" className="flex-1">
                <div className="font-medium">Cartão de Crédito</div>
                <div className="text-sm text-gray-500">Pague em até 12x</div>
              </Label>
            </div>
            <div className="flex items-center space-x-4 border p-4 rounded-lg hover:border-sidebar-accent cursor-pointer">
              <RadioGroupItem value="pix" id="pix" />
              <Label htmlFor="pix" className="flex-1">
                <div className="font-medium">PIX</div>
                <div className="text-sm text-gray-500">Pagamento instantâneo</div>
              </Label>
            </div>
          </RadioGroup>
        );
      case 3:
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-center">
              <CheckCircle2 className="w-16 h-16 text-green-500" />
            </div>
            <div className="space-y-4">
              <div className="border-b pb-2">
                <div className="text-sm text-gray-500">Nome</div>
                <div className="font-medium">{formData.name}</div>
              </div>
              <div className="border-b pb-2">
                <div className="text-sm text-gray-500">E-mail</div>
                <div className="font-medium">{formData.email}</div>
              </div>
              <div className="border-b pb-2">
                <div className="text-sm text-gray-500">Tipo de Ingresso</div>
                <div className="font-medium">
                  {formData.ticketType === "standard" ? "Ingresso Padrão" : "Ingresso VIP"}
                </div>
              </div>
              <div className="border-b pb-2">
                <div className="text-sm text-gray-500">Forma de Pagamento</div>
                <div className="font-medium">
                  {formData.paymentMethod === "credit" ? "Cartão de Crédito" : "PIX"}
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardContent className="p-6">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold">{steps[currentStep].title}</h2>
              <p className="text-gray-500">{steps[currentStep].description}</p>
            </div>

            <Progress value={progress} className="h-2" />

            <div className="mt-8">{renderStep()}</div>

            <div className="flex justify-between mt-8">
              {currentStep > 0 ? (
                <Button
                  variant="outline"
                  onClick={handleBack}
                  className="flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Voltar
                </Button>
              ) : (
                <div />
              )}
              <Button
                onClick={handleNext}
                className="flex items-center gap-2"
                disabled={currentStep === steps.length - 1}
              >
                {currentStep === steps.length - 1 ? "Concluir" : "Próximo"}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Checkout;